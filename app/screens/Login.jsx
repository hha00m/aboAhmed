import React from 'react'
import { Input, Icon, Image, Stack, Pressable, Button, Box, Heading, VStack, Divider, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';

const Login = () => {
    const [show, setShow] = React.useState(false);

    return (
        <>
            <Box p="2"
                w={"100%"}
                h="100%"
                // justifyContent={"center"}
                alignItems="center"
                position={"fixed"}
            >
                <Image
                    size={"xl"}
                    resizeMode="contain"
                    source={require("../assets/imgs/logo/Instagram_logo.png")
                    }
                    alt={"aljade "}
                    marginTop="160"
                // position="absolute"
                // style={{ top: 170, zIndex: 99 }}
                />


                <Stack space={4} w="100%" alignItems="center">
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
                    <Button
                        marginLeft={5}
                        size="sm" variant="link"
                        onPress={() => console.log("hello world")}
                        alignSelf={"flex-start"}
                    >
                        نسيت الكلمة؟
                    </Button>
                    <Button
                        size="lg"
                        w={{
                            base: "85%",
                            md: "25%"
                        }}
                        onPress={() => console.log("hello world")}
                    >تسجيل دخول</Button>

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
                        }}>ليس لديك حساب؟
                        </Text> سجل هنا.</Text>
                </TouchableOpacity>
            </Stack>
        </>
    )
}

export default Login

