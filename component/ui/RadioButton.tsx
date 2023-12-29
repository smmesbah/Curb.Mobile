import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


interface RadioButtonProps {
    data: { value: string }[];
    onSelect: (value: string) => void;
}

const { width, height } = Dimensions.get('screen');

const RadioButton: React.FC<RadioButtonProps> = ({ data, onSelect }) => {
    const [userOption, setUserOption] = React.useState<string | null>(null);
    const selectHandler = (value: string) => {
        onSelect(value);
        setUserOption(value);
    };
    return (
        <View style={{ flexDirection: 'row', gap: 20, }}>
            {
                data.map((item) => {
                    return (
                        <Pressable
                            key={item.value}
                            style={
                                item.value === userOption ? styles.selected : styles.unselected
                            }
                            onPress={() => selectHandler(item.value)}
                        >
                            <Text style={[
                                { textAlign: 'center',fontFamily: "Regular"},
                                item.value === userOption ? { color: '#fff' } : { color: '#000' }
                            ]}>
                                {item.value}
                            </Text>
                        </Pressable>
                    )
                })
            }
        </View >
    )
}

export default RadioButton

const styles = StyleSheet.create({
    unselected: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#7844ff',
        borderRadius: 25,
        width: width * 0.25,
        height: height * 0.13,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected: {
        backgroundColor: '#7844ff',
        borderWidth: 2,
        borderColor: '#7844ff',
        borderRadius: 25,
        width: width * 0.25,
        height: height * 0.13,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})