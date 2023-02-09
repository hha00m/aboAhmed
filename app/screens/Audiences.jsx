import React from 'react'
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { FormControl, Radio, WarningOutlineIcon, Fab, Stack, Select, Box, Center, Button, Divider, CheckIcon, HStack, Icon, TextArea, Image, Input, Modal, ScrollView, Switch, Text, useDisclose, VStack } from 'native-base'
import SearchBar from '../components/SearchBar';

const Audiences = () => {
    const data = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abfb28ba',
        name: 'بابل',
        reach: 7233,
        timeStamp: '12:47 PM',
    }, {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abfb28ba',
        name: 'بغداد',
        reach: 1743,
        timeStamp: '12:47 PM',
    }, {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abfb28ba',
        name: 'نجف',
        reach: 7243,
        timeStamp: '12:47 PM',
    },]


    return (
        <SafeAreaView>

            <SearchBar />
            <ScrollView  >


                {/* ------------------------------------------------------- */}
                {/* audance box */}
                {/* -------------- */}
                <Box w={"98%"} shadow={1} alignSelf="center" >
                    <Text textAlign={"right"} m={4} fontSize={16} color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                    }} bold>
                        الجمهور
                    </Text>
                    <Divider mb={3} width="95%" alignSelf={"center"} />
                    {data.map((item) => <HStack space={3} justifyContent="space-between" alignItems="center" flexDirection={"row-reverse"}>
                        <HStack m={3} justifyContent={"center"} alignItems="center">
                            <VStack mx={3}>
                                <Text mr={1} color="coolGray.800" textAlign={"right"} _dark={{
                                    color: 'warmGray.50'
                                }} bold>
                                    {item.name}
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: 'warmGray.200'
                                }} fontSize={12}>{item.name} </Text>
                            </VStack>
                        </HStack>
                        <Pressable onPress={() => setModalVisible_categories(true)}>
                            <Icon m={3} as={AntDesign} name="delete" size="sm" />
                        </Pressable>
                    </HStack>)}



                </Box>
                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />


                {/* ------------------------------------------------------- */}
                {/* buttons box */}
                {/* ----------- */}
                <Button m={2} alignSelf="center" w={"90%"} size={"lg"} endIcon={<Icon as={AntDesign} name="save" size="sm" />}>حفظ</Button>

            </ScrollView>
        </SafeAreaView >
    )
}

export default Audiences

