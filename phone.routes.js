const express = require('express');
   const Phone = require('./Phone.model');

   const router = express.Router();

   // Route: /phones
   router.get('/', (req, res) => {
     const allPhones = Phone.getAllPhones();
     res.json(allPhones);
   });

   // Route: /phones/:id
   router.get('/:id', (req, res) => {
     const { id } = req.params;
     const phone = Phone.getPhoneById(parseInt(id));
     if (phone) {
       res.json(phone);
     } else {
       res.status(404).json({ error: 'Phone not found' });
     }
   });

   module.exports = router;