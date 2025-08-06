#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔍 EduClay Deployment Readiness Check\n');

// Check files
const requiredFiles = [
  'package.json',
  'next.config.ts',
  'src/app/page.tsx',
  'src/app/layout.tsx',
  '.env'
];

console.log('📁 Checking required files...');
let allGood = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allGood = false;
  }
});

// Check deployment configs
const deploymentConfigs = [
  'vercel.json',
  'netlify.toml',
  'Dockerfile'
];

console.log('\n🚀 Checking deployment configurations...');
deploymentConfigs.forEach(config => {
  if (fs.existsSync(config)) {
    console.log(`✅ ${config}`);
  } else {
    console.log(`⚠️ ${config} - Optional (not required for all platforms)`);
  }
});

// Check package.json scripts
console.log('\n📦 Checking package.json scripts...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const scripts = packageJson.scripts;
  
  const requiredScripts = ['dev', 'build', 'start'];
  requiredScripts.forEach(script => {
    if (scripts[script]) {
      console.log(`✅ ${script} script`);
    } else {
      console.log(`❌ ${script} script - MISSING`);
      allGood = false;
    }
  });
  
  if (scripts['dev:server'] && scripts['start:server']) {
    console.log('✅ Custom server scripts available');
  }
} catch (error) {
  console.log('❌ Error reading package.json');
  allGood = false;
}

// Check build
console.log('\n🏗️ Checking build...');
if (fs.existsSync('.next')) {
  console.log('✅ Build directory exists');
} else {
  console.log('⚠️ Build directory not found - run "npm run build"');
}

// Check environment variables
console.log('\n🔧 Checking environment variables...');
try {
  const envContent = fs.readFileSync('.env', 'utf8');
  const requiredVars = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID'
  ];
  
  requiredVars.forEach(varName => {
    if (envContent.includes(varName)) {
      console.log(`✅ ${varName}`);
    } else {
      console.log(`❌ ${varName} - MISSING`);
      allGood = false;
    }
  });
} catch (error) {
  console.log('❌ Error reading .env file');
  allGood = false;
}

// Test build
console.log('\n🧪 Testing build...');
try {
  console.log('Running build test (this may take a moment)...');
  execSync('npm run build', { stdio: 'pipe', timeout: 60000 });
  console.log('✅ Build test successful');
} catch (error) {
  console.log('❌ Build test failed');
  console.log('   Run "npm run build" to see errors');
  allGood = false;
}

// Final result
console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('🎉 DEPLOYMENT READY!');
  console.log('\n📋 Next steps:');
  console.log('1. Choose your deployment platform');
  console.log('2. Push code to repository');
  console.log('3. Configure environment variables');
  console.log('4. Deploy!');
  console.log('\n🚀 Recommended platforms:');
  console.log('- Vercel (easiest)');
  console.log('- Netlify');
  console.log('- Docker');
  console.log('- Traditional server');
} else {
  console.log('❌ ISSUES FOUND');
  console.log('\n🔧 Please fix the issues above before deploying');
  console.log('💡 Run "npm run build" to test locally');
}

console.log('\n📄 See DEPLOYMENT_FIXED.md for detailed instructions');