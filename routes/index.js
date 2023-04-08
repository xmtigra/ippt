const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");
// TODO move to env variable
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

/* GET home page. */
router.get('/', async function (req, res, next) {

    await admin.firestore().collection('sections').get().then((snapshot) => {
        const global = snapshot.docs.find(doc => doc.id === 'global');
        const menu = snapshot.docs.find(doc => doc.id === 'menu');
        const section1 = snapshot.docs.find(doc => doc.id === 'section-1');
        const section2 = snapshot.docs.find(doc => doc.id === 'section-2');
        const section3 = snapshot.docs.find(doc => doc.id === 'section-3');
        const section4 = snapshot.docs.find(doc => doc.id === 'section-4');
        const section5 = snapshot.docs.find(doc => doc.id === 'section-5');
        const section6 = snapshot.docs.find(doc => doc.id === 'section-6');
        const section7 = snapshot.docs.find(doc => doc.id === 'section-7');
        const section8 = snapshot.docs.find(doc => doc.id === 'section-8');

        const data = {
            ...global.data(),
            menu: menu.data().items,
            section1: section1.data(),
            section2: section2.data(),
            section3: section3.data(),
            section4: section4.data(),
            section5: section5.data(),
            section6: section6.data(),
            section7: section7.data(),
            section8: section8.data()
        };
        return res.render('index', data);

    });
});

module.exports = router;
