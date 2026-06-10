import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const plate = document.getElementById("plate").value;

    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "users", userCred.user.uid), {
            email: email,
            plate: plate,
            role: "user",
            wallet: 0,
            points: 0
        });

        alert("Account created!");
        window.location.href = "index.html";

    } catch (error) {
        alert(error.message);
    }
});
