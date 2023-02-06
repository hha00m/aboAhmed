import React from 'react'
import SearchBar from '../components/SearchBar'
import { Center, VStack, ScrollView, Divider } from 'native-base'
import CardPost from '../components/CardPost'

const Feeds = () => {
    return (
        <VStack width={"100%"}>
            <Center><SearchBar /></Center>
            <Center  >
                <ScrollView >
                    <CardPost title=" قائمة الشكاوي" />
                    <Divider />
                    <CardPost title=" قائمة الشكاوي" />
                    <Divider />
                    <CardPost title=" قائمة الشكاوي" />
                </ScrollView>
            </Center>

        </VStack>

    )
}

export default Feeds


