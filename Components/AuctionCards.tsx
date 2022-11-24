import React, { useEffect, useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {
    Card,
    CardBody,
    Box,
    Text,
    Image,
    Icon,
    Flex,
    transition
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
        likes: number;
        isLiked: boolean;

    };
    timerDays:number;
    timerHours:number;
    timerMinutes:number;
    timerSeconds:number;
 }


 



const AuctionCards:React.FC<AllProps > =({data ,timerDays,timerHours,timerMinutes,timerSeconds}):JSX.Element=> {
  
    const [isLiked,setIsLiked]= useState(true)
    const [likes, setLikes]= useState(data.likes)
    console.log(likes);

    const handleLikeButton:React.MouseEventHandler<SVGElement> =()=>{
        setIsLiked(!isLiked)
        if(isLiked ===false){
            setLikes(likes -1)
        }else{
            setLikes(likes +1)
        }
     
        
    }
    
  return (
<Card maxW="xs" bg="blue.900" mb="10" boxShadow="2xl">
    <CardBody>

        {/* Badge part  */}
        <Box display="flex" justifyContent="space-between">
            <Text as="button" color="gray.300" alignItems="center" border="1px" borderColor="gray.300" rounded="full" fontSize="sm" fontWeight="semibold" px="3" bg={"blackAlpha.700"}>{data.badge1}</Text>
            <Text as="button" color="white"  border="1px" alignItems="center" rounded="full" borderColor="orange.300" fontSize="sm" fontWeight="semibold" px="3" bg={"blackAlpha.800"} >{data.badge2}</Text>
        </Box>

        {/* Image  */}
    <Box mt="3">
        <Image mx="auto" src={data.picture} alt='vr box' rounded="lg" objectFit={"cover"} boxSize="280px"></Image>
    </Box>

    {/* Additional information part and icon  */}
    <Flex justify={"space-between"} alignItems="center" mb="3">
        <Box mt="3" >
            <Text color="white">{data.productCode}</Text>
            <Text color="blue.300" fontSize="sm" fontWeight="semibold">{data.bidderName}</Text>
        </Box>
        <Flex align="center" gap="2">
            <Icon onClick={handleLikeButton} as={AiFillHeart} cursor="pointer" _hover={{scale:105}} color={!isLiked ? "red.500" : "gray.500"} fontSize="xl"></Icon>
            <Text as="span" color={!isLiked ? "white": "gray.400"}>{likes}</Text>
        </Flex>
    </Flex>  

{/* pricing section  */}
    <Flex justify={"space-between"}>
        <Box border="1px" bg="blackAlpha.400" p="2">
            <Text color="green.400" borderColor={"gray.300"} fontSize={"sm"} fontWeight="bold" >HIGHEST BID</Text>
            <Text color="white">${data.bidPrice}</Text>
        </Box>
        <Box border="1px" bg="blackAlpha.400" p="2" textAlign={"center"}>
        
            <Text color="green.400" borderColor={"gray.300"} fontSize={"sm"} fontWeight="bold" >AUCTION ENDS IN</Text>
            <Text color="white" fontWeight="semibold">{ timerDays} :  { timerHours} : { timerMinutes} : { timerSeconds}s</Text>
        </Box>
    </Flex>

    <Box mt="2" bg="blue.400" p="2" textAlign={"center"} cursor="pointer" _hover={{bgColor:"blue.500"}} >
        <Text as="button" fontSize={"sm"}  color="white" fontWeight="semibold">BID NOW</Text>
    </Box>
    </CardBody>
</Card>
  )
}

export default AuctionCards;