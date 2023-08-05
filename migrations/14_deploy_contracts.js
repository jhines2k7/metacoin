const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin1 = artifacts.require("MetaCoin1");
const MetaCoin2 = artifacts.require("MetaCoin2");


module.exports = function(deployer, network, accounts) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, [MetaCoin1, MetaCoin2]);  
  deployer.deploy(MetaCoin1);
  deployer.deploy(MetaCoin2, {from: accounts[2]});
};
