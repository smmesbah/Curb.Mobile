import BackArrow from 'components/icons/BackArrow'
import { router } from 'expo-router';
import React from 'react'
import { Text, View, Pressable, ScrollView, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider'

const Width=Dimensions.get('screen').width;
const Height=Dimensions.get('screen').height;

const WellbeingRecords = () => {
    const [value, setValue] = React.useState(0);
  return (
    <SafeAreaView>
        <View style={Styles.header_container}>
            <Pressable onPress={()=>router.back()}>
                <BackArrow/>
            </Pressable>
            <Text style={Styles.header_text}>Record All</Text>
        </View>
        <ScrollView style={Styles.container}>
            <View style={Styles.container2}>
                <Text style={Styles.text_style}>How would you describe your <Text style={{color: '#33ae9c'}}>mood</Text> today?</Text>
                <View style={Styles.container3}>
                    <Text style={Styles.text_style2}>Select your mood</Text>
                    <Text style={[Styles.text_style3, {color: '#e64528'}]}>Low</Text>
                </View>
                
            </View>
            <Slider
                minimumValue={0}
                maximumValue={4}
                step={1}
                minimumTrackStyle={{
                    backgroundColor: '#e64528',
                    height: 12.5,
                    borderRadius: 10,
                    // width: Width*0.9
                }}
                maximumTrackStyle={{
                    backgroundColor: '#e4e5e3',
                    height: 12.5,
                    borderRadius: 10,
                    // width: Width*0.9
                }}
                thumbStyle={{
                    backgroundColor: '#e64528',
                    height: 24,
                    width: 24,
                    borderWidth: 2,
                    borderColor: '#fff',
                    borderRadius: 24,
                }}
                trackMarks={[0,1,2,3,4]}
                renderTrackMarkComponent={(index) => (
                    <View style={[Styles.dot, {backgroundColor: index<=value?"#e64528": '#f7f8f6', borderColor: index<=value?"#fff": '#b0b0b4'}]}/>
                )}
                onValueChange={(value)=>setValue(value[0])}
            />
        </ScrollView>
    </SafeAreaView>
  )
}

export default WellbeingRecords

const Styles=StyleSheet.create({
    container: {
        backgroundColor: '#f5f6f4'
    },
    header_container:{
        paddingTop: 15,
        paddingHorizontal: 20,
        width: Width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10
    },
    header_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 28,
        textAlign: 'right',

    },
    container2: {
        paddingTop: 20
    },
    text_style: {
        color: '#080D09',
        fontSize: 16,
        fontFamily: 'Regular',
        marginLeft: Width * 0.05,
        marginRight: Width * 0.05,
    },
    container3: {
        paddingTop: 25,
        marginHorizontal: Width * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text_style2: {
        color: '#4e4f4e',
        fontSize: 14,
        fontFamily: 'Regular',
    },
    text_style3: {
        fontFamily: 'Regular',
        fontSize: 16,
    },
    dot: {
        height: 24,
        width: 24,
        borderRadius: 24,
        // backgroundColor: '#f7f8f6',
        borderWidth: 2,
        // borderColor: '#b0b0b4',
    }
})