const { BigNumber } = require('ethers')

describe('gift-test', function () {
	let accounts
    let provider
	let nft
    let tokenURI

	before(async function () {
		accounts = await ethers.getSigners()
        provider = accounts[0].provider
	})
	
	it('deploy', async function () {
        const TokenURI = await ethers.getContractFactory('GiftURIV2')
		tokenURI = await TokenURI.deploy()
		await tokenURI.deployed()

        const NFT = await ethers.getContractFactory('GiftNFT')
		nft = await NFT.deploy()
		await nft.deployed()

        console.log({name: await nft.name(), symbol: await nft.symbol()})
	})

    it('mint', async function () {
        await nft.mint(10, true, tokenURI.address, {value: m(1000, 18)})
        await print()
	})

    it('transfer', async function () {
        await nft.transferFrom(accounts[0].address, accounts[1].address, 1)
        await print()
	})
    
    it('open', async function () {
        await nft.connect(accounts[1]).open(1)
        await print()

        console.log(await nft.tokenURI(2))
        let eth = await provider.getBalance(accounts[1].address)
        console.log(accounts[1].address, d(eth, 18))
	})


    async function print() {
        console.log('')
        
        let minted = await nft.minted()
        // for (let i = 1; i <= minted; i++) {
        //     let info = await nft.tokenIdToInfo(i);
        //     console.log(info, await nft.tokenURI(i))
        //     console.log(info, await nft.tokenURI(i))
        // }

        for (let i = 1; i <= minted; i++) {
            let owner = await nft.ownerOf(i);
            let info = await nft.tokenIdToInfo(i);
            console.log(i, owner, d(info.ethAmount, 18))
        }

        console.log('totalSupply:', await nft.totalSupply())
    
        console.log('')
    }
    
    
    function getAbi(jsonPath) {
        let file = fs.readFileSync(jsonPath)
        let abi = JSON.parse(file.toString()).abi
        return abi
    }
    
    async function delay(sec) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, sec * 1000);
        })
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
})
