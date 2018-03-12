var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
exports.read_balance = function(req, res) {
	
web3.eth.getBalance(req.params.accountAddress, function(error, result){
    if(error)
    {	
        res.send(error);
    }else
        res.json(result);
	});
};
exports.read_coins = function(req, res) {
	
// initiate contract for an address
var myContractInstance = MyContract.at('0x01529F5b0F30c26A404F1a4034d5E21EAC969ef8');

// call constant function
var result = myContractInstance.myConstantMethod('name');
console.log(result) // '0x25434534534'
res.json(result);
 
};