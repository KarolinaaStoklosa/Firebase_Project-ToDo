import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCaTPXXFbBiIwi-DGCtU_l93-ORBHKUYcU',
  authDomain: 'fir-todoproject-3e66b.firebaseapp.com',
  databaseURL: 'https://fir-todoproject-3e66b-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-todoproject-3e66b',
  storageBucket: 'fir-todoproject-3e66b.appspot.com',
  messagingSenderId: '453385440943',
  appId: '1:453385440943:web:9e32f7bb18b2cb01914e5a',
  measurementId: 'G-MCFMTEPDQ1',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
