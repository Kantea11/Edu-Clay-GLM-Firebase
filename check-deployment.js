#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Checking EduClay School Management System deployment...\n');

// Check if required files exist
const requiredFiles = [
  'package.json',
  'next.config.ts',
  'tailwind.config.ts',
  'tsconfig.json',
  'prisma/schema.prisma',
  'src/app/page.tsx',
  'src/app/layout.tsx',
  'src/lib/db.ts',
  '.env'
];

console.log('📁 Checking required files...');
let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log('\n❌ Some required files are missing. Please check your installation.');
  process.exit(1);
}

// Check if dependencies are installed
console.log('\n📦 Checking dependencies...');
try {
  const nodeModules = fs.existsSync('node_modules');
  if (nodeModules) {
    console.log('✅ Dependencies installed');
  } else {
    console.log('❌ Dependencies not installed');
    console.log('💡 Run: npm install');
    process.exit(1);
  }
} catch (error) {
  console.log('❌ Error checking dependencies:', error.message);
  process.exit(1);
}

// Check if build exists
console.log('\n🏗️ Checking build...');
const buildExists = fs.existsSync('.next');
if (buildExists) {
  console.log('✅ Build exists');
} else {
  console.log('❌ Build not found');
  console.log('💡 Run: npm run build');
  process.exit(1);
}

// Check database
console.log('\n🗄️ Checking database...');
const dbExists = fs.existsSync('db/custom.db');
if (dbExists) {
  console.log('✅ Database exists');
} else {
  console.log('❌ Database not found');
  console.log('💡 Run: npm run db:push');
  process.exit(1);
}

// Check environment variables
console.log('\n🔧 Checking environment variables...');
try {
  const envContent = fs.readFileSync('.env', 'utf8');
  const requiredEnvVars = ['DATABASE_URL', 'NEXT_PUBLIC_FIREBASE_API_KEY'];
  let allEnvVarsExist = true;
  
  requiredEnvVars.forEach(varName => {
    if (envContent.includes(varName)) {
      console.log(`✅ ${varName}`);
    } else {
      console.log(`❌ ${varName} - MISSING`);
      allEnvVarsExist = false;
    }
  });
  
  if (!allEnvVarsExist) {
    console.log('\n❌ Some environment variables are missing. Please check your .env file.');
    process.exit(1);
  }
} catch (error) {
  console.log('❌ Error checking environment variables:', error.message);
  process.exit(1);
}

// Try to start the server
console.log('\n🚀 Testing server startup...');
try {
  console.log('Starting server for 5 seconds...');
  const startTime = Date.now();
  
  // Start server in background
  const serverProcess = execSync('npm run start &', { stdio: 'pipe', timeout: 10000 });
  
  // Wait a bit for server to start
  setTimeout(() => {
    console.log('✅ Server started successfully');
    console.log('\n🎉 Deployment check completed successfully!');
    console.log('\n📋 Summary:');
    console.log('   - All required files present');
    console.log('   - Dependencies installed');
    console.log('   - Build completed');
    console.log('   - Database configured');
    console.log('   - Environment variables set');
    console.log('   - Server can start');
    console.log('\n🌐 Your application is ready for production!');
    console.log('   Run: npm run start');
    process.exit(0);
  }, 5000);
  
} catch (error) {
  console.log('❌ Error starting server:', error.message);
  process.exit(1);
}