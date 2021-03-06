var { 
    addNewContact, 
    getContacts, 
    getContactWithId,
    updateContact,
    deleteContact
} = require('../controllers/crmController');

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, getContacts)
    .post(addNewContact);

    app.route('/contact/:contactId')
    // get specific contact
    .get(getContactWithId)
    // put request
    .put(updateContact)
    // delete request
    .delete(deleteContact);
};

module.exports = routes;