const USDCToken = artifacts.require("USDCToken");

module.exports = async function (deployer, network, accounts) {
  // Deploy USDC Token
  await deployer.deploy(USDCToken);
  const usdcToken = await USDCToken.deployed();
};
