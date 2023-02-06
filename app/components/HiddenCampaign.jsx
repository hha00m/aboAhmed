import { Icon, HStack, VStack, Text, Pressable } from "native-base";
import React from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const HiddenCampaign = ({ data, rowMap }) => {
    return (
        <HStack mt={3} h="16" m={2}>
            <Pressable w="70" ml="auto" cursor="pointer"
                bg="coolGray.200" justifyContent="center"
                onPress={() => closeRow(rowMap, data.item.key)} _pressed={{
                    opacity: 0.5
                }}>
                <VStack alignItems="center" space={2}>
                    <Icon as={<Entypo name="dots-three-horizontal" />} size="xs" color="coolGray.800" />
                    <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
                        مزيد
                    </Text>
                </VStack>
            </Pressable>
            <Pressable w="70" cursor="pointer" bg="red.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
                opacity: 0.5
            }}>
                <VStack alignItems="center" space={2}>
                    <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
                    <Text color="white" fontSize="xs" fontWeight="medium">
                        حذف
                    </Text>
                </VStack>
            </Pressable>
        </HStack>
    )
}

export default HiddenCampaign

