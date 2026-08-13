import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyAn6mE70T93J2iXpv-y93ACzX74QyzcRpk",
    authDomain: "netflix-clone-db768.firebaseapp.com",
    projectId: "netflix-clone-db768",
    storageBucket: "netflix-clone-db768.firebasestorage.app",
    messagingSenderId: "688187091347",
    appId: "1:688187091347:web:75c7b0b14120abfc0f2066",
    measurementId: "G-1T9GGW9JCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const signin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const logout = async () => {
    signOut(auth);
}

export { auth, db, signup, signin, logout };