import { NativeCurrencyBase } from '../hooks/useNativeCurrency'
import { ChainWithRpcUrl } from './networks'

export type NetworkType =
  | 'Ethereum'
  | 'Rollup'
  | 'AnyTrust'
  | 'Ethereum Testnet'
  | 'Arbitrum Testnet'

export type BridgeUiConfig = {
  color: `#${string}`
  network: {
    name: string
    logo: string
    description?: string
  }
  nativeTokenData?: NativeCurrencyBase
}

type OrbitChainConfig = ChainWithRpcUrl & { bridgeUiConfig: BridgeUiConfig }

export const orbitMainnets: {
  [key: number]: OrbitChainConfig
} = {}

export const orbitTestnets: { [key in number]: OrbitChainConfig } = {
  736: {
    chainID: 736,
    name: 'AcadChain',
    explorerUrl: 'https://explorer-testnet.acadchain.xyz',
    isCustom: true,
    blockTime: 2,
    partnerChainIDs: [],
    tokenBridge: {
      l1GatewayRouter: '0x0000000000000000000000000000000000000000',
      l2GatewayRouter: '0xF131b757D21052Fa9eBc85d1Eb45920A39347EC0',
      l1ERC20Gateway: '0x0000000000000000000000000000000000000000',
      l2ERC20Gateway: '0x27e57b34946DA9B45D9Ff5722bB0410A45868c45',
      l1CustomGateway: '0x0000000000000000000000000000000000000000',
      l2CustomGateway: '0xE049f00c087c1922Bc84935b0261Ac8c8907909b',
      l1WethGateway: '0x0000000000000000000000000000000000000000',
      l2WethGateway: '0x0000000000000000000000000000000000000000',
      l1Weth: '0x0000000000000000000000000000000000000000',
      l2Weth: '0x0000000000000000000000000000000000000000',
      l1ProxyAdmin: '0x0000000000000000000000000000000000000000',
      l2ProxyAdmin: '0x0000000000000000000000000000000000000000',
      l1MultiCall: '0x0000000000000000000000000000000000000000',
      l2Multicall: '0xce1CAd780c529e66e3aa6D952a1ED9A6447791c1'
    },
    ethBridge: {
      bridge: '0x13Dc612ED7E0aBE6EC03e8d2D997E651579428AF',
      inbox: '0x36060895B231CbFfdEb65aa09F61E1516248508A',
      outbox: '0x365701f3FD5b4B92E6b5e6B371b1e6EA82512811',
      rollup: '0xFE56f147e52b7e69ed6135aDE897FCd7C87D709a',
      sequencerInbox: '0xdf31333fF0B7328399875D88516831510f42b378'
    },
    partnerChainID: 421614,
    isArbitrum: true,
    confirmPeriodBlocks: 45818,
    retryableLifetimeSeconds: 604800,
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 900000,
    nativeToken: '0x700f0539753926d65Da70dB03c7ddA2bAB0DB7d7',
    rpcUrl: 'https://rpc-testnet.acadchain.xyz',
    slug: 'AcadChain',
    bridgeUiConfig: {
      color: '#55A1F7',
      network: {
        name: 'AcadChain',
        logo: '/logo-white.png',
        description: 'Testnet chain for Orbit deployment'
      },
      nativeTokenData: {
        name: 'ACAD',
        symbol: 'ACAD',
        decimals: 18,
        logoUrl: '/logo-white.png'
      }
    }
  }
}

export const orbitChains = { ...orbitMainnets, ...orbitTestnets }

export function getOrbitChains(
  {
    mainnet,
    testnet
  }: {
    mainnet: boolean
    testnet: boolean
  } = { mainnet: true, testnet: true }
): OrbitChainConfig[] {
  const mainnetChains = mainnet ? Object.values(orbitMainnets) : []
  const testnetChains = testnet ? Object.values(orbitTestnets) : []

  return [...mainnetChains, ...testnetChains]
}
