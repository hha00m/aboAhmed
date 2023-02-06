import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Box, Icon, HStack, VStack, Text, Pressable, Image } from "native-base";

const Campaign = ({ item }) => {
    return (
        <Box alignItems="center" shadow={3} borderRadius="5" m={2}  >
            <Pressable w={"100%"} onPress={() => console.log('You touched me')}
                _light={{
                    bg: 'white'
                }} >
                <Box w="100%" m="3" pl={2} pr="5" >
                    <VStack space={1} >
                        <HStack justifyContent={"space-between"} mb={1}>
                            <HStack alignItems={"center"} mx={3}>
                                <Text mr={1} textAlign={"right"} color="coolGray.800" _dark={{
                                    color: 'warmGray.50'
                                }} bold>
                                    {item?.status?.name}
                                </Text>
                                {item?.status?.color && <Icon color={item?.status?.color} as={<FontAwesome5 name="dot-circle" />} />}
                            </HStack>


                            <Text>{item.timeStamp}</Text>
                        </HStack>
                        <HStack alignItems={"center"} space={2}>
                            <Image borderRadius={5} size="55px" source={{
                                uri: item.img
                            }} alt={"imgs"} />
                            <Text fontSize={16} textAlign={"right"} color="coolGray.800" _dark={{
                                color: 'warmGray.50'
                            }} bold>
                                {item.fullName}
                            </Text>
                        </HStack>

                        <HStack justifyContent={"space-around"}>
                            <VStack >
                                <Text fontSize={16} textAlign={"right"} color="coolGray.800" _dark={{
                                    color: 'warmGray.50'
                                }} bold>30</Text>
                                <Text textAlign={"right"} color="coolGray.600" _dark={{
                                    color: 'warmGray.200'
                                }} fontSize={10}>الوصول</Text>
                            </VStack>
                            <VStack>
                                <Text fontSize={16} textAlign={"right"} color="coolGray.800" _dark={{
                                    color: 'warmGray.50'
                                }} bold>120</Text>
                                <Text fontSize={10} textAlign={"right"} color="coolGray.600" _dark={{
                                    color: 'warmGray.200'
                                }}>مبلغ الحملة</Text>
                            </VStack>
                            <VStack>
                                <Text fontSize={16} textAlign={"right"} color="coolGray.800" _dark={{
                                    color: 'warmGray.50'
                                }} bold>3</Text>
                                <Text fontSize={10} textAlign={"right"} color="coolGray.600" _dark={{
                                    color: 'warmGray.200'
                                }}>المبلغ المنفق</Text>
                            </VStack>


                        </HStack>
                    </VStack>





                </Box>
            </Pressable>
        </Box>
    )
}

export default Campaign

