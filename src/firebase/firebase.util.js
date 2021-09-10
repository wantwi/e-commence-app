 

 import { initializeApp } from 'firebase/app';
 import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
 import { getFirestore,collection,getDocs, doc, setDoc } from 'firebase/firestore';

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
  
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
     apiKey: "AIzaSyAmLQQ4rBae5oUafBsnJBr53jEJ6iAYi48",
     authDomain: "e-comdb-8da79.firebaseapp.com",
     projectId: "e-comdb-8da79",
     storageBucket: "e-comdb-8da79.appspot.com",
     messagingSenderId: "53632071640",
     appId: "1:53632071640:web:176a51022eadfd4665e4ad",
     measurementId: "G-LP4GVV74LE"
 };
 

 
 // Initialize Firebase
 initializeApp(firebaseConfig);

 const db = getFirestore();
  
 export const auth = getAuth();
 export const firestore = getFirestore();


 export const createUserProfile =async (userAuth,data)=>{
 
    if(!userAuth) return;

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log({doc});
    });
    

//     const userRef = firestore.doc('users/123fdashadu');
//    console.log(userRef)

}
 
  
 const provider = new GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => signInWithPopup(auth, provider);

