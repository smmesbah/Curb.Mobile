import { Image, StyleSheet, Text, View, ImageSourcePropType, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');

export interface SlideItemType {
    title: string,
    description: string,
    image: ImageSourcePropType,
}

interface SlideItemProps {
    item: SlideItemType;
}

const SlideItem: React.FC<SlideItemProps> = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.curb}>
                <Text style={[styles.curbText]}>curb</Text>
                <View style={styles.dot}></View>
            </View>
            <Text style={{fontSize: 42, color: 'white',lineHeight:40, position: 'absolute', bottom: 0, marginLeft: width*0.08, marginRight: width*0.08, marginBottom: height*0.07 }}>{item.title}</Text>
        </View>
    )
}

export default SlideItem

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.7,
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 15,
        marginTop: 20,
        overflow: "hidden",
    },
    image: {
        resizeMode: 'cover',
        width: "100%",
        height: "100%",
        borderRadius: 30,
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    curb: {
        position: 'absolute',
        top: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        backgroundColor: '#000',
        width: 15,
        height: 15,
        borderRadius: 50,
        marginLeft: 10,
        color: '#fff',
    },
    curbText: {
        // color: 'black',
        fontSize: 42,
        // fontWeight: 'bold',
        letterSpacing: 5,
    },
    text1: {
        color: 'white',
        fontSize: 42,
        lineHeight: 40,
    },
    text2: {
        color: 'white',
    },
    flex: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'column',
        gap: 20,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 25,
        marginHorizontal: 30,
        marginVertical: 15,
        padding: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
    },
    alreadyHaveAnAccount: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
})