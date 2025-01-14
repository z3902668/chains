export interface Metadata {
  name: string
  displayName: string
  icon: string
  whiteIcon: string
  tokenIcon: string
  symbol: string
  decimals: number
  rpc?: string
  explorer: string
}

export const CHAIN_ETHER = 1
export const CHAIN_ETHER_ROPSTEN = 3
export const CHAIN_ETHER_RINKEBY = 4
export const CHAIN_ETHER_GOERLI = 5
export const CHAIN_ETHER_KOVAN = 42
export const CHAIN_ETHW_TESTNET = 10002

export const CHAIN_POLYGON = 137
export const CHAIN_POLYGON_MUMBAI = 80001

export const CHAIN_BSC = 56
export const CHAIN_BSC_TESTNET = 97

export const CHAIN_BASE = 8453

export const CHAIN_HECO = 128
export const CHAIN_HECO_TESTNET = 256

export const CHAIN_OK = 66
export const CHAIN_OK_TESTNET = 65

export const CHAIN_HARMONY_0 = 1666600000
export const CHAIN_HARMONY_0_TESTNET = 1666700000

export const CHAIN_AVALANCHE = 43114
export const CHAIN_AVALANCHE_TESTNET = 43113

export const CHAIN_OPTIMISM = 10
export const CHAIN_ARBITRUM = 42161
export const CHAIN_ARBITRUM_TESTNET = 421611

export const CHAIN_BOBA = 288

export const CHAIN_ETHER_LIST = [
  CHAIN_ETHER,
  CHAIN_ETHER_ROPSTEN,
  CHAIN_ETHER_RINKEBY,
  CHAIN_ETHER_GOERLI,
  CHAIN_ETHER_KOVAN,
]

export const CHAIN_FANTOM = 250
export const CHAIN_FANTOM_TESTNET = 4002

export const CHAIN_XDAI = 100
export const CHAIN_XDAI_TESTNET = 77

export const CHAIN_METIS = 1088
export const CHAIN_AURORA = 1313161554
export const CHAIN_AURORA_TESTNET = 1313161555

export const CHAIN_OASIS = 42262
export const CHAIN_OASIS_TESTNET = 42261

export const CHAIN_KCC = 321
export const CHAIN_IOTEX = 4689
export const CHAIN_AAC = 512

export const CHAIN_CONFLUX = 1030

export const CHAIN_FILECOIN_TEST = 3141

export const Chains: {[chainID: number]: Metadata} = {
  [CHAIN_FILECOIN_TEST]: {
    name: 'Filecoin Hyperspace Testnet',
    displayName: 'Filecoin Hyperspace Testnet',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'tFIL',
    decimals: 18,
    explorer: 'https://hyperspace.filfox.info/en',
  },
  [CHAIN_ETHER]: {
    name: 'Ethereum',
    displayName: 'Ethereum',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    explorer: 'https://etherscan.io',
  },
  [CHAIN_ETHER_ROPSTEN]: {
    name: 'Ropsten',
    displayName: 'Ropsten',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    explorer: 'https://ropsten.etherscan.io',
  },
  [CHAIN_ETHER_KOVAN]: {
    name: 'Kovan',
    displayName: 'Kovan',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    explorer: 'https://kovan.etherscan.io',
  },
  [CHAIN_ETHER_RINKEBY]: {
    name: 'Rinkeby',
    displayName: 'Rinkeby',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    explorer: 'https://rinkeby.etherscan.io',
  },
  [CHAIN_ETHER_GOERLI]: {
    name: 'Goerli',
    displayName: 'Goerli',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    explorer: 'https://goerli.etherscan.io',
  },
  [CHAIN_POLYGON]: {
    name: 'Polygon Mainnet',
    displayName: 'Polygon',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    whiteIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    symbol: 'Matic',
    decimals: 18,
    rpc: 'https://rpc-mainnet.matic.network',
    explorer: 'https://explorer-mainnet.maticvigil.com',
  },
  [CHAIN_POLYGON_MUMBAI]: {
    name: 'Polygon Testnet Mumbai',
    displayName: 'Polygon Testnet',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    whiteIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    symbol: 'Matic',
    decimals: 18,
    rpc: 'https://rpc-mumbai.maticvigil.com',
    explorer: 'https://explorer-mumbai.maticvigil.com',
  },
  [CHAIN_HECO]: {
    name: 'Huobi ECO Chain Mainnet',
    displayName: 'Heco',
    icon: 'https://raw.githubusercontent.com/BoringDAO/assets/main/images/heco.png',
    whiteIcon: 'https://raw.githubusercontent.com/BoringDAO/assets/main/images/heco.png',
    tokenIcon: 'https://raw.githubusercontent.com/BoringDAO/assets/main/images/heco.png',
    symbol: 'HT',
    decimals: 18,
    rpc: 'https://http-mainnet.hecochain.com',
    explorer: 'https://hecoinfo.com',
  },
  [CHAIN_HECO_TESTNET]: {
    name: 'Huobi ECO Chain Testnet',
    displayName: 'Heco Testnet',
    icon: 'https://raw.githubusercontent.com/BoringDAO/assets/main/images/heco.png',
    whiteIcon: 'https://raw.githubusercontent.com/BoringDAO/assets/main/images/heco.png',
    tokenIcon: 'https://raw.githubusercontent.com/BoringDAO/assets/main/images/heco.png',
    symbol: 'HT',
    decimals: 18,
    rpc: 'https://http-testnet.hecochain.com',
    explorer: 'https://testnet.hecoinfo.com',
  },
  [CHAIN_BASE]: {
    name: 'Base Chain',
    displayName: 'ETH',
    icon: 'https://i.postimg.cc/nLwMCQdH/Base-Symbol-Blue.png',
    whiteIcon: 'https://i.postimg.cc/nLwMCQdH/Base-Symbol-Blue.png',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    rpc: 'https://mainnet.base.org',
    explorer: 'https://basescan.org',
  },
  [CHAIN_BSC]: {
    name: 'BNB Chain Mainnet',
    displayName: 'BNB',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/bsc.png',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/bnb.svg',
    tokenIcon:
      'https://raw.githubusercontent.com/trustwallet/assets/0e16182d4d7c712e3ac79e2bc2ac18684eef1053/blockchains/binance/info/logo.png',
    symbol: 'BNB',
    decimals: 18,
    rpc: 'https://bsc-dataseed1.binance.org',
    explorer: 'https://bscscan.com',
  },
  [CHAIN_BSC_TESTNET]: {
    name: 'BNB Chain Testnet',
    displayName: 'BNB Testnet',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/bsc.png',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/bnb.svg',
    tokenIcon:
      'https://raw.githubusercontent.com/trustwallet/assets/0e16182d4d7c712e3ac79e2bc2ac18684eef1053/blockchains/binance/info/logo.png',
    symbol: 'BNB',
    decimals: 18,
    rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    explorer: 'https://testnet.bscscan.com',
  },
  [CHAIN_OK_TESTNET]: {
    name: 'OKC Testnet',
    displayName: 'OKC Testnet',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    whiteIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    symbol: 'OKT',
    decimals: 18,
    rpc: 'https://exchaintest.okexcn.com',
    explorer: 'https://www.oklink.com/okexchain-test',
  },
  [CHAIN_OK]: {
    name: 'OKC Mainnet',
    displayName: 'OKC',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    whiteIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    symbol: 'OKT',
    decimals: 18,
    rpc: 'https://exchainrpc.okex.org',
    explorer: 'https://www.okex.com/okexchain',
  },
  [CHAIN_HARMONY_0]: {
    name: 'Harmony Mainnet Shard 0',
    displayName: 'Harmony',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/harmony.svg',
    whiteIcon: '',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/harmony.svg',
    symbol: 'ONE',
    decimals: 18,
    rpc: 'https://api.harmony.one',
    explorer: 'https://explorer.harmony.one',
  },
  [CHAIN_HARMONY_0_TESTNET]: {
    name: 'Harmony Testnet Shard 0',
    displayName: 'Harmony Testnet',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/harmony.svg',
    whiteIcon: '',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/harmony.svg',
    symbol: 'ONE',
    decimals: 18,
    rpc: 'https://api.s0.b.hmny.io',
    explorer: 'https://explorer.pops.one',
  },
  [CHAIN_AVALANCHE]: {
    name: 'Avalanche Mainnet',
    displayName: 'Avalanche',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/avalanche.svg',
    whiteIcon: '',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/avalanche.svg',
    symbol: 'AVAX',
    decimals: 18,
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    explorer: 'https://cchain.explorer.avax.network/',
  },
  [CHAIN_AVALANCHE_TESTNET]: {
    name: 'Avalanche Fuji Testnet',
    displayName: 'Avalanche Testnet',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/avalanche.svg',
    whiteIcon: '',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/avalanche.svg',
    symbol: 'AVAX',
    decimals: 18,
    rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
    explorer: 'https://cchain.explorer.avax-test.network',
  },
  [CHAIN_FANTOM]: {
    name: 'Fantom',
    displayName: 'Fantom',
    icon: 'https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=013',
    whiteIcon: '',
    tokenIcon: 'https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=013',
    symbol: 'FTM',
    decimals: 18,
    rpc: 'https://rpc.ftm.tools/',
    explorer: 'https://ftmscan.com/',
  },
  [CHAIN_FANTOM_TESTNET]: {
    name: 'Fantom Testnet',
    displayName: 'Fantom Testnet',
    icon: 'https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=013',
    whiteIcon: '',
    tokenIcon: 'https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=013',
    symbol: 'FTM',
    decimals: 18,
    rpc: 'https://rpc.testnet.fantom.network/',
    explorer: 'https://explorer.testnet.fantom.network/',
  },
  [CHAIN_XDAI]: {
    name: 'Gnosis(xDAI)',
    displayName: 'Gnosis(xDAI)',
    icon: 'https://cryptologos.cc/logos/xdai-stake-logo.svg?v=013',
    whiteIcon: '',
    tokenIcon: 'https://cryptologos.cc/logos/xdai-stake-logo.svg?v=013',
    symbol: 'XDAI',
    decimals: 18,
    rpc: 'https://rpc.xdaichain.com/',
    explorer: 'https://blockscout.com/xdai/mainnet',
  },
  [CHAIN_XDAI_TESTNET]: {
    name: 'Gnosis(xDAI) Testnet',
    displayName: 'Gnosis(xDAI) Testnet',
    icon: 'https://cryptologos.cc/logos/xdai-stake-logo.svg?v=013',
    whiteIcon: '',
    tokenIcon: 'https://cryptologos.cc/logos/xdai-stake-logo.svg?v=013',
    symbol: 'XDAI',
    decimals: 18,
    rpc: 'https://sokol.poa.network',
    explorer: 'https://blockscout.com/poa/sokol',
  },
  [CHAIN_ARBITRUM]: {
    name: 'Arbitrum One',
    displayName: 'Arbitrum',
    icon: 'https://explorer.offchainlabs.com/images/Arbitrum_Symbol_-_Full_color_-_White_background.svg',
    whiteIcon: '',
    tokenIcon: 'https://explorer.offchainlabs.com/images/Arbitrum_Symbol_-_Full_color_-_White_background.svg',
    symbol: 'AETH',
    decimals: 18,
    rpc: 'https://arb1.arbitrum.io/rpc',
    explorer: 'https://arbiscan.io',
  },
  [CHAIN_ARBITRUM_TESTNET]: {
    name: 'Arbitrum Rinkeby',
    displayName: 'Arbitrum Rinkeby',
    icon: 'https://explorer.offchainlabs.com/images/Arbitrum_Symbol_-_Full_color_-_White_background.svg',
    whiteIcon: '',
    tokenIcon: 'https://explorer.offchainlabs.com/images/Arbitrum_Symbol_-_Full_color_-_White_background.svg',
    symbol: 'ARETH',
    decimals: 18,
    rpc: 'https://rinkeby.arbitrum.io/rpc',
    explorer: 'https://rinkeby-explorer.arbitrum.io',
  },
  [CHAIN_OPTIMISM]: {
    name: 'Optimistic Ethereum',
    displayName: 'Optimism',
    icon: 'https://gateway.optimism.io/static/media/optimism.caeb9392.svg',
    whiteIcon: '',
    tokenIcon: 'https://gateway.optimism.io/static/media/optimism.caeb9392.svg',
    symbol: 'OETH',
    decimals: 18,
    rpc: 'https://mainnet.optimism.io',
    explorer: 'https://optimistic.etherscan.io',
  },
  [CHAIN_BOBA]: {
    name: 'Boba Network',
    displayName: 'Boba',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14556.png',
    whiteIcon: '',
    tokenIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14556.png',
    symbol: 'ETH',
    decimals: 18,
    rpc: 'https://mainnet.boba.network',
    explorer: 'https://blockexplorer.boba.network',
  },
  [CHAIN_METIS]: {
    name: 'Metis Andromeda Mainnet',
    displayName: 'Metis',
    icon: 'https://l2beat.com/icons/metis.png',
    whiteIcon: '',
    tokenIcon: 'https://l2beat.com/icons/metis.png',
    symbol: 'METIS',
    decimals: 18,
    rpc: 'https://andromeda.metis.io/?owner=1088',
    explorer: 'https://andromeda-explorer.metis.io',
  },
  [CHAIN_AURORA]: {
    name: 'Aurora Mainnet',
    displayName: 'Aurora',
    icon: 'https://doc.aurora.dev/_img/favicon.svg',
    whiteIcon: '',
    tokenIcon: 'https://doc.aurora.dev/_img/favicon.svg',
    symbol: 'aETH',
    decimals: 18,
    rpc: 'https://mainnet.aurora.dev',
    explorer: 'https://explorer.mainnet.aurora.dev',
  },
  [CHAIN_AURORA_TESTNET]: {
    name: 'Aurora Testnet',
    displayName: 'Aurora Testnet',
    icon: 'https://doc.aurora.dev/_img/favicon.svg',
    whiteIcon: '',
    tokenIcon: 'https://doc.aurora.dev/_img/favicon.svg',
    symbol: 'aETH',
    decimals: 18,
    rpc: 'https://testnet.aurora.dev',
    explorer: 'https://explorer.testnet.aurora.dev',
  },
  [CHAIN_OASIS]: {
    name: 'OASIS Mainnet',
    displayName: 'OASIS',
    icon: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg?v=018',
    whiteIcon: '',
    tokenIcon: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg?v=018',
    symbol: 'ROSE',
    decimals: 18,
    rpc: 'https://emerald.oasis.dev',
    explorer: 'https://explorer.emerald.oasis.dev/',
  },
  [CHAIN_OASIS_TESTNET]: {
    name: 'OASIS Testnet',
    displayName: 'OASIS Testnet',
    icon: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg?v=018',
    whiteIcon: '',
    tokenIcon: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg?v=018',
    symbol: 'ROSE',
    decimals: 18,
    rpc: 'https://testnet.emerald.oasis.dev',
    explorer: 'https://testnet.explorer.emerald.oasis.dev/',
  },
  [CHAIN_KCC]: {
    name: 'KCC Mainnet',
    displayName: 'KCC',
    icon: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg?v=018',
    whiteIcon: '',
    tokenIcon: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg?v=018',
    symbol: 'KCS',
    decimals: 18,
    rpc: 'https://rpc-mainnet.kcc.network',
    explorer: 'https://explorer.kcc.io/en',
  },
  [CHAIN_IOTEX]: {
    name: 'IoTeX Mainnet',
    displayName: 'IoTeX',
    icon: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg?v=018',
    whiteIcon: '',
    tokenIcon: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg?v=018',
    symbol: 'IOTX',
    decimals: 18,
    rpc: 'https://babel-api.mainnet.iotex.io',
    explorer: 'https://iotexscan.io',
  },
  [CHAIN_AAC]: {
    name: 'AAC',
    displayName: 'AAC',
    icon: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg?v=018',
    whiteIcon: '',
    tokenIcon: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg?v=018',
    symbol: 'KCS',
    decimals: 18,
    rpc: 'https://rpc.acuteangle.com',
    explorer: 'https://scan.acuteangle.com',
  },
  [CHAIN_CONFLUX]: {
    name: 'Conflux eSpace',
    displayName: 'Conflux eSpace',
    icon: 'https://pbs.twimg.com/profile_images/1411729445929558023/hEt9Lch0_400x400.jpg',
    whiteIcon: '',
    tokenIcon: 'https://pbs.twimg.com/profile_images/1411729445929558023/hEt9Lch0_400x400.jpg',
    symbol: 'CFX',
    decimals: 18,
    rpc: 'https://evm.confluxrpc.com',
    explorer: 'https://evm.confluxscan.net',
  },
  [CHAIN_ETHW_TESTNET]: {
    name: 'ethw-iceberg-testnet',
    displayName: 'ETHW Testnet',
    icon: 'https://pbs.twimg.com/profile_images/1411729445929558023/hEt9Lch0_400x400.jpg',
    whiteIcon: '',
    tokenIcon: 'https://pbs.twimg.com/profile_images/1411729445929558023/hEt9Lch0_400x400.jpg',
    symbol: 'CFX',
    decimals: 18,
    rpc: 'https://iceberg.ethereumpow.org',
    explorer: 'http://iceberg.ethwscan.com',
  }
}
