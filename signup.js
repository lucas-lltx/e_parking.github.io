import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

document.getElementById("signupForm").addEventListener("submit", async (e)=>{
    e.preventDefault();

    const email = email.value;
    const password = password.value;
    const plate = plate.value;

    const userCred = await createUserWithEmailAndPassword(auth,email,password);

    await setDoc(doc(db,"users",userCred.user.uid),{
        email,
        plate,
        role:"user",
        wallet:0,
        points:0
    });

    alert("Account created!");
    window.location.href="index.html";
});
