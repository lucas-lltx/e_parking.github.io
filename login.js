import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);

        const snap = await getDoc(doc(db, "users", userCred.user.uid));

        if (!snap.exists()) {
            alert("No user data found");
            return;
        }

        const data = snap.data();

        if (data.role === "staff") {
            window.location.href = "staff.html";
        } else {
            window.location.href = "home.html";
        }

    } catch (err) {
        alert(err.message);
    }
});
