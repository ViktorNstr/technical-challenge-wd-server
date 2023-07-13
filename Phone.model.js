const phones = require('./phones.json');

   class Phone {
     static getAllPhones() {
       return phones;
     }

     static getPhoneById(id) {
       return phones.find(phone => phone.id === id);
     }
   }

   module.exports = Phone;