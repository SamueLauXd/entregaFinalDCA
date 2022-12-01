import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { FireCollectionResponse, FireRegisterResponse, Register } from "../types/types";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const onRegister = async (register: Register) => {
    try {
        const docRef = await addDoc(collection(db, "registered-users"), register);
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        alert("Error adding document");
    }
}

const listenUsers = (notifyComponent: (register: Register[]) => void) => {
    const handleDbChange = (
        documents: FireCollectionResponse<FireRegisterResponse>
    ) => {
        const user = documents.docs.map((doc) => doc.data());
        notifyComponent(user);
    }
    onSnapshot(collection(db, "registered-users"), handleDbChange);
}

export default { onRegister, listenUsers};