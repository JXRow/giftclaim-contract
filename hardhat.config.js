require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
	networks: {
		hardhat: {

		},
		matic_mainnet: {
			// url: 'https://rpc-mainnet.maticvigil.com/v1/6ca36da1323f40dc42d64ed9ba89da9a6f59c23d',
			// url: 'https://rpc-mainnet.matic.network',
			url: 'https://matic-mainnet.chainstacklabs.com',
			// url: 'https://rpc-mainnet.matic.quiknode.pro',
			// url: 'https://matic-mainnet-full-rpc.bwarelabs.com',
			// url: 'https://matic-mainnet-archive-rpc.bwarelabs.com',
			chainId: 137,
			from: process.env.ETH_ADDRESS_0,
			accounts: [
				process.env.ETH_PK_0,
			]
		}
	},
  solidity: "0.8.4",
};