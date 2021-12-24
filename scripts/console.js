const hre = require('hardhat')
const fs = require('fs')
const { BigNumber } = require('ethers')


async function main() {
    const accounts = await hre.ethers.getSigners()

    // const TokenURI = await ethers.getContractFactory('GiftURIV1')
    // const tokenURI = await TokenURI.attach('')
    // await tokenURI.deployed()
    // console.log(tokenURI.address)

    // const NFT = await ethers.getContractFactory('GiftNFT')
    // const nft = await NFT.attach('0xaf680053B13C494662B653F4D218b9423cce7902')
    
    // console.log({name: await nft.name(), symbol: await nft.symbol()})

    // console.log(await nft.tokenURI(1))

    // let json = {
    //     "name":"Gift(0) #1",
    //     "description":"GiftNFT is opensource and free.",
    //     "image":"data:image/svg+xml;utf,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='600'><style>.cls-1{fill:rgb(39, 112, 38);}.cls-2{fill:rgb(241,205,146);}</style><rect class='cls-1' width='400' height='600'/><text transform='translate(175 325)' font-size='50px' font-family='Impact'>&#127873;</text></svg>"
    // }

    let json = {'name':'Gift(0) #1','description':'GiftNFT is opensource and free.','image':'data:image/svg+xml;utf,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600"><style>.cls-1{fill:rgb(39, 112, 38);}.cls-2{fill:rgb(241,205,146);}</style><rect class="cls-1" width="400" height="600"/><text transform="translate(175 325)" font-size="50px" font-family="Impact">&#127873;</text></svg>'}

    console.log(json.image)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });