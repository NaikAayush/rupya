const USDC = artifacts.require("USDC");

module.exports = async function (deployer, network, accounts) {
  // Deploy USDC Token
  await deployer.deploy(USDC);
  const usdcToken = await USDC.deployed();
};
