# Crowd funding

Ashutosh Kumar - ak50514
Jayanth Anala - ja4874

### Demo Link:- 

-- https://youtu.be/j1Te_lk0Hgk

### Project features:

- [x] User can start a fundraising.
- [x] Anyone can contribute.
- [x] End project if targeted contribution amount reached.
- [x] Expire project if targeted amount not fulfills between deadline.
- [x] Contributors can withdraw contributed amount if project expire.
- [x] Owner need to request contributors for withdraw amount.
- [x] Owner can withdraw amount if 50% contributors agree.
- [x] Connect with waller.


### Frameworks and Packages

| package                                                             | explain                                                               |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [Next.js](https://nextjs.org/docs/getting-started)                  | For building frontend                                                 |
| [solidity](https://docs.soliditylang.org/en/v0.8.13/)               | For writting smart contracts                                          |
| [tailwind css](https://tailwindcss.com/docs/installation)           | For building design                                                   |       
| [ether.js](https://docs.ethers.io/v5/)                              | Web3 client (contract testing ).                                      |
| [web3.js](https://www.npmjs.com/package/web3)                       | Web3 client (Frontend Next.js).                                       |
| [react-toastify](https://www.npmjs.com/package/react-toastify)      | For Notification.                                                     |   
| [hardhat](https://www.npmjs.com/package/hardhat)                    | Ethereum development environment.                                     | 
| [Redux](https://www.npmjs.com/package/hardhat)                      | For managing and centralizing application state.                      |   


----------------

### Run instructions:

- Run hardhat node
    ```
    npx hardhat node
    ```
- Connect HardHat Account to Metamask
    ```
    add network
    ```
- Deploy contract in sepolia testnet or hardhat node(test)
    ```
    npx hardhat run scripts/deploy.js --network sepolia
    ```
- Run Next.js frontend
    ```
    npm run dev
    ```

### Hardhat commands
```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
npx hardhat run scripts/deploy.js --network <network name>
```
