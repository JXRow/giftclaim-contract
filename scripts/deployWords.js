const hre = require('hardhat')
const fs = require('fs')
const { BigNumber } = require('ethers')


async function main() {
    const accounts = await hre.ethers.getSigners()

    const NFT = await ethers.getContractFactory('Words')
    // const nft = await NFT.deploy()
    // await nft.deployed()
    // console.log('Words deployed:', nft.address)
    const nft = await NFT.attach('0x22160237b20f80cb6ab26a37c5bca25ff45a3685')
    // console.log({name: await nft.name(), symbol: await nft.symbol()})
    
    const TokenURI = await ethers.getContractFactory('WordsURI')
    // const tokenURI = await TokenURI.deploy(nft.address)
    // await tokenURI.deployed()
    // console.log('WordsURI deployed:', tokenURI.address)
    const tokenURI = await TokenURI.attach('0x32C9D0D6C3940f4a02f9862D53A0b9DF72C251bb')

    // await nft.setName('只言片语', 'Words')
    // await nft.setUriContract(tokenURI.address)
    // await nft.setFeeTo('0x50D8aD8e7CC0C9c2236Aac2D2c5141C164168da3')
    // console.log('set done')
    
    await nft.mint('&#10022;', 'rgb(39,112,38)', '&#128757;', '为自己的投资留一辆电动车', '加戈', '你永远不知道自己什么时候会亏完，所以，给自己留条后路，一辆外卖电动车，穿越牛熊。', {value: m(0, 18)})
    console.log('nft.mint done')
}

function m(num, decimals) {
    return BigNumber.from(num).mul(BigNumber.from(10).pow(decimals))
}

function d(bn, decimals) {
    return bn.mul(BigNumber.from(100)).div(BigNumber.from(10).pow(decimals)).toNumber() / 100
}

function b(num) {
    return BigNumber.from(num)
}

function n(bn) {
    return bn.toNumber()
}

function s(bn) {
    return bn.toString()
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });