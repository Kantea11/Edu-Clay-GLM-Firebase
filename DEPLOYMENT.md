# EduClay School Management System - Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- SQLite (included with Node.js)

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Application
```bash
npm run build
```

### 3. Setup Database
```bash
npm run db:push
```

### 4. Start Production Server
```bash
npm run start
```

The application will be available at `http://localhost:3000`

## 🔧 Environment Configuration

### Database
- **Type**: SQLite
- **Location**: `./db/custom.db`
- **ORM**: Prisma

### Firebase Integration
The application is pre-configured with your Firebase project:
- **Project ID**: report-card-8c7de
- **Authentication**: Enabled
- **Firestore**: Enabled
- **Storage**: Enabled

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── academic-terms/    # Academic terms management
│   ├── classrooms/        # Classroom management
│   ├── grades/           # Grade management
│   ├── reports/          # Report generation
│   ├── settings/        # System settings
│   ├── students/        # Student management
│   ├── subjects/        # Subject management
│   └── teachers/        # Teacher management
├── components/           # React components
│   ├── ui/              # UI components
│   ├── layout/          # Layout components
│   └── firebase-*.tsx   # Firebase integration
└── lib/                 # Utility libraries
    ├── db.ts           # Database connection
    ├── firebase.ts     # Firebase configuration
    └── utils.ts        # Helper functions
```

## 🌐 Features

### Core Features
- ✅ Dashboard with statistics and quick actions
- ✅ Academic terms management
- ✅ Subject management with auto-coding
- ✅ Teacher management
- ✅ Classroom management (6-tab interface)
- ✅ Student management
- ✅ Grade management with import/export
- ✅ Report card generation
- ✅ System settings (8-tab interface)

### Advanced Features
- ✅ Firebase integration for real-time sync
- ✅ User authentication
- ✅ Cloud storage for files
- ✅ Responsive design (mobile-first)
- ✅ Neumorphic/clay UI theme
- ✅ Real-time data synchronization
- ✅ Offline data persistence

## 🔧 API Routes

### Management APIs
- `GET/POST /api/academic-terms` - Academic terms
- `GET/POST /api/subjects` - Subjects
- `GET/POST /api/teachers` - Teachers
- `GET/POST /api/classrooms` - Classrooms
- `GET/POST /api/students` - Students
- `GET/POST /api/grades` - Grades
- `GET/POST /api/report-cards` - Report cards
- `GET/POST /api/system-settings` - System settings

### Utility APIs
- `GET /api/health` - Health check
- `GET /api/school-information` - School info
- `GET /api/grading-criteria` - Grading criteria
- `GET /api/automated-remarks` - Automated remarks
- `GET /api/assessment-components` - Assessment components

## 🎨 UI Theme

The application uses a custom **Neumorphic/Clay** design theme:
- Soft shadows and rounded corners
- Light and dark mode support
- Responsive layout
- Mobile-first design

## 🔒 Security

### Authentication
- Firebase Authentication
- Role-based access control
- Session management

### Data Security
- Firestore security rules
- Storage security rules
- Input validation with Zod
- SQL injection prevention

## 🚀 Production Deployment

### Local Deployment
```bash
# 1. Install dependencies
npm install

# 2. Build the application
npm run build

# 3. Setup database
npm run db:push

# 4. Start server
npm run start
```

### Cloud Deployment
The application can be deployed to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**
- **Heroku**

### Environment Variables
```bash
# Database
DATABASE_URL=file:/home/z/my-project/db/custom.db

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 📊 Database Schema

The application uses 16 database entities:
- AcademicTerm
- Subject
- Teacher
- Classroom
- Student
- Grade
- SchoolInformation
- Attendance
- GradingCriterion
- AutomatedRemark
- AssessmentComponent
- FeeItem
- RequiredItem
- StudentAssessmentScore
- ReportCard
- Arrears
- SystemSettings

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Database operations
npm run db:push          # Push schema to database
npm run db:generate      # Generate Prisma client
npm run db:migrate       # Run migrations
npm run db:reset         # Reset database
```

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clean build cache
rm -rf .next
npm run build
```

#### Database Issues
```bash
# Reset database
npm run db:reset

# Regenerate Prisma client
npm run db:generate
```

#### Port Already in Use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 <process_id>
```

### Firebase Issues
1. Check Firebase project configuration
2. Verify environment variables
3. Ensure Firebase services are enabled
4. Check security rules

## 📞 Support

For support and issues:
1. Check the troubleshooting section
2. Review the error logs
3. Verify database connectivity
4. Check Firebase configuration

## 🎉 Success!

Your EduClay School Management System is now ready for production! The application provides a comprehensive solution for school administration with modern UI, real-time features, and robust data management.