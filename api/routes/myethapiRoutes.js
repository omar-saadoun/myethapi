'use strict';
module.exports = function(app) {
  var ethapi = require('../controllers/myethapiController');

  
  app.route('/balance/:accountAddress')
    .get(ethapi.read_balance);
  app.route('/inmindtoken/:accountAddress')
    .get(ethapi.read_coins);
    
    
};
