const RupyaToken = artifacts.require("RupyaToken");

module.exports = async function (deployer, network, accounts) {
  // Deploy Rupya Token
  await deployer.deploy(RupyaToken);
  const rupyaToken = await RupyaToken.deployed();
};
