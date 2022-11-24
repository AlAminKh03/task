import { Badge, Box, Button, Card, CardBody, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'


interface SaleCardProps {
    saleData: {
    id: number;
    badge1: string;
    badge2: string;
    picture: string;
    productCode: string;
    bidderName: string;
    regularPrice: number;
    offer: number;
    likes:number;
    };
    timerDays:number;
    timerHours:number;
    timerMinutes:number;
    timerSeconds:number;
}


const SaleCard:React.FC<SaleCardProps> = ({saleData,timerDays,timerHours,timerMinutes,timerSeconds}):JSX.Element => {
  
    const [isLiked,setIsLiked]= useState(true)
    const [likes, setLikes]= useState(saleData.likes)
    
    const handleLikeButton :React.MouseEventHandler<SVGElement> =()=>{
        setIsLiked(!isLiked)
        if(isLiked ===false){
            setLikes(likes -1)
        }else{
            setLikes(likes +1)
        }
     
        
    }

    const discountedPrice = Math.floor((saleData?.regularPrice * saleData?.offer)/100)
  const offerPrice = saleData.regularPrice -discountedPrice;

  
    return (
    <Card maxW="xs" bg="blue.900" mb="10">
    <CardBody>

         {/* Badge item  */}
        <Box display="flex" justifyContent="space-between">
            <Text as="button" color="gray.300" alignItems="center" border="1px" borderColor="gray.300" rounded="full" fontSize="sm" fontWeight="semibold" px="3" bg={"blackAlpha.700"}>{saleData.badge1}</Text>
            <Text as="button" color="white"  border="1px" alignItems="center" rounded="full" borderColor="purple.300" fontSize="sm" fontWeight="semibold" px="3" bg={"blackAlpha.800"} >{saleData.badge2}</Text>
        </Box>

        {/* Image  */}
    <Box mt="3">
        <Image mx="auto" src={saleData.picture} alt='vr box' rounded="lg" objectFit={"cover"} boxSize="280px"></Image>
    </Box>

    {/* Additional Information 1st part  */}
    <Flex justify={"space-between"} alignItems="center" mb="3">
        <Box mt="3" >
            <Text color="white">{saleData.productCode}</Text>
            <Text color="blue.300" fontSize="sm" fontWeight="semibold">{saleData.bidderName}</Text>
        </Box>
        <Flex align="center" gap="2">
            <Icon as={AiFillHeart} onClick={handleLikeButton} cursor="pointer" _hover={{scale:105}} color={!isLiked ? "red.500" : "gray.500"} fontSize="xl"></Icon>
            <Text as="span" color={!isLiked ? "white": "gray.400"}>{likes}</Text>
        </Flex>
    </Flex>

    {/* price and countdown part  */}
    <Flex justify={"space-between"}>
        <Box border="1px" bg="blackAlpha.400" py="2" pr="10" pl="4" pos="relative">
            <Badge  pos="absolute" top="-3" rounded="lg" bgColor="green.500" color="white">{saleData.offer}% off</Badge>
            <Text as="s" textAlign="left" color="red.600" borderColor="gray.300"   >{saleData.regularPrice}</Text>
            <Text textAlign="left" color="white">${offerPrice}</Text>
        </Box>
        <Box border="1px" bg="blackAlpha.400" p="2" textAlign={"center"}>
            <Text color="green.400" borderColor={"gray.300"} fontSize={"sm"} fontWeight="bold" >FLASH DEALS ENDS IN</Text>
            <Text color="white" fontWeight="semibold" >{ timerDays} :  { timerHours} : { timerMinutes} : { timerSeconds}s</Text>
           
        </Box>
    </Flex>

    {/* Button  */}
    <Flex mt="2" textAlign="center" justify="space-between">

        <Text as="button" fontSize="sm" border='1px' p="2" px="5" color="white" fontWeight="semibold">ADD TO CART</Text>
        <Text as="button" fontSize="sm" bgColor="blue.400" p="2" px="8" fontWeight="semibold" textColor="white">BUY NOW</Text>
    </Flex>
    </CardBody>
</Card>
  )
}
export default SaleCard;