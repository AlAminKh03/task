import { Badge, Box, Card, CardBody, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react'
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
    };
    timerDays:number;
    timerHours:number;
    timerMinutes:number;
    timerSeconds:number;
}


const SaleCard:React.FC<SaleCardProps> = ({saleData,timerDays,timerHours,timerMinutes,timerSeconds}):JSX.Element => {
  const discountedPrice = Math.floor((saleData?.regularPrice * saleData?.offer)/100)
  const offerPrice = saleData.regularPrice -discountedPrice;
  
    return (
    <Card maxW="xs" bg="blue.900" mb="10">
    <CardBody>
        <Box display="flex" justifyContent="space-between">
            <Text as="button" color="gray.300" alignItems="center" border="1px" borderColor="gray.300" rounded="full" fontSize="sm" fontWeight="semibold" px="3" bg={"blackAlpha.700"}>{saleData.badge1}</Text>
            <Text as="button" color="white"  border="1px" alignItems="center" rounded="full" borderColor="orange.300" fontSize="sm" fontWeight="semibold" px="3" bg={"blackAlpha.800"} >{saleData.badge2}</Text>
        </Box>
    <Box mt="3">
        <Image mx="auto" src={saleData.picture} alt='vr box' rounded="lg" objectFit={"cover"} boxSize="280px"></Image>
    </Box>
    <Flex justify={"space-between"} alignItems="center" mb="3">
        <Box mt="3" >
            <Text color="white">{saleData.productCode}</Text>
            <Text color="blue.300" fontSize="sm" fontWeight="semibold">{saleData.bidderName}</Text>
        </Box>
        <Flex align="center" gap="2">
            <Icon as={AiFillHeart} cursor="pointer" _hover={{scale:105}} color={"gray.500"} fontSize="xl"></Icon>
            <Text as="span" color="gray.400">71</Text>
        </Flex>
    </Flex>
    <Flex justify={"space-between"}>

        <Box border="1px" bg="blackAlpha.400" py="2" px="5">
            
            <Text color="green.400" borderColor={"gray.300"} fontSize={"sm"} fontWeight="bold" >{saleData.regularPrice}</Text>
            <Text color="white">${offerPrice}</Text>
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
export default SaleCard;