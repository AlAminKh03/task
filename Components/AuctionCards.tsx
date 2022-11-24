import React, { useEffect, useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {
    Card,
    CardBody,
    Box,
    Text,
    Image,
    Icon,
    Flex
 } from '@chakra-ui/react'

 interface AllProps{
    data:{
        id: number;
        badge1: string;
        badge2: string;
        picture: string;
        productCode: string;
        bidderName: string;
        bidPrice: number;
    };
    timerDays:number;
    timerHours:number;
    timerMinutes:number;
    timerSeconds:number;
 }


 



const AuctionCards:React.FC<AllProps > =({data ,timerDays,timerHours,timerMinutes,timerSeconds}):JSX.Element=> {
    // const [timerState,setTimerState]=useState({
    //     timerDays:10,
    //     timerHours:10,
    //     timerMinutes:10,
    //     timerSeconds:10
    // })

    
    
    
  return (
<Card maxW="xs" bg="blue.900" mb="10">
    <CardBody>
        <Box display="flex" justifyContent="space-between">
            <Text as="button" color="gray.300" alignItems="center" border="1px" borderColor="gray.300" rounded="full" fontSize="sm" fontWeight="semibold" px="3" bg={"blackAlpha.700"}>{data.badge1}</Text>
            <Text as="button" color="white"  border="1px" alignItems="center" rounded="full" borderColor="orange.300" fontSize="sm" fontWeight="semibold" px="3" bg={"blackAlpha.800"} >{data.badge2}</Text>
        </Box>
    <Box mt="3">
        <Image mx="auto" src={data.picture} alt='vr box' rounded="lg" objectFit={"cover"} boxSize="280px"></Image>
    </Box>
    <Flex justify={"space-between"} alignItems="center" mb="3">
        <Box mt="3" >
            <Text color="white">{data.productCode}</Text>
            <Text color="blue.300" fontSize="sm" fontWeight="semibold">{data.bidderName}</Text>
        </Box>
        <Flex align="center" gap="2">
            <Icon as={AiFillHeart} cursor="pointer" _hover={{scale:105}} color={"gray.500"} fontSize="xl"></Icon>
            <Text as="span" color="gray.400">71</Text>
        </Flex>
    </Flex>
    <Flex justify={"space-between"}>

        <Box border="1px" bg="blackAlpha.400" p="2">
            <Text color="green.400" borderColor={"gray.300"} fontSize={"sm"} fontWeight="bold" >HIGHEST BID</Text>
            <Text color="white">${data.bidPrice}</Text>
        </Box>
        <Box border="1px" bg="blackAlpha.400" p="2" textAlign={"center"}>
        
            <Text color="green.400" borderColor={"gray.300"} fontSize={"sm"} fontWeight="bold" >AUCTION ENDS IN</Text>
            <Text color="white" >{ timerDays} :  { timerHours} : { timerMinutes} : { timerSeconds}s</Text>
        </Box>
    </Flex>
    <Box mt="2" bg="blue.400" p="2" textAlign={"center"}>
        <Text as="button" fontSize={"sm"}  color="white" fontWeight="semibold">BID NOW</Text>
    </Box>
    </CardBody>
</Card>
  )
}

export default AuctionCards;