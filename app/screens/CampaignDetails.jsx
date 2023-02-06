import React from 'react'
import { Actionsheet, Box, Button, Divider, FormControl, HStack, Icon, Image, Input, Modal, Popover, ScrollView, Switch, Text, useDisclose, VStack } from 'native-base'
import { Octicons, MaterialCommunityIcons, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';

const CampaignDetails = () => {
    const data = {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abfb28ba',
        fullName: 'احمد الغانمي',
        status: { name: 'نشط', color: "success.400", icon: "" },
        reach: 743,
        spent: "11$",
        cost: "100$",
        timeToFinish: '11 2 2023',
        timeStamp: '12:47 PM',
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <SafeAreaView>
            <ScrollView  >
                <HStack space={5} m={5} flexDirection="row-reverse" alignItems={"center"} justifyContent="space-between">
                    <HStack space={1} flexDirection="row-reverse" alignItems={"center"}>
                        <Image borderRadius={5} size="60px" source={{
                            uri: data.img
                        }} alt={"imgs"} />
                        <VStack alignItems={"flex-end"}>
                            <Text fontSize={16} color="coolGray.800" _dark={{
                                color: 'warmGray.50'
                            }} bold>
                                {data.fullName}
                            </Text>

                            <Text color="coolGray.600" _dark={{
                                color: 'warmGray.200'
                            }} fontSize={14}>Ongoing - {data.timeStamp}</Text>

                        </VStack>
                    </HStack>
                    <AntDesign name="left" size={20} color="black" />
                </HStack>
                <Divider />
                <HStack m={2} mx={4} justifyContent={"space-between"} flexDirection="row-reverse">
                    <HStack alignItems={"center"}>
                        <Text fontSize={16} color="coolGray.800" _dark={{
                            color: 'warmGray.50'
                        }} bold>
                            {data.status?.name}
                        </Text>
                        <Icon ml={2} color={data.status?.color} size="sm" as={<Octicons name="dot-fill" />} />

                    </HStack>
                    <Switch size={"md"} />
                </HStack>
                <HStack m={3} justifyContent={"center"} space={4} >
                    <Button w={"48%"} size={"lg"} colorScheme="coolGray" leftIcon={<Icon as={MaterialCommunityIcons} name="pencil" size="sm" />}>
                        تعديل
                    </Button>
                    <Button w={"48%"} size={"lg"} colorScheme="coolGray" leftIcon={<Icon as={Ionicons} name="copy-outline" size="sm" />}>
                        تكرار
                    </Button>
                </HStack>

                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />
                <Button onPress={onOpen} mx={3} w={"20%"} size={"lg"} colorScheme="coolGray" leftIcon={<Icon as={AntDesign} name="caretdown" size="sm" />}>
                    تاريخ
                </Button>
                <Actionsheet isOpen={isOpen} onClose={onClose} >
                    <Actionsheet.Content >
                        <Actionsheet.Item>Today</Actionsheet.Item>
                        <Actionsheet.Item>7 Days</Actionsheet.Item>
                        <Actionsheet.Item>30 Days</Actionsheet.Item>
                        <Actionsheet.Item>Max</Actionsheet.Item>
                        <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
                    </Actionsheet.Content>
                </Actionsheet>
                <Box w={"90%"} shadow={1} alignSelf="center">
                    <Text textAlign={"right"} m={4} fontSize={16} color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                    }} bold>
                        نتائج الحملة
                    </Text>
                    <Divider mb={3} width="95%" alignSelf={"center"} />
                    <HStack space={3} justifyContent="space-between" alignContent={"center"} flexDirection="row-reverse">
                        <Text mx="3" my={1}>عدد رسائل الواتس اب المرسلة</Text>
                        <Text mx="3" my={1} bold>33</Text>
                    </HStack>
                    <HStack space={3} justifyContent="space-between" alignContent={"center"} flexDirection="row-reverse">
                        <Text mx="3" my={1}>عدد رسائل التلكرام المرسلة</Text>
                        <Text mx="3" my={1} bold>33</Text>
                    </HStack>
                    <HStack space={3} justifyContent="space-between" alignContent={"center"} flexDirection="row-reverse">
                        <Text mx="3" my={1}>عدد رسائل فايبر المرسلة</Text>
                        <Text mx="3" my={1} bold>33</Text>
                    </HStack>
                    <HStack space={3} justifyContent="space-between" alignContent={"center"} flexDirection="row-reverse">
                        <Text mx="3" my={1}>عدد رسائل SMS المرسلة</Text>
                        <Text mx="3" my={1} bold>33</Text>
                    </HStack>
                    <HStack space={3} justifyContent="space-between" alignContent={"center"} flexDirection="row-reverse">
                        <Text mx="3" my={1}>الوصول</Text>
                        <Text mx="3" my={1} bold>142</Text>
                    </HStack>
                    <HStack space={3} justifyContent="space-between" alignContent={"center"} flexDirection="row-reverse">
                        <Text mx="3" my={1}>المبلغ المصروف</Text>
                        <Text mx="3" my={1} bold>12$</Text>
                    </HStack>
                    <HStack space={3} justifyContent="space-between" alignContent={"center"} flexDirection="row-reverse">
                        <Text mx="3" my={1}> رصيد المتبقي</Text>
                        <Text mx="3" my={1} bold>400$</Text>
                    </HStack>
                </Box>
                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />
                <Box w={"98%"} shadow={1} alignSelf="center">
                    <Text textAlign={"right"} m={4} fontSize={16} color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                    }} bold>
                        الإعدادات
                    </Text>
                    <Divider mb={3} width="95%" alignSelf={"center"} />
                    <HStack space={3} justifyContent="space-between" alignItems="center">
                        <HStack m={3} justifyContent={"center"} alignItems="center">
                            <Icon m={2} as={AntDesign} name="folder1" size="lg" />
                            <VStack mx={3}>
                                <Text mr={1} color="coolGray.800" _dark={{
                                    color: 'warmGray.50'
                                }} bold>
                                    Campaign Name
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: 'warmGray.200'
                                }} fontSize={12}>{data.fullName}</Text>
                            </VStack>
                        </HStack>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Icon m={3} as={AntDesign} name="edit" size="sm" />
                        </Pressable>
                    </HStack>
                    <HStack space={3} justifyContent="space-between" alignItems="center">
                        <HStack m={3} justifyContent={"center"} alignItems="center">
                            <Icon m={2} as={AntDesign} name="creditcard" size="lg" />
                            <VStack mx={3}>
                                <Text mr={1} color="coolGray.800" _dark={{
                                    color: 'warmGray.50'
                                }} bold>
                                    Budget
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: 'warmGray.200'
                                }} fontSize={12}>5.00 dollar per day</Text>
                            </VStack>
                        </HStack>
                        <Pressable    >
                            <Icon m={3} as={AntDesign} name="edit" size="sm" />
                        </Pressable>
                    </HStack>
                    <HStack space={3} justifyContent="space-between" alignItems="center">
                        <HStack m={3} justifyContent={"center"} alignItems="center">
                            <Icon m={2} as={MaterialCommunityIcons} name="message-reply-text-outline" size="lg" />
                            <VStack mx={3}>
                                <Text mr={1} color="coolGray.800" _dark={{
                                    color: 'warmGray.50'
                                }} bold>
                                    Message
                                </Text>

                            </VStack>
                        </HStack>
                        <Icon m={3} as={AntDesign} name="edit" size="sm" />
                    </HStack>
                    <HStack space={3} justifyContent="space-between" alignItems="center">
                        <HStack m={3} justifyContent={"center"} alignItems="center">
                            <Icon m={2} as={AntDesign} name="addusergroup" size="lg" />
                            <VStack mx={3}>
                                <Text mr={1} color="coolGray.800" _dark={{
                                    color: 'warmGray.50'
                                }} bold>
                                    Audience
                                </Text>
                                <Text numberOfLines={1} flexWrap="nowrap" color="coolGray.600" _dark={{
                                    color: 'warmGray.200'
                                }} fontSize={12}>Babil, Baghdad, Karbala, Najaf</Text>
                            </VStack>
                        </HStack>
                        <Icon m={3} as={AntDesign} name="edit" size="sm" />
                    </HStack>

                </Box>
                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />

                <Box w={"98%"} shadow={1} alignSelf="center" >
                    <Text textAlign={"right"} m={4} fontSize={16} color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                    }} bold>
                        تصنيف الجمهور
                    </Text>
                    <Divider mb={3} width="95%" alignSelf={"center"} />
                    <HStack space={3} justifyContent="space-between" alignItems="center" flexDirection={"row-reverse"}>
                        <HStack m={3} justifyContent={"center"} alignItems="center">
                            <VStack mx={3}>
                                <Text mr={1} color="coolGray.800" textAlign={"right"} _dark={{
                                    color: 'warmGray.50'
                                }} bold>
                                    أهتمامات الجمهور
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: 'warmGray.200'
                                }} fontSize={12}>ملابس, احذية, سوك</Text>
                            </VStack>
                            <Icon m={2} as={MaterialIcons} name="category" size="lg" />
                        </HStack>
                        <Icon m={3} as={AntDesign} name="edit" size="sm" />
                    </HStack>


                </Box>
                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />


                <Box w={"98%"} shadow={1} alignSelf="center">
                    <Text textAlign={"right"} m={4} fontSize={16} color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                    }} bold>
                        الاعلان
                    </Text>
                    <Divider mb={3} width="95%" alignSelf={"center"} />
                    <HStack space={3} justifyContent="space-between" alignItems="center" flexDirection={"row-reverse"}>
                        <HStack m={3} justifyContent={"center"} alignItems="center">

                            <VStack mx={3}>
                                <Text textAlign={"right"} mr={1} color="coolGray.800" _dark={{
                                    color: 'warmGray.50'
                                }} bold>
                                    محتوى الرسالة
                                </Text>
                                <Text textAlign={"right"} color="coolGray.600" _dark={{
                                    color: 'warmGray.200'
                                }} fontSize={12}>تعديل</Text>
                            </VStack>
                            <Image borderRadius={5} size="60px" source={{
                                uri: data.img
                            }} alt={"imgs"} />
                        </HStack>
                        <Icon m={3} as={AntDesign} name="edit" size="sm" />
                    </HStack>


                </Box>
                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />
                <Button m={2} alignSelf="center" w={"90%"} size={"lg"} endIcon={<Icon as={AntDesign} name="save" size="sm" />}> حفظ التعديل</Button>
                <Button m={2} colorScheme="danger" alignSelf="center" w={"90%"} size={"lg"} endIcon={<Icon as={AntDesign} name="delete" size="sm" />}>  حذف الحملة</Button>
                <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="center" bottom="4" size="lg">
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>Edit name</Modal.Header>
                        <Modal.Body>
                            <Input size={"2xl"} placeholder={data.fullName} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button flex="1" size={"lg"} onPress={() => {
                                setModalVisible(false);
                            }}>
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CampaignDetails

