import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBnQ5-_uMNM7QBNsgoOdxnzf6pUvPTP2Y4',
  authDomain: 'crwn-database-9dea5.firebaseapp.com',
  projectId: 'crwn-database-9dea5',
  storageBucket: 'crwn-database-9dea5.appspot.com',
  messagingSenderId: '206398198396',
  appId: '1:206398198396:web:2700a7ef5fa5bc9c9faff9',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
