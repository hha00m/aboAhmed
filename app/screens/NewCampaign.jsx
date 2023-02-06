import React from 'react'
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { FormControl, Radio, WarningOutlineIcon, Fab, Stack, Select, Box, Center, Button, Divider, CheckIcon, HStack, Icon, TextArea, Image, Input, Modal, ScrollView, Switch, Text, useDisclose, VStack } from 'native-base'

const NewCampaign = () => {
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

    const [service, setService] = React.useState("daily");
    const [date, setDate] = React.useState("Today");
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalVisible_message, setModalVisible_message] = React.useState(false);
    const [modalVisible_categories, setModalVisible_categories] = React.useState(false);
    const [value, setValue] = React.useState("one");

    return (
        <SafeAreaView>
            {/* ------------------------------------------------------- */}
            {/*حجم الجمهور عائم*/}
            {/* ---------- */}
            <HStack
                position={"absolute"}
                top="10"
                h={12} w={"40%"}
                shadow={3}
                bg="white"
                zIndex={99}
                borderRadius={5}
                borderColor={"muted.200"}
                borderWidth="1"
                justifyContent="space-around"
                alignItems="center"
                mx={3}
                flexDirection="row-reverse"
            >
                <HStack m={3} justifyContent={"center"} alignItems="center">
                    <VStack  >
                        <Text color="coolGray.800" _dark={{
                            color: 'warmGray.50'
                        }} bold>
                            الجمهور
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: 'warmGray.200'
                        }} fontSize={12}>٤٠ الف</Text>
                    </VStack>
                </HStack>
                <Divider bg="muted.200" mx="3" orientation='vertical' />
                <HStack m={3} justifyContent={"center"} alignItems="center">
                    <VStack  >
                        <Text color="coolGray.800" _dark={{
                            color: 'warmGray.50'
                        }} bold>
                            يومي
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: 'warmGray.200'
                        }} fontSize={12}>١٠ الاف</Text>
                    </VStack>
                </HStack>
            </HStack>

            <ScrollView  >

                {/* ------------------------------------------------------- */}
                {/* محتوى الرسالة مثل اسم */}
                {/* ---------------- */}
                <Box w={"98%"} shadow={1} alignSelf="center" >
                    <Text textAlign={"right"} m={4} fontSize={16} color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                    }} bold>
                        محتوى الرسالة
                    </Text>
                    <Divider mb={3} width="95%" alignSelf={"center"} />
                    <Box alignItems="center">
                        <FormControl isRequired w="80%" maxW="300px">
                            <FormControl.Label alignSelf={"flex-end"}>اسم الحملة</FormControl.Label>
                            <Input textAlign={"right"} placeholder="اسم الحملة" />
                            <FormControl.HelperText leftIcon={<WarningOutlineIcon size="xs" />}>
                                Try different from previous passwords.
                            </FormControl.HelperText>
                        </FormControl>
                        <Divider my={3} w={"90%"} alignSelf="center" bg={"muted.50"} thickness="0.5" />

                        <FormControl isRequired w="80%" maxW="300px">
                            <FormControl.Label alignSelf={"flex-end"}> محتوى الرسالة</FormControl.Label>
                            <TextArea placeholder="نص الرسالة "
                                h={20} textAlign="right"
                            />
                            <FormControl.HelperText leftIcon={<WarningOutlineIcon size="xs" />}>
                                Try different from previous passwords.
                            </FormControl.HelperText>
                        </FormControl>
                    </Box>
                    <Divider my={3} w={"90%"} alignSelf="center" bg={"muted.50"} thickness="0.5" />
                    <Box alignItems="center">
                        <FormControl isRequired isInvalid w="80%" maxW="300px">
                            <FormControl.Label> محتوى الرسالة</FormControl.Label>
                            <HStack m={4} justifyContent={"space-around"}>
                                <Pressable>
                                    <Box w={20} h={20} bg="muted.100" justifyContent={"center"} alignItems="center">
                                        <Icon as={EvilIcons} name="image" size="3xl" />
                                    </Box>
                                </Pressable>
                                <Pressable>
                                    <Box w={20} h={20} bg="muted.100" justifyContent={"center"} alignItems="center">
                                        <Icon as={EvilIcons} name="image" size="3xl" />
                                    </Box>
                                </Pressable>
                                <Pressable>
                                    <Box w={20} h={20} bg="muted.100" justifyContent={"center"} alignItems="center">
                                        <Icon as={EvilIcons} name="image" size="3xl" />
                                    </Box>
                                </Pressable>
                            </HStack>

                        </FormControl>
                    </Box>
                </Box>
                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />


                {/* ------------------------------------------------------- */}
                {/* cost box */}
                {/* ----------- */}
                <Box w={"95%"} shadow={1} alignSelf="center">
                    <Text textAlign={"right"} m={4} fontSize={16} color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                    }} bold>
                        مبلغ الحملة
                    </Text>
                    <Divider mb={3} width="95%" alignSelf={"center"} />
                    <HStack mb={5} justifyContent="space-around" alignItems="flex-end" flexDirection={"row-reverse"}>
                        <Icon m={2} as={AntDesign} name="creditcard" size="lg" />
                        <FormControl w="38%"  >
                            <FormControl.Label alignSelf={"flex-end"}>المبلغ</FormControl.Label>
                            <Input value='80' size={"2xl"} h="12" />
                        </FormControl>
                        <FormControl w="38%"  >
                            <FormControl.Label alignSelf={"flex-end"}> نوع الانفاق</FormControl.Label>
                            <Select size={'2xl'} h="12" selectedValue={service} _selectedItem={{
                                bg: "muted.200",
                                endIcon: <CheckIcon size="5" />
                            }} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="صروف يومي" value="daily" />
                                <Select.Item label="أقصى حد " value="max" />
                            </Select>
                        </FormControl>

                    </HStack>


                </Box>
                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />
                {/* ------------------------------------------------------- */}
                {/* period box */}
                {/* -------------- */}
                <Box w={"98%"} shadow={1} alignSelf="center" >
                    <Text textAlign={"right"} m={4} fontSize={16} color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                    }} bold>
                        الفترة
                    </Text>
                    <Divider mb={3} width="95%" alignSelf={"center"} />

                    <Stack direction="row" space={3} p="2" justifyContent="space-around">
                        <Pressable
                            onPress={() => setDate("Max")}
                        >
                            <Center
                                w="20" h="10" rounded="sm"
                                bg={date === "Max" ? "primary.700" : "muted.100"}
                                _text={{
                                    color: date === "Max" ? 'warmGray.50' : "muted.700",
                                    fontWeight: 'medium'
                                }} shadow={'3'} >
                                6 Months
                            </Center>
                        </Pressable>
                        <Pressable
                            onPress={() => setDate("Month")}
                        >
                            <Center w="20" h="10" rounded="sm"
                                bg={date === "Month" ? "primary.700" : "muted.100"}
                                _text={{
                                    color: date === "Month" ? 'warmGray.50' : 'muted.700',
                                    fontWeight: 'medium'
                                }} shadow={'3'}>
                                30 Days
                            </Center>
                        </Pressable>
                        <Pressable
                            onPress={() => setDate("Week")}
                        >
                            <Center w="20" h="10" rounded="sm"
                                bg={date === "Week" ? "primary.700" : "muted.100"}
                                _text={{
                                    color: date === "Week" ? 'warmGray.50' : 'muted.700',
                                    fontWeight: 'medium'
                                }} shadow={'3'}>
                                7 Days
                            </Center></Pressable>
                        <Pressable
                            onPress={() => setDate("Today")}
                        >
                            <Center w="20" h="10" rounded="sm"
                                bg={date === "Today" ? "primary.700" : "muted.100"}
                                _text={{
                                    color: date === "Today" ? 'warmGray.50' : 'muted.700',
                                    fontWeight: 'medium'
                                }} shadow={'3'}>
                                One Day
                            </Center>
                        </Pressable>
                    </Stack>


                </Box>
                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />

                {/* ------------------------------------------------------- */}
                {/* platform box */}
                {/* -------------- */}
                <Box w={"98%"} shadow={1} alignSelf="center" >
                    <Text textAlign={"right"} m={4} fontSize={16} color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                    }} bold>
                        منصة النشر
                    </Text>
                    <Divider mb={3} width="95%" alignSelf={"center"} />
                    <HStack flexDirection={"row-reverse"} justifyContent="space-around">
                        <Radio.Group
                            name="myRadioGroup" accessibilityLabel="favorite number"
                            value={value} onChange={nextValue => {
                                setValue(nextValue);
                            }}>
                            <Radio value="one" my={1}>
                                Whatsapp
                            </Radio>
                            <Radio value="two" my={1}>
                                Viber
                            </Radio>
                        </Radio.Group>
                        <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                            setValue(nextValue);
                        }}>
                            <Radio value="one" my={1}>
                                SMS
                            </Radio>
                            <Radio value="two" my={1}>
                                All
                            </Radio>
                        </Radio.Group>
                    </HStack>
                </Box>
                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />

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
                    <HStack space={3} justifyContent="space-between" alignItems="center" flexDirection={"row-reverse"}>
                        <HStack m={3} justifyContent={"center"} alignItems="center">
                            <VStack mx={3}>
                                <Text mr={1} color="coolGray.800" textAlign={"right"} _dark={{
                                    color: 'warmGray.50'
                                }} bold>
                                    موقع الجمهور
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: 'warmGray.200'
                                }} fontSize={12}>بابل, نجف, كربلاء, بغداد</Text>
                            </VStack>
                            <Icon m={2} as={AntDesign} name="pushpin" size="lg" />
                        </HStack>
                        <Pressable onPress={() => setModalVisible_categories(true)}>
                            <Icon m={3} as={AntDesign} name="left" size="sm" />
                        </Pressable>
                    </HStack>
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
                        <Pressable onPress={() => setModalVisible_categories(true)}>
                            <Icon m={3} as={AntDesign} name="left" size="sm" />
                        </Pressable>
                    </HStack>


                </Box>
                <Divider my="3" py={1} _light={{
                    bg: "muted.200"
                }} _dark={{
                    bg: "muted.50"
                }} />



                {/* ----------------------
<Stack direction="row" space={3} p="2" justifyContent="space-around">
            <Pressable
                onPress={() => setDate("Max")}
            >
                <Center
                    w="20" h="10" rounded="sm"
                    bg={date === "Max" ? "primary.700" : "muted.100"}
                    _text={{
                        color: date === "Max" ? 'warmGray.50' : "muted.700",
                        fontWeight: 'medium'
                    }} shadow={'3'} >
                    Max
                </Center>
            </Pressable>
            <Pressable
                onPress={() => setDate("Month")}
            >
                <Center w="20" h="10" rounded="sm"
                    bg={date === "Month" ? "primary.700" : "muted.100"}
                    _text={{
                        color: date === "Month" ? 'warmGray.50' : 'muted.700',
                        fontWeight: 'medium'
                    }} shadow={'3'}>
                    Month
                </Center>
            </Pressable>
            <Pressable
                onPress={() => setDate("Week")}
            >
                <Center w="20" h="10" rounded="sm"
                    bg={date === "Week" ? "primary.700" : "muted.100"}
                    _text={{
                        color: date === "Week" ? 'warmGray.50' : 'muted.700',
                        fontWeight: 'medium'
                    }} shadow={'3'}>
                    Week
                </Center></Pressable>
            <Pressable
                onPress={() => setDate("Today")}
            >
                <Center w="20" h="10" rounded="sm"
                    bg={date === "Today" ? "primary.700" : "muted.100"}
                    _text={{
                        color: date === "Today" ? 'warmGray.50' : 'muted.700',
                        fontWeight: 'medium'
                    }} shadow={'3'}>
                    Today
                </Center>
            </Pressable>
        </Stack> */}
                {/* ------------------------------------------------------- */}
                {/* buttons box */}
                {/* ----------- */}
                <Button m={2} alignSelf="center" w={"90%"} size={"lg"} endIcon={<Icon as={Entypo} name="publish" size="sm" />}>انــشــاء</Button>

                {/* ------------------------------------------------------- */}
                {/* modals boxes */}
                {/* ---------- */}
                {/* edit campaign's name */}
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

                {/* edit message text */}
                <Modal isOpen={modalVisible_message} onClose={() => setModalVisible_message(false)} avoidKeyboard justifyContent="center" bottom="4" size="lg">
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>تعديل محتوى</Modal.Header>
                        <Modal.Body>
                            <TextArea h={20} textAlign="right" placeholder={data.fullName} w="100%" maxW="300" />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button flex="1" size={"lg"} onPress={() => {
                                setModalVisible_message(false);
                            }}>
                                تعديل
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>

                {/* edit categories  */}
                <Modal isOpen={modalVisible_categories} onClose={() => setModalVisible_categories(false)} avoidKeyboard justifyContent="center" bottom="4" size="lg">
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>تعديل الاهتمامات</Modal.Header>
                        <Modal.Body>
                            <Center>
                                <Box maxW="300">
                                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size="5" />
                                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                        <Select.Item label="UX Research" value="ux" />
                                        <Select.Item label="Web Development" value="web" />
                                        <Select.Item label="Cross Platform Development" value="cross" />
                                        <Select.Item label="UI Designing" value="ui" />
                                        <Select.Item label="Backend Development" value="backend" />
                                    </Select>
                                </Box>
                            </Center>;                        </Modal.Body>
                        <Modal.Footer>
                            <Button flex="1" size={"lg"} onPress={() => {
                                setModalVisible_categories(false);
                            }}>
                                اضافة
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </ScrollView>
        </SafeAreaView >
    )
}

export default NewCampaign

