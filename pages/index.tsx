import Head from 'next/head'
import { Box,Text } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import AuctionCards from '../Components/AuctionCards'


export default function Home() {
  return (
    <Box className={styles.container}>
      <Head>
        <title>Task</title>
        <meta name="description" content="Cards of products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Box>
      <Text fontSize={"4xl"} textAlign="center" fontWeight="bold" m="10" bgClip="text" color="transparent" bgGradient="linear(to-l, #7928CA, #FF0080)" >BLACK FRIDAY SALES IS ON 🌟</Text>
      <AuctionCards/>
     </Box>
    </Box>
  )
}
