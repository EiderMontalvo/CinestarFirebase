    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
        import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyBB5USCx0QzfN5wuCxtk2kz2LhyZ6f6WjU",
            authDomain: "cinestar-2a711.firebaseapp.com",
            projectId: "cinestar-2a711",
            storageBucket: "cinestar-2a711.firebasestorage.app",
            messagingSenderId: "559720947323",
            appId: "1:559720947323:web:552acbfdc9897dc79e0cde"
        };
        
        // Iniciar firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        export const getCines = () => getDocs(collection( db, 'cines'));
        export const getPeliculas = () => getDocs(collection( db, 'peliculas'));
        
