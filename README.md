# Rupya

Zero collateral lending platform with a focus on seamless lending for agriculture. 🧑🏽‍🌾

## Problem

In the traditional markets, unsecured/semi-secured lending is the biggest part of our economy. But the current DeFi infrastructure has been built on overcollateralized lending. Hence, Uncollateralized lending scoring is the need of the hour. 

In India, where the agriculture industry employs 41.49% of the working population, a seamless way to lend and borrow for trade financing is essential.

Rupya is an Unsecured/Zero collateral lending platform, which is tapping into both these markets to revolutionise DeFi financing. There is a focus on incentivising agriculture loans while borrowing

## How Rupya works

- **Lenders** lend assets into a particular currency pool which is used for loans, for which they earn interest. Liquid funds is planned to be deposited in aave/curve.
- **Borrowers**, once approved, submit a loan request, their request is verified by the stakers, and stakers have the final verdict on the approval.
- **Stakers** stake RUP and are key to approving loans, their staked RUP will be liquidated in case of a verified borrower defaults to pay.

## Tracks

💸 DeFi Track - Zero collateral lending platform.

🌍 Web3 integration with Web2 - Could be compared to the likes of kiva.co, and trying to capitalise on the traditional unsecured lending market with wider accessibility.

🌽 Agriculture related Project - Agri 10x - Focus on lending for the agriculture sector.

## File layout

- `contracts` - Contains all the smart contracts used. (RupyaToken, Loan, Borrow, etc).
- `faucet-webapp` - A faucet app to easily get RUP (Rupya Token) and USDC to for seamless usage of the platform.
- `webapp` - The main Dapp built using Angular, which contains all the functionalities of the platform.

## Technologies

💨 **Polygon Network** - Superfast blockchain transactions.

💾  **IPFS** - Distributed Storage of encrypted user profiles, loan details, etc.

⌛️ **Covalent** - Real-time on-chain data via API, for faucet, and all information across dashboards.

📚 **StackOS** - Decentralized deployment of all 3 frontend apps. (Faucet, Main App, Landing Page)

⛓ **Chainlink** - Price feeds for calculating interest earned in staking RUP (tied to USDC on test net), VRF for loan contracts.

🌊 **Superfluid** - To stream interest earned by lenders and to regularly pay back loans by borrowers.

## Screenshots

![](/screenshots/1_cover.png)
![](/screenshots/2_lend.png)
![](/screenshots/3_stake.png)
![](/screenshots/4_faucet.png)
![](/screenshots/5_borrow.png)
