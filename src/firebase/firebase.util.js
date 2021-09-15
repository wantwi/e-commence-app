 

 import { initializeApp } from 'firebase/app';
 import { getAuth, GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup,createUserWithEmailAndPassword  } from 'firebase/auth';
 import { getFirestore,getDoc, doc, setDoc  } from 'firebase/firestore';

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

 export const SignInFunc = async (auth,email,password)=>{
    return  await signInWithEmailAndPassword(auth,email,password)
 }

 export const createUser =  async (auth,data)=>{
   const {displayName} =data
  

    const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)
    
    await SignInFunc(auth, data.email, data.password)
    const currentUser = await  createUserProfile(user,{displayName})

    const docRef = doc(db, "users", currentUser);
    const docSnap = await getDoc(docRef); 

   return  docSnap.data();
 }

 export const createUserProfile =async (userAuth,data)=>{


 
  const {displayName, email,uid} = userAuth

  const createdAt = new Date();
    if(!userAuth) return;

    const docRef = doc(db, "users", uid);

    
    const docSnap = await getDoc(docRef); 
    
    if (!docSnap.exists()) {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      try {
        
         // Add a new document in collection "cities"
         await setDoc(doc(db, "users",uid), {
          displayName,
          email,
          createdAt,
          ...data
         
        });

      } catch (error) {
        console.error(error);
      }
    }
    return {uid,...docSnap.data()};

    // const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //   console.log({doc})
    //   console.log(doc.data());
    // });
    

    
    

}
 
  
 const provider = new GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => signInWithPopup(auth, provider);

