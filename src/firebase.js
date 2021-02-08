import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDl2LAoCnhE--Wn3m4wR6hadjT_pybx-_M",
  authDomain: "document-management-97de6.firebaseapp.com",
  projectId: "document-management-97de6",
  storageBucket: "document-management-97de6.appspot.com",
  messagingSenderId: "164363945473",
  appId: "1:164363945473:web:0859644edd97e03ebce200",
});

const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const storage = app.storage();
export const auth = app.auth();
export default app;
