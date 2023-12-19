import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';


interface TouchableHighlightButtonProps {
    text: string,
    redirect? : {
        pathname: string,
        params?: {
            day: string,
            // week: string,
        }
    },
}

const { width, height } = Dimensions.get('screen');

const TouchableHighlightButton: React.FC<TouchableHighlightButtonProps> = ({text, redirect}) => {
    var [isPress, setIsPress] = React.useState(false);

    var touchProps = {
        activeOpacity: 1,
        underlayColor: 'black',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.btnPress : styles.btnNormal,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => router.push({
            pathname: redirect?.pathname,
            params: redirect?.params,
        })
    }
    return (
        <TouchableHighlight {...touchProps}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                    paddingVertical: 15,
                    paddingHorizontal: 30,
                }}
            >
                <Text
                    style={{
                        fontSize: 17,
                        color: isPress ? "white" : 'black',
                        fontFamily: "Regular"
                    }}
                >{text}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default TouchableHighlightButton

const styles = StyleSheet.create({
    btnNormal: {
        borderColor: '#d9d9d9',
        borderWidth: 2,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.7,
    },
    btnPress: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 30,
        width: width * 0.7,
    }
})