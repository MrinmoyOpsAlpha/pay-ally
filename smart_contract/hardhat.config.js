require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/mHLGRY6Ew5P9WPR-MKk76kGi4QdoZKbO',
      accounts: [
        process.env.RINKEBY_PRIVATE_KEY,
      ],
    },
  },
}