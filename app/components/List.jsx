// List.js
import React from "react";
import { FormControl, Radio, WarningOutlineIcon, Fab, Stack, Select, Box, Center, Button, Divider, CheckIcon, HStack, Icon, TextArea, Image, Input, Modal, ScrollView, Switch, Text, useDisclose, VStack } from 'native-base'
import { EvilIcons, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';

import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{details}</Text>
    </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
    const renderItem = ({ item }) => <VStack>
        <HStack space={3} justifyContent="space-between" alignItems="center" flexDirection={"row-reverse"}>
            <HStack m={3} justifyContent={"center"} alignItems="center">
                <VStack mx={3}>
                    <Text mr={1} color="coolGray.800" textAlign={"right"} _dark={{
                        color: 'warmGray.50'
                    }} bold>
                        {item.name}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                        color: 'warmGray.200'
                    }} fontSize={12}>{item.details} </Text>
                </VStack>
            </HStack>
            <Icon m={3} as={AntDesign} name="check" size="sm" />
        </HStack >
        <Divider />
    </VStack>


    //     // when no input, show all
    //     if (searchPhrase === "") {
    //         return <Item name={item.name} details={item.details} />;
    //     }
    //     // filter of the name
    //     if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //         return <Item name={item.name} details={item.details} />;
    //     }
    //     // filter of the description
    //     if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //         return <Item name={item.name} details={item.details} />;
    //     }
    // };

    return (
        <SafeAreaView style={styles.list__container}>
            <View
                onStartShouldSetResponder={() => {
                    setClicked(false);
                }}
            >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    list__container: {
        margin: 10,
        height: "85%",
        width: "100%",
    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
});