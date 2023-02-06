import { Box, Icon, Heading, Fab, HStack, Text, Center, Stack, Pressable } from "native-base";
import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Campaign from "../components/Campaign";
import HiddenCampaign from "../components/HiddenCampaign";

const Campaigns = ({ title, data }) => {

    const data2 = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abfb28ba',
            fullName: 'احمد الغانمي',
            status: { name: 'نشط', color: "success.400", icon: "" },
            reach: 743,
            spent: "11$",
            cost: "100$",
            timeToFinish: '11 2 2023',
            timeStamp: '12:47 PM',
            img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91dfaa97f63',
            fullName: 'Sujita Mathur',
            timeStamp: '11:11 PM',
            status: { name: 'نشط', color: "success.400", icon: "" },
            reach: 743,
            spent: "11$",
            cost: "100$",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
        }, {
            id: '58694a0f-3da1-471f-bdd96-145571e29d72',
            fullName: 'Anci Barroco',
            timeStamp: '6:22 PM',
            status: { name: 'نشط', color: "success.400", icon: "" },
            reach: 743,
            spent: "11$",
            cost: "100$",
            img: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
        }, {
            id: '68694a0f-3da1-43s1f-bd56-142371e29d72',
            fullName: 'Aniket Kumar',
            timeStamp: '8:56 PM',
            status: { name: 'نشط', color: "success.400", icon: "" },
            reach: 743,
            spent: "11$",
            cost: "100$",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
        }, {
            id: '28694a0f-3da1-471f-bd96-142456e29d72',
            fullName: 'Kiara',
            timeStamp: '12:47 PM',
            status: { name: 'نشط', color: "success.400", icon: "" },
            reach: 743,
            spent: "11$",
            cost: "100$",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
        }
    ];

    const [listData, setListData] = useState(data2);
    const [date, setDate] = useState("Today");

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };



    return <Box safeArea p={1} width={"100%"} height="100%"
    >
        <Fab top={10} renderInPortal={false} bg="success.600" shadow={2} placement="top-left" size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="4" />} />


        <Heading mx="4" textAlign={"right"} fontSize="lg" pb="3"  >
            الــحــمـــلات
        </Heading>


        <HStack justifyContent="flex-end" mb={2}>
            {[{ name: "نشط", color: "success.400", total: "2", id: "4343dff" },
            { name: "قيد المراجعة", color: "blue.500", total: "3", id: "4343fdff" },
            { name: "مكتمل", color: "amber.500", total: "10", id: "4343dffd" }].map((item, i) => <HStack key={item.id} mr={8} alignItems={"center"}>
                <Text mr="1"  >
                    {item.total + " " + item.name}
                </Text>
                <Icon color={item.color} as={<FontAwesome5 name="dot-circle" />} />
            </HStack>)
            }

        </HStack>

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
        </Stack>

        <Stack direction="row" space={3} p="2" justifyContent="space-around">
            <Center w="40%" h="10" bg="primary.500" rounded="sm" _text={{
                color: 'muted.700',
                fontWeight: 'medium'
            }} shadow={'3'} >
                الرصيد: 40 الف
            </Center>
            <Center w="40%" h="10" bg="primary.500" rounded="sm" _text={{
                color: 'muted.700',
                fontWeight: 'medium'
            }} shadow={'3'}>
                مصروف: 10 الف
            </Center>

        </Stack>

        <Box flex="1">
            <SwipeListView data={listData} renderItem={Campaign} renderHiddenItem={HiddenCampaign}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-50}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen} />
        </Box>;

    </Box >
}

export default Campaigns

