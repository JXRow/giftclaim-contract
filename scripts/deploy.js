const hre = require('hardhat')
const fs = require('fs')
const { BigNumber } = require('ethers')


async function main() {
    const accounts = await hre.ethers.getSigners()

    const TokenURI = await ethers.getContractFactory('GiftURIV2')
    const tokenURI = await TokenURI.deploy()
    await tokenURI.deployed()
    console.log(tokenURI.address)

    // const NFT = await ethers.getContractFactory('GiftNFT')
    // const nft = await NFT.deploy()
    // await nft.deployed()
    
    // console.log({name: await nft.name(), symbol: await nft.symbol()})
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });