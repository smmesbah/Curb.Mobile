import { Dimensions, Pressable, StyleSheet, Text, TouchableHighlight, View, } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
interface PressablePaymentMethodCardProps {
    redirect: string,
    iconLibraryName: string,
    iconName: string,
    text: string,
}

const { width, height } = Dimensions.get('screen');

const PressablePaymentMethodCard: React.FC<PressablePaymentMethodCardProps> = ({ redirect, iconLibraryName, iconName, text }) => {
    var [isPress, setIsPress] = React.useState(false);
    var touchProps = {
        activeOpacity: 1,
        underlayColor: 'black',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => router.push(`${redirect}`),                 // <-- "onPress" is apparently required
    };
    return (
        <TouchableHighlight {...touchProps}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                }}
            >
                {iconLibraryName==='Feather' && <Feather name={iconName} size={30} color={isPress ? "white" : 'black'} />}
                {iconLibraryName==='Foundation' && <Foundation name={iconName} size={30} color={isPress ? "white" : 'black'} />}
                {iconLibraryName==='FontAwesome5Brands' && <FontAwesome5 name={iconName} size={30} color={isPress ? "white" : 'black'} brand/> }
                <Text
                    style={{
                        fontSize: 12,
                        color: isPress ? "white" : 'black',
                        fontFamily: "Regular"
                    }}
                >{text}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default PressablePaymentMethodCard

const styles = StyleSheet.create({
    btnNormal: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.2,
    },
    btnPress: {
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        width: width * 0.2,
    }
})