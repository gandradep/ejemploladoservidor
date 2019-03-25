
var mongoose = require('mongoose');
var modelApp = mongoose.model('App');

var sendJsonResponse = function(res,status,content){
  res.status(status);
  res.json(content);
}

  module.exports.lugarGet = function(req, res) { 
  sendJsonResponse(res, 200, {"status":"success"});
  };
  module.exports.crearLugar = function(req, res) { 
  sendJsonResponse(res, 200, {"status":"success"});
};
  module.exports.lugarGetOne = function(req, res) { 
  sendJsonResponse(res, 200, {"status":"success"});
};
  module.exports.lugarUpdateOne = function(req, res) {
  sendJsonResponse(res, 200, {"status":"success"});
   };
  module.exports.lugarBorrarOne = function(req, res) {
  sendJsonResponse(res, 200, {"status":"success"});
   };

  



 