import React from 'react'
import { Input, Icon, Stack, Select, CheckIcon, Pressable, Button, Box, Heading, VStack, Divider, Text, Avatar } from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';

const SingUp = () => {
    const [show, setShow] = React.useState(false);
    const [service, setService] = React.useState("");

    return (
        <>
            <Box p="2"
                w={"100%"}
                h="100%"
                // justifyContent={"center"}
                alignItems="center"
                position={"fixed"}
            >
                <Avatar
                    size={"xl"}
                    source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}
                    alt={"aljade "}
                    marginTop="70"
                />


                <Stack space={4} w="100%" alignItems="center"
                    marginTop={20}>
                    <Input
                        variant="filled"
                        size="lg"

                        w={{
                            base: "85%",
                            md: "25%"
                        }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
                        placeholder="الاسم" />
                    <Input
                        variant="filled"
                        size="lg"
                        w={{
                            base: "85%",
                            md: "25%"
                        }} InputLeftElement={<Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="muted.400" />}
                        placeholder="رقم الموبايل" />
                    <Input
                        variant="filled"
                        size="lg"
                        w={{
                            base: "85%",
                            md: "25%"
                        }}
                        type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>} placeholder="كلمة المرور" />
                    <Input
                        variant="filled"
                        size="lg"
                        w={{
                            base: "85%",
                            md: "25%"
                        }}
                        type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>} placeholder="تاكيد كلمة المرور" />

                    <Select selectedValue={service}
                        accessibilityLabel="المحافظة"
                        zIndex={199}
                        borderColor={"white"}
                        bgColor={"light.100"}
                        placeholder="المحافظة"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} size="lg"
                        w={{
                            base: "85%",
                            md: "25%"
                        }}
                        onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item label="Cross Platform Development" value="cross" />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item label="Backend Development" value="backend" />
                    </Select>
                    <Select selectedValue={service}
                        accessibilityLabel="المنطقة"
                        borderColor={"white"}
                        bgColor={"light.100"}
                        placeholder="المنطقة"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} size="lg"
                        w={{
                            base: "85%",
                            md: "25%"
                        }}
                        onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item label="Cross Platform Development" value="cross" />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item label="Backend Development" value="backend" />
                    </Select>
                    <Button
                        size="lg"
                        // isDisabled
                        w={{
                            base: "85%",
                            md: "25%"
                        }}
                        onPress={() => console.log("hello world")}
                    >تسجيل </Button>

                </Stack>

            </Box>
            <Stack space={4} w="100%"
                style={{
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopColor: '#ddd',
                    borderTopWidth: 1,
                    bottom: 20,
                    position: "absolute",
                    zIndex: 99,
                }}>
                <TouchableOpacity
                    onPress={() => console.log("signup clicked")}
                    activeOpacity={1}
                // style={styles.registerWrapper}
                >
                    <Text
                        color={"primary.500"}
                        style={{
                            textAlign: 'center',
                            fontSize: 12,
                            fontWeight: '600'

                        }}>
                        <Text style={{
                            fontWeight: '500',
                            color: '#333'
                        }}> لديك حساب؟
                        </Text> سجل دخول هنا.</Text>
                </TouchableOpacity>
            </Stack>
        </>
    )
}

export default SingUp

