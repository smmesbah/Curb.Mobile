import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface RadioButtonRoundProps {
    data: { value: string }[];
    onSelect: (value: string) => void;
}

const RadioButtonRound: React.FC<RadioButtonRoundProps> = ({ data, onSelect }) => {
    const [userOption, setUserOption] = React.useState<string | null>(null);

    const selectHandler = (value: string) => {
        onSelect(value);
        setUserOption(value);
    };
    return (
        <View style={{ flexDirection: 'row', gap: 25, flexWrap: 'wrap',justifyContent: 'center' }}>
            {
                data.map((item) => {
                    return (
                        <View key={item.value} style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Pressable
                                style={
                                    item.value === userOption ? styles.selected : styles.unselected
                                }
                                onPress={() => selectHandler(item.value)}
                            >
                                {
                                    item.value === userOption ? <Image source={require('../../assets/select.png')} /> : null
                                }
                            </Pressable>
                            <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 18 }}>{item.value}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default RadioButtonRound

const styles = StyleSheet.create({
    unselected: {
        height: 50,
        width: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#d5d9e8'
    },
    selected: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#33AE9C',
        justifyContent: 'center',
        alignItems: 'center'
    }
})