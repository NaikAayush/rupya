const RupyaXToken = artifacts.require("RupyaXToken");

module.exports = async function (deployer, network, accounts) {
  // Deploy RupyaX Token
  await deployer.deploy(
    RupyaXToken,
    "0xEB796bdb90fFA0f28255275e16936D25d3418603"
  );
  const rupyaXToken = await RupyaXToken.deployed();

  rupyaXToken.createRupyaXToken("0x3e1fB19E002c83e39a7307B1e5eF9A216B605ce3");
};
