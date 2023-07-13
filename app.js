const express = require('express');
const cors = require('cors');
   const phoneRoutes = require('./phone.routes');

   const app = express();
   const port = 3001;
   
   app.use(cors());
   app.use('/phones', phoneRoutes);

   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });