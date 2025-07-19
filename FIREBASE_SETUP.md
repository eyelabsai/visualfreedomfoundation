# Firebase Setup Guide for Visual Freedom Foundation

This guide will help you set up Firebase authentication for your Visual Freedom Foundation website.

## 🔥 Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name: `visual-freedom-foundation`
4. Choose whether to enable Google Analytics (recommended)
5. Click "Create project"

## 🔑 Step 2: Get Your Firebase Configuration

1. In your Firebase project, click the gear icon ⚙️ next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>) to add a web app
5. Register your app with a nickname (e.g., "VFF Web App")
6. Copy the configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## 🔐 Step 3: Enable Authentication

1. In Firebase Console, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

## 📝 Step 4: Update Your Configuration

1. Open `lib/firebase.js` in your project
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
export const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "YOUR_ACTUAL_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_ACTUAL_PROJECT_ID",
  storageBucket: "YOUR_ACTUAL_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_ACTUAL_MESSAGING_SENDER_ID",
  appId: "YOUR_ACTUAL_APP_ID"
};
```

## 📦 Step 5: Install Firebase Dependencies

Run this command in your project directory:

```bash
npm install firebase
```

## 🔧 Step 6: Uncomment and Update Firebase Code

1. In `lib/firebase.js`, uncomment the Firebase initialization code:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

2. Update the authentication functions to use real Firebase:

```javascript
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from './firebase';

export const authFunctions = {
  signInWithEmailAndPassword: async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  },

  createUserWithEmailAndPassword: async (email, password, userData) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    // You can add additional user data to Firestore here
    return result;
  },

  signOut: async () => {
    return await signOut(auth);
  },

  sendPasswordResetEmail: async (email) => {
    return await sendPasswordResetEmail(auth, email);
  },

  getCurrentUser: () => {
    return auth.currentUser;
  },

  onAuthStateChanged: (callback) => {
    return onAuthStateChanged(auth, callback);
  }
};
```

## 🚀 Step 7: Test Your Authentication

1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000/register` to test user registration
3. Go to `http://localhost:3000/login` to test user login
4. Go to `http://localhost:3000/lost-password` to test password reset

## 🔒 Step 8: Security Rules (Optional)

If you plan to use Firestore for additional user data:

1. Go to "Firestore Database" in Firebase Console
2. Create a database if prompted
3. Go to "Rules" tab
4. Update the rules to allow authenticated users:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 📧 Step 9: Email Templates (Optional)

1. In Firebase Console, go to "Authentication" > "Templates"
2. Customize the email templates for:
   - Email verification
   - Password reset
   - Email change

## 🎯 What's Ready to Use

Once you complete this setup, your website will have:

✅ **User Registration** - `/register`  
✅ **User Login** - `/login`  
✅ **Password Reset** - `/lost-password`  
✅ **User Profile** - `/my-account`  
✅ **Protected Routes** - Ready to implement  
✅ **Authentication State Management** - Throughout the app  

## 🆘 Troubleshooting

- **"Firebase not configured" error**: Make sure you've updated the configuration in `lib/firebase.js`
- **Authentication not working**: Check that Email/Password is enabled in Firebase Console
- **Import errors**: Make sure you've installed Firebase with `npm install firebase`

## 📞 Need Help?

If you encounter any issues during setup, check:
1. Firebase Console documentation
2. Firebase Authentication documentation
3. Your browser's developer console for error messages

Your Visual Freedom Foundation website will be fully functional with user authentication once you complete these steps! 