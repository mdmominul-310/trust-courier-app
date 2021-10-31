

import { initializeApp } from "firebase/app";
import firebaseConfig from './firabaseConfig';
const firabaseInit = () => {
    initializeApp(firebaseConfig);
};

export default firabaseInit;