import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CustomSelectProps {
    text: string,
    selected: boolean,
    onPress: () => void,
}

const CustomSelect: React.FC<CustomSelectProps> = ({text, selected, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.item, selected && styles.selectedItem]}>
                <Text style={{fontSize: 18, fontWeight: '500', color: '#5b5a71'}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomSelect

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderWidth: 2,
        borderColor: '#d8d7d3',
        borderRadius: 20,
        marginRight: 2,
    },
    selectedItem: {
        backgroundColor: 'white',
    },
})