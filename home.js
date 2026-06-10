import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user)=>{

    if(!user) return;

    const snap = await getDoc(doc(db,"users",user.uid));
    const data = snap.data();

    document.getElementById("wallet").innerText =
        "Wallet: RM" + data.wallet;

    document.getElementById("points").innerText =
        "Points: " + data.points;
});

window.logout = ()=>{
    auth.signOut();
    window.location.href="index.html";
};
