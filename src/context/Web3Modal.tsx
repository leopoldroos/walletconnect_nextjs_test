"use client"

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import { useWeb3Modal } from '@web3modal/ethers/react'
import styled from 'styled-components'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'e67036fc2887623576e98ce387998086'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})

export function Web3ModalProvider({ children }: { children: React.ReactNode}) {
  return children;
}

const Button = styled.button`
    border: 1px solid green;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f99ff9;
    }
`;

export function ConnectButton() {
    // 4. Use modal hook
    const { open } = useWeb3Modal()
  
    return (
      <>
        <Button onClick={() => open()}>Open Connect Modal</Button>
        <Button onClick={() => open({ view: 'Networks' })}>Open Network Modal</Button>
      </>
    )
  }
  