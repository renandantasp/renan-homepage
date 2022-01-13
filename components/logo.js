import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
transition: 0.3s;

@keyframes rot {
  
  100% {transform: rotate(359deg);}
  
}
&:hover img {
  animation: rot 2s infinite linear;
}

`

const Logo = () => {
  const logoImg = `/images/logo${useColorModeValue('','-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} width={25} height={25} alt="logo"/>
          <Text 
            color={useColorModeValue('#282828','#fbf1c7')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}>
            Renan Dantas
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo