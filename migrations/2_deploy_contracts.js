//var SimpleStorage = artifacts.require("SimpleStorage");
//var TutorialToken = artifacts.require("TutorialToken");
//var ComplexStorage = artifacts.require("ComplexStorage");
var FileList = artifacts.require("FileList")
var Authentication = artifacts.require("Authentication")
module.exports = function(deployer) {
  // deployer.deploy(SimpleStorage);
  // deployer.deploy(TutorialToken);
  // deployer.deploy(ComplexStorage);
  deployer.deploy(FileList)
  deployer.deploy(Authentication)
};
