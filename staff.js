import { auth } from "./firebase.js";

window.logout = ()=>{
    auth.signOut();
    window.location.href="index.html";
};
