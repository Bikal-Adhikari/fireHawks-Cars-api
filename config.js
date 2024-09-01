import admin from "firebase-admin";
import { serviceAccount } from "./serviceAccountKey.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://console.firebase.google.com/project/firehawk-cars/firestore/databases/-default-/data/~2FCars",
});

const db = admin.firestore();

const Car = db.collection("Cars");

export default Car;
