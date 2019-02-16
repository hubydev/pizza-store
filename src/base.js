import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOLfrPGtv9hmYudrdzyHJteI6Ij7z79Ec",
  authDomain: "pizza-store-fd941.firebaseapp.com",
  databaseURL: "https://pizza-store-fd941.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
