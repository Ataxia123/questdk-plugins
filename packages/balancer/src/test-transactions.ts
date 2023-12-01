import { parseEther, parseUnits, zeroAddress } from 'viem'
import {
  GreaterThanOrEqual,
  type SwapActionParams,
} from '@rabbitholegg/questdk'
import { type TestParams, createTestCase, Chains } from './utils'
import { VAULT_CONTRACT } from './constants'

export const POLYGON_SWAP: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 137,
    from: '0xa99f898530df1514a566f1a6562d62809e99557d',
    hash: '0x4abfead591efbf6cf3760075db69c52fc338acccd255d5382d01314bb7fe8ee3',
    input:
      '0x52bbbe2900000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021cbdb000000000000000000000000000000000000000000000000000000006564ca21d208168d2a512240eb82582205d94a0710bce4e7000100000000000000000038000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa8417400000000000000000000000000000000000000000000000029a2241af62c000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000',
    to: '0xba12222222228d8ba445958a75a0704d566bf2c8',
    value: '3000000000000000000',
  },
  params: {
    chainId: Chains.POLYGON_POS,
    contractAddress: VAULT_CONTRACT,
    tokenIn: zeroAddress,
    tokenOut: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC.e
    amountIn: GreaterThanOrEqual(parseEther('3')),
    amountOut: GreaterThanOrEqual(parseUnits('2', 6)),
    recipient: '0xa99f898530df1514a566f1a6562d62809e99557d',
  },
}

export const POLYGON_BATCH_SWAP: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 137,
    from: '0xa99f898530df1514a566f1a6562d62809e99557d',
    hash: '0xfb100bfb3c54144814c758f06f4ce9eb1f72c065a81886213f7f4bf76bd424cb',
    input:
      '0x945bcec9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000300000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000380000000000000000000000000000000000000000000000000000000006564ccb300000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000010036128d5436d2d70cab39c9af9cce146c38554ff0000100000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000128b59380e339fc00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000297e37f1873d2dab4487aa67cd56b58e2f2787500010000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000d6df932a45c0f255f85145f286ea0b292b21c90b0000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000128b59380e339fc0000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff6d3a13700af5503e',
    to: '0xba12222222228d8ba445958a75a0704d566bf2c8',
    value: '0',
  },
  params: {
    chainId: Chains.POLYGON_POS,
    contractAddress: VAULT_CONTRACT,
    tokenIn: '0xd6df932a45c0f255f85145f286ea0b292b21c90b', // AAVE
    tokenOut: zeroAddress, // MATIC
    amountIn: GreaterThanOrEqual(parseUnits('0.0835', 18)),
    amountOut: GreaterThanOrEqual(parseEther('10.57611940')),
    recipient: '0xa99f898530df1514a566f1a6562d62809e99557d',
  },
}

export const OPTIMISM_SWAP: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 10,
    from: '0x76e059c6ff6bf9fffd5f33afdf4ab2fd511c9df4',
    hash: '0x4fbe86f0d0b667ff9f8a9cdcf73f99782137a409e821bdcb2e95e795ec9661af',
    input:
      '0x52bbbe2900000000000000000000000000000000000000000000000000000000000000e000000000000000000000000076e059c6ff6bf9fffd5f33afdf4ab2fd511c9df4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000076e059c6ff6bf9fffd5f33afdf4ab2fd511c9df400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002ea4a2b5473a90000000000000000000000000000000000000000000000000000000065680ece39965c9dab5448482cf7e002f583c812ceb530460001000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000004200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000',
    to: '0xba12222222228d8ba445958a75a0704d566bf2c8',
    value: '0',
  },
  params: {
    chainId: Chains.OPTIMISM,
    contractAddress: VAULT_CONTRACT,
    tokenIn: '0x4200000000000000000000000000000000000042', // OP
    tokenOut: zeroAddress, // ETH
    amountIn: GreaterThanOrEqual(parseUnits('1', 18)),
    amountOut: GreaterThanOrEqual(parseEther('0.0005')),
    recipient: '0x76e059c6ff6bf9fffd5f33afdf4ab2fd511c9df4',
  },
}

export const OPTIMISM_BATCH_SWAP: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 10,
    from: '0x05a9b863da79557856529fb2ffeaddb01b66bf17',
    hash: '0x3a9d14ac63af0c4229161dfbb8cd005d567c32655ddf62a9881596ad1620b784',
    input:
      '0x945bcec900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000022000000000000000000000000005a9b863da79557856529fb2ffeaddb01b66bf17000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005a9b863da79557856529fb2ffeaddb01b66bf1700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000280ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000209da11ff60bfc5af527f58fd61679c3ac98d040d90000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000bbc139cc00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007f5c764cbc14f9669b88837ca1490cca17c3160700000000000000000000000094b008aa00579c1307b0ef2c499ad98a8ce58e58000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000bbc139ccffffffffffffffffffffffffffffffffffffffffffffffffffffffff44766c37',
    to: '0xba12222222228d8ba445958a75a0704d566bf2c8',
    value: '0',
  },
  params: {
    chainId: Chains.OPTIMISM,
    contractAddress: VAULT_CONTRACT,
    tokenIn: '0x7f5c764cbc14f9669b88837ca1490cca17c31607', // USDC.e
    tokenOut: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58', // USDT
    amountIn: GreaterThanOrEqual(parseUnits('3150', 6)),
    amountOut: GreaterThanOrEqual(parseUnits('3140', 6)),
    recipient: '0x05a9b863da79557856529fb2ffeaddb01b66bf17',
  },
}

export const ARBITRUM_SWAP: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0xaa71269abc3db95d12e059e3e193e7ad0666fb58',
    hash: '0xe3540a63c3b6141dc5e3096a24f2d347c8abb72ef3ab0aeda54aec61faaba0d3',
    input:
      '0x52bbbe2900000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000aa71269abc3db95d12e059e3e193e7ad0666fb580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aa71269abc3db95d12e059e3e193e7ad0666fb5800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a2913d3227426d7a1b000000000000000000000000000000000000000000000000000000006568154d32df62dc3aed2cd6224193052ce665dc181658410002000000000000000003bd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003082cc23568ea640225c2467653db90e9250aaa0000000000000000000000000000000000000000000000000053f47f25d93400000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000',
    to: '0xba12222222228d8ba445958a75a0704d566bf2c8',
    value: '378100000000000000',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    contractAddress: VAULT_CONTRACT,
    tokenIn: zeroAddress, // ETH
    tokenOut: '0x3082cc23568ea640225c2467653db90e9250aaa0', // RDNT
    amountIn: GreaterThanOrEqual(parseEther('0.3781')),
    amountOut: GreaterThanOrEqual(parseUnits('3000', 18)),
    recipient: '0xaa71269abc3db95d12e059e3e193e7ad0666fb58',
  },
}

export const ARBITRUM_BATCH_SWAP: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0xc8093425c474e3de3970e61004d743ab8fe6c9cc',
    hash: '0xd674c7103e33fd8bbd11f4d1a99b13ed35bc23cc5ed95eae6eb03c5f2b2dea43',
    input:
      '0x945bcec9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000300000000000000000000000000c8093425c474e3de3970e61004d743ab8fe6c9cc0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c8093425c474e3de3970e61004d743ab8fe6c9cc00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000380000000000000000000000000000000000000000000000000000000006568293200000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000010064541216bafffeec8ea535bb71fbc927831d05950001000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000055c800000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000052688295413b32626d226a205b95cdb337de860002000000000000000003d100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000002f2a2543b76a4166549f7aab2e75bef0aefc5b0f000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc8000000000000000000000000912ce59144191c1204e64559fe8253a0e49e6548000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000055c80000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff90c4686201c81556',
    to: '0xba12222222228d8ba445958a75a0704d566bf2c8',
    value: '0',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    contractAddress: VAULT_CONTRACT,
    tokenIn: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f', // WBTC
    tokenOut: '0x912ce59144191c1204e64559fe8253a0e49e6548', // ARB
    amountIn: GreaterThanOrEqual(parseUnits('0.0002196', 8)),
    amountOut: GreaterThanOrEqual(parseUnits('8', 18)),
    recipient: '0xc8093425c474e3de3970e61004d743ab8fe6c9cc',
  },
}

export const passingTestCases = [
  createTestCase(POLYGON_SWAP, 'when making a swap on polygon'),
  createTestCase(POLYGON_BATCH_SWAP, 'when making a batch swap on polygon'),
  createTestCase(OPTIMISM_SWAP, 'when making a swap on optimism'),
  createTestCase(OPTIMISM_BATCH_SWAP, 'when making a batch swap on optimism'),
  createTestCase(ARBITRUM_SWAP, 'when making a swap on arbitrum'),
  createTestCase(ARBITRUM_BATCH_SWAP, 'when making a batch swap on arbitrum'),
  createTestCase(OPTIMISM_SWAP, 'when tokenIn is set to "any"', {
    tokenIn: undefined,
  }),
  createTestCase(POLYGON_SWAP, 'when tokenOut is set to "any"', {
    tokenOut: undefined,
  }),
  createTestCase(ARBITRUM_BATCH_SWAP, 'when tokens are set to "any/any"', {
    tokenIn: undefined,
    tokenOut: undefined,
  }),
  createTestCase(OPTIMISM_BATCH_SWAP, 'when `==` comaprison is used for amountIn', {
    amountIn: 3150002636n,
  }),
  createTestCase(OPTIMISM_BATCH_SWAP, 'when `==` comaprison is used for amountOut', {
    amountOut: 3146355657n,
  }),
]

export const failingTestCases = [
  createTestCase(POLYGON_SWAP, 'when chainId is not correct', { chainId: 1 }),
  createTestCase(POLYGON_BATCH_SWAP, 'when contract address is not correct', {
    contractAddress: '0xa062aE8A9c5e11aaA026fc2670B0D65cCc8B2858',
  }),
  createTestCase(OPTIMISM_SWAP, 'when tokenIn is not correct', {
    tokenIn: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
  }),
  createTestCase(OPTIMISM_BATCH_SWAP, 'when tokenOut is not correct', {
    tokenOut: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
  }),
  createTestCase(ARBITRUM_SWAP, 'when amountIn is not sufficient', {
    amountIn: GreaterThanOrEqual(parseEther('100')),
  }),
  createTestCase(ARBITRUM_BATCH_SWAP, 'when amountOut is not sufficient', {
    amountOut: GreaterThanOrEqual(parseEther('100')),
  }),
  createTestCase(OPTIMISM_BATCH_SWAP, 'when recipient is not correct', {
    recipient: '0xCB6586874cc04B01Cc4fDB777dE502cEa7b3D6c1',
  }),
]
