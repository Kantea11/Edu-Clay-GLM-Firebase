# 🚀 EduClay School Management System - Deployment Guide

## 📋 Quick Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
4. Deploy!

### Option 2: Netlify
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables (same as Vercel)
6. Deploy!

### Option 3: Docker
```bash
# Build the image
docker build -t educlay .

# Run the container
docker run -p 3000:3000 -v $(pwd)/db:/app/db educlay
```

### Option 4: Traditional Server
```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start the production server
npm start
```

## 🔧 Environment Variables

### Required Variables
```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Database (SQLite - automatic)
DATABASE_URL=file:/app/db/custom.db
```

## 🏗️ Build Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Production Start
```bash
npm start
```

### Database Operations
```bash
npm run db:push      # Push schema to database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run migrations
npm run db:reset     # Reset database
```

## 🌐 Access Points

- **Main Application**: http://localhost:3000
- **API Routes**: http://localhost:3000/api/*
- **Health Check**: http://localhost:3000/api/health

## 📊 Platform-Specific Notes

### Vercel
- ✅ Automatic deployments from GitHub
- ✅ Built-in CDN and caching
- ✅ Serverless functions for API routes
- ✅ Automatic SSL certificates
- ⚠️ Custom server not supported (use standard Next.js)

### Netlify
- ✅ Continuous deployment
- ✅ Global CDN
- ✅ Form handling
- ✅ Automatic HTTPS
- ⚠️ Custom server not supported (use standard Next.js)

### Docker
- ✅ Portable across environments
- ✅ Easy scaling
- ✅ Version control for infrastructure
- ✅ Consistent environments
- ⚠️ Requires Docker knowledge

### Traditional Server
- ✅ Full control over environment
- ✅ Custom server support (use `npm run start:server`)
- ✅ Socket.IO support
- ⚠️ Manual deployment and maintenance
- ⚠️ Requires server management

## 🔍 Troubleshooting

### Build Issues
```bash
# Clean build
rm -rf .next node_modules
npm install
npm run build
```

### Database Issues
```bash
# Reset database
npm run db:reset

# Regenerate Prisma client
npm run db:generate
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 <process_id>
```

## 🎯 Deployment Checklist

- [ ] Environment variables configured
- [ ] Database schema pushed
- [ ] Dependencies installed
- [ ] Build completed successfully
- [ ] Production server starts
- [ ] All pages accessible
- [ ] API routes working
- [ ] Firebase integration functional

## 🚀 Next Steps

1. **Choose your deployment platform**
2. **Configure environment variables**
3. **Test the build locally**
4. **Deploy to your chosen platform**
5. **Verify all features work**

## 📞 Support

For deployment issues:
1. Check the troubleshooting section
2. Verify environment variables
3. Ensure all dependencies are installed
4. Test locally before deploying

---

**Note**: This application now uses standard Next.js deployment for maximum compatibility with modern deployment platforms. Socket.IO functionality is available but requires custom server setup (`npm run start:server`).