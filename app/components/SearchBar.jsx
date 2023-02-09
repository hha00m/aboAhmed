import React from 'react'
import { Box, Divider, Heading, HStack, Icon, Input, Pressable, VStack } from 'native-base'
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
    return <HStack my="4" space={5} w="100%"
    >
        <Pressable onPress={() => console.log("I'm Pressed")}
            overflow="hidden"
            shadow="3" p="1">
            <Box
                alignSelf={"center"}
                textAlign="center"
            ><Icon ml="2" size="xl" color="black"
                as={<Ionicons name="ios-filter-outline"
                />}
                />
            </Box>
        </Pressable>
        <VStack w="80%"
            alignSelf="center"
        >
            <Input placeholder="بحث..." variant="filled" width="100%"
                borderRadius="10"
                py="3"
                px="3"
                InputLeftElement={
                    <Icon ml="2" size="4" color="gray.400"
                        as={<Ionicons name="ios-search"
                        />}
                    />}
            />
        </VStack>
    </HStack>

}

export default SearchBar

