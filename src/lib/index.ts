import { initializeApp,getApps, type FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

/**
 * Your firebase client SDK config goes here
 */
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId:import.meta.env.ITE_FIREBASE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId:import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId:import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
let firebaseApp:FirebaseApp | undefined;
let firebaseAuth;

// create singleton of firebase client app
if(!getApps().length){
    firebaseApp = initializeApp(firebaseConfig);
}
else{
    firebaseApp = getApps()[0]
}
const auth = getAuth(firebaseApp);
// export the firebase app
export {firebaseApp, auth}

