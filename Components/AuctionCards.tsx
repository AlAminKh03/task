import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {
    Card,
    CardBody,
    Box,
    Text,
   Image,
   Icon,
   Flex,
   Button
 } from '@chakra-ui/react'


const AuctionCards=()=> {
  return (
    <Card maxW="xs" bg="blue.900" mb="10">
<CardBody>
<Box display="flex" justifyContent="space-between">
<Text as="button" color="gray.300" alignItems="center" border="1px" borderColor="gray.300" rounded="full" fontSize="sm" fontWeight="semibold" px="3" bg={"blackAlpha.700"}>Hot Deal</Text>
<Text as="button" color="white"  border="1px" alignItems="center" rounded="full" borderColor="orange.300" fontSize="sm" fontWeight="semibold" px="3" bg={"blackAlpha.800"} >Auction</Text>
</Box>
<Box mt="3">
    <Image mx="auto" src='https://img.freepik.com/premium-photo/3d-vr-goggles-icon-virtual-reality-technology-metaverse-3d-render-illustration_73903-1187.jpg?w=2000' alt='vr box' rounded="lg" objectFit={"cover"} boxSize="280px"></Image>
</Box>
<Flex justify={"space-between"} alignItems="center" mb="3">
<Box mt="3" >
    <Text color="white">#B8/457843</Text>
    <Text color="blue.300" fontSize="sm" fontWeight="semibold">Enoch Citizen</Text>
</Box>
<Flex align="center" gap="2">
<Icon as={AiFillHeart} color={"gray.500"} fontSize="xl"></Icon>
<Text as="span" color="gray.400">71</Text>
</Flex>
</Flex>
<Flex justify={"space-between"}>

    <Box border="1px" bg="blackAlpha.400" p="2">
        
        <Text color="green.400" borderColor={"gray.300"} fontSize={"sm"} fontWeight="bold" >HIGHEST BID</Text>
        <Text color="white">$260</Text>
    </Box>
    <Box border="1px" bg="blackAlpha.400" p="2" textAlign={"center"}>
        
        <Text color="green.400" borderColor={"gray.300"} fontSize={"sm"} fontWeight="bold" >AUCTION ENDS IN</Text>
        <Text color="white">00 : 00 : 00 : 00s</Text>
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