// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDv5hDQdpjG3w7gyXzv-DA4BPL2uFx1AWM",
  authDomain: "visualfreedomfoundation-822e3.firebaseapp.com",
  projectId: "visualfreedomfoundation-822e3",
  storageBucket: "visualfreedomfoundation-822e3.firebasestorage.app",
  messagingSenderId: "175393111749",
  appId: "1:175393111749:web:d26bb2942dcd96f7b93aac",
  measurementId: "G-RR4YRNKFQD"
};

// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics only in browser environment
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { analytics };

// Authentication functions
import { 
  signInWithEmailAndPassword as firebaseSignIn, 
  createUserWithEmailAndPassword as firebaseCreateUser, 
  signOut as firebaseSignOut, 
  sendPasswordResetEmail as firebaseSendPasswordReset,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

export const authFunctions = {
  // Sign in with email and password
  signInWithEmailAndPassword: async (email, password) => {
    try {
      const result = await firebaseSignIn(auth, email, password);
      return result;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  },

  // Create user with email and password
  createUserWithEmailAndPassword: async (email, password, userData) => {
    try {
      const result = await firebaseCreateUser(auth, email, password);
      
      // Update user profile with display name
      if (userData.firstName && userData.lastName) {
        await updateProfile(result.user, {
          displayName: `${userData.firstName} ${userData.lastName}`
        });
      }
      
      // Save additional user data to Firestore
      if (userData.firstName || userData.lastName) {
        await setDoc(doc(db, 'users', result.user.uid), {
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          email: email,
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        });
      }
      
      return result;
    } catch (error) {
      console.error('Create user error:', error);
      throw error;
    }
  },

  // Sign out
  signOut: async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  },

  // Reset password
  sendPasswordResetEmail: async (email) => {
    try {
      await firebaseSendPasswordReset(auth, email);
    } catch (error) {
      console.error('Password reset error:', error);
      throw error;
    }
  },

  // Get current user
  getCurrentUser: () => {
    return auth.currentUser;
  },

  // Listen to auth state changes
  onAuthStateChanged: (callback) => {
    return firebaseOnAuthStateChanged(auth, callback);
  }
};

// User data functions
export const getUserData = async (userId) => {
  try {
    const userDoc = doc(db, 'users', userId);
    const userSnap = await getDoc(userDoc);
    
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting user data:', error);
    throw error;
  }
};

export const updateUserData = async (userId, userData) => {
  try {
    const userDoc = doc(db, 'users', userId);
    await updateDoc(userDoc, userData);
  } catch (error) {
    console.error('Error updating user data:', error);
    throw error;
  }
};

export const createUserData = async (userId, userData) => {
  try {
    const userDoc = doc(db, 'users', userId);
    await setDoc(userDoc, userData);
  } catch (error) {
    console.error('Error creating user data:', error);
    throw error;
  }
}; 