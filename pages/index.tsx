import Head from 'next/head'
import {useState,useEffect} from 'react'
import { Box,Flex,Grid,GridItem,SimpleGrid,Text } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import AuctionCards from '../Components/AuctionCards'
import datas from '../sample.json'
import saleDatas from '../saleSample.json'
import SaleCard from '../Components/SaleCard'


interface CardProps {
  id: number;
  badge1: string;
  badge2: string;
  picture: string;
  productCode: string;
  bidderName: string;
  bidPrice: number;
}


export default function Home() {
 
  const [timerDays,setTimerDays]=useState(0)
    const [timerHours,setTimerHours]=useState(0)
    const [timerMinutes,setTimerMinutes]=useState(0)
    const [timerSeconds,setTimerSeconds]=useState(0)
   

    let interval:NodeJS.Timer;
    const startTimer=()=>{
        const countDownDate = new Date("Dec 12,2022").getTime()
        interval=setInterval(()=>{
            const presentDate = new Date().getTime()
            const timeDifference = countDownDate - presentDate;

            const days= Math.floor(timeDifference/(24* 60 * 60 * 1000))
            const hours= Math.floor((timeDifference%(24* 60 * 60 * 1000)) / (60*60* 1000))
            const minutes= Math.floor((timeDifference%( 60 * 60 * 1000)) / (60* 1000))
            const seconds= Math.floor((timeDifference%( 60 * 1000)) / (1000))

            if (timeDifference<0){
                clearInterval(interval)
            }
            else{
            setTimerDays(days)
            setTimerHours(hours)
            setTimerMinutes(minutes)
            setTimerSeconds(seconds)
            }
        })
    }
    useEffect(() => {
        startTimer()
    })

 
  return (
    <Box className={styles.container} bgColor="gray.800" backdropFilter='invert(100%)'>
      <Head>
        <title>Task</title>
        <meta name="description" content="Cards of products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Box>
      <Text fontSize={"4xl"} textAlign="center" fontWeight="bold" p="10" bgClip="text"  color="transparent" bgGradient="linear(to-l, #7928CA, #FF0080)" >BLACK FRIDAY SALES IS ON </Text>
     <SimpleGrid columns={[1,1,2,3]} gap={[3,3,4,10]} mx="auto" ml={[22,22,35, 35]}>
     {datas.map((data)=>{
       console.log(data)
        return(
      <Box   key={data.id}>
      <AuctionCards data={data} timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
      </Box>
        )
      })}

{saleDatas.map(data=>{
  return(
    <Box key={data.id}>
      <SaleCard saleData={data} timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
    </Box>
  )
})}
     </SimpleGrid>
      
     </Box>
    </Box>
  )
}
