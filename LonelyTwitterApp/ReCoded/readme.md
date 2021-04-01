
# Decentrailzed finance (Defi)
Hello everyone, this time we deploy **a simple decentralized finance (Defi) smart contract project** on the [Binance Smart Chain (BSC)](https://binanceide.com/project/welcome)  through [ChainIDE](https://chainide.com/).
This project contains two ERC20-based tokens. We temporarily call these two tokens *ChainToken* and *RevenueToken* (hereinafter referred to as CT and RT). CT is used to simulate the digital currency held by users themselves and RT is the interest obtained after the user pledges CT. The workflow of the entire Defi project is executed by a Farm contract. The user pledges the digital currency, he/she holds into the Farm contract. The contract generates RT according to the amount of pledged by the user and returns it to the user as interest.
## Tools used in the project
1. [Binance IDE](https://bscide.com/project/welcome)
2. [Metamask](https://metamask.io/) (connected to BSC Binance Smart Chain)

## Connection Method
Open the MetaMask Little Fox and select the custom RPC option.
<p align="center">
<img src="https://user-images.githubusercontent.com/16441258/103730398-bec83e80-501d-11eb-9655-c41a89607c45.png">
</p>

### The input content is as follows: 

Network Name: BSC Testnet

New RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/

Chain ID: 97

Currency Symbol(optional)  BNB

Block Explorer URL(optional) https://testnet.bscscan.com



<p align="center">
<img src="https://github.com/wkq1991zmc/defi/blob/master/BSCTEST.png?raw=true">

## Operating Procedures
> 1. Click on the Binance Smart Chain Docs case on the homepage of [Binance IDE](https://binanceide.com/project/welcome)


<p align="center">
<img src="https://user-images.githubusercontent.com/16441258/103731380-f3d59080-501f-11eb-9a53-a3c05f256b96.png">
</p>

> 2. In the directory on the left, we have prepared the three smart contracts mentioned above. Among them, ChainToken and Revenue Token are smart contracts for issuing tokens based on ERC20. The contract declares the name of the digital currency, the total amount of issuance, verification, transfers, and third-party transfers. The code of the Farm contract implements the operational logic of our overall defi project. The stakeToken method is to pledge CT to this contract, untakeTokens is to take out the pledged digital currency, and issueToken is to generate RT interest based on the pledged CT.



<p align="center">
<img src="https://user-images.githubusercontent.com/16441258/103732087-a0fcd880-5021-11eb-949a-9ce6a67b10b1.png">
</p>

> 3. Below we deploy these three contracts on the Binance Smart Chain, first select the compiler in the upper right corner, any version of 0.5.x.


<p align="center">
<img src="https://user-images.githubusercontent.com/16441258/103732313-0f419b00-5022-11eb-8966-7f8b2b6f3682.png">
</p>

> 4. After clicking compile, you can see the compilation result in the output console.


<p align="center">
<img src="https://user-images.githubusercontent.com/16441258/103732477-5e87cb80-5022-11eb-8798-3e602c9ce4cd.png">
</p>
 
 

 
 > 5. Deploy the contract (set value and wei). In this step, you need to deploy the three compiled contracts separately.  In Compiled Contracts, first deploy ChainToken and RevenueToken, and finally pass in the addresses of the first two contracts when deploying the Farm contract.(the first two the address of the contract can be viewed in the output console, such as "contractAddress": "0x79a377715E31D5F9eE736f8087aC0Ca230F8C48e")


<p align="center">
<img src="https://raw.githubusercontent.com/wkq1991zmc/defi/master/%E5%9B%BE%E7%89%87%E6%95%99%E7%A8%8B7.png">
</p>


<p align="center" >
<img src="https://raw.githubusercontent.com/wkq1991zmc/defi/master/%E5%9B%BE%E7%89%87%E6%95%99%E7%A8%8B8.png", width="500" height="700">
</p>

<p align="center" >
<img src="https://raw.githubusercontent.com/wkq1991zmc/defi/master/%E5%9B%BE%E7%89%87%E6%95%99%E7%A8%8B9.png", width="500" height="700">
</p>



> 6. After all the contracts are deployed, the Farm contract implements the digital currency pledge function (stakeToken). The essence of this method is to call the TransferFrom function in the chainToken contract to transfer the chaintoken in the user account to the Farm contract. We need to have enough digital currency in the approve account.


<p align="center">
<img src="https://raw.githubusercontent.com/wkq1991zmc/defi/master/%E5%9B%BE%E7%89%87%E6%95%99%E7%A8%8B10.jpg">
</p>


> 7. After Approve is completed, perform the pledge operation (fill in the amount you want to pledge).


<p align="center">
<img src="https://raw.githubusercontent.com/wkq1991zmc/defi/master/%E5%9B%BE%E7%89%87%E6%95%99%E7%A8%8B11.png">
</p>

> 8. Next, the RevenueToken is transferred to the Farm contract to generate dividends, and the parameters are passed into the Farm contract address and the amount of digital currency that needs to be transferred.



<p align="center">
<img src="https://raw.githubusercontent.com/wkq1991zmc/defi/master/%E5%9B%BE%E7%89%87%E6%95%99%E7%A8%8B11.png", width="500" height="700">
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/wkq1991zmc/defi/master/%E5%9B%BE%E7%89%87%E6%95%99%E7%A8%8B13.png", width="500" height="700">
</p>

> 9. The last step is to call the issueToken function in the Farm contract to generate dividends for users who have been pledged.


<p><strong> Thanks for reading this post. We hope this post will help you develop Defi apps in an easy way.</strong></p>
 


