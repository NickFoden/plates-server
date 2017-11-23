const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({ 
         	image : {type: Array},
         	imageCaption : {type: String},
         	state : {type: String}
     } 
);

const Photo = mongoose.model('Photo', photoSchema);


module.exports = {Photo};