import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackArrow from 'components/icons/BackArrow';
import QuestionIcon from 'components/icons/QuestionIcon';

const Width=Dimensions.get('screen').width;
const Height=Dimensions.get('screen').height;

const FeedbackAndSupport = () => {
    const [comment, setComment]=React.useState('');
  return (
    <SafeAreaView style={{backgroundColor: '#ecedea', height: '100%'}}>
        <ScrollView style={{backgroundColor: '#ecedea'}}>
            <View style={Styles.container}>
                <View style={Styles.header_container}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Tab")}>
                        <BackArrow/>
                    </TouchableOpacity>
                    <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <Text style={Styles.header_text}>Feedback</Text>
                        <Text style={Styles.header_text}>and Support</Text>
                    </View>
                </View>
                <View style={Styles.header_text_area}>
                    <Text style={Styles.header_text2}>Lorem ipsum dolor sit amet consectetur. Platea vestibulum fringilla viverra nec purus. Laoreet. <QuestionIcon/></Text>
                </View>
            </View>
            <View style={Styles.input_container}>
                <TextInput
                        style={Styles.text_input}
                        onChangeText={setComment}
                        value={comment}
                        placeholder='Write your comment here...'
                        placeholderTextColor='#080D09'
                        textAlignVertical='top'
                    />
            </View>
            <View style={Styles.submit_portion}>
                <TouchableOpacity>
                    <View style={Styles.submit_btn}>
                        <Text>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default FeedbackAndSupport

const Styles=StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItem: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingBottom: 30,
    },
    header_container:{
        paddingTop: 25,
        paddingHorizontal: 20,
        width: Width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 28
    },
    header_text_area: {
        marginTop: 50,
        padding: 25,
    },
    header_text2: {
        fontFamily: 'Regular',
        fontSize: 14,
        lineHeight: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    input_container: {
        marginTop: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_input: {   
        width: Width*0.85,
        height: Height*0.45,
        borderWidth: 1,
        borderColor: '#7844FF',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 18,
        fontFamily: 'Regular',
        fontSize: 16,
        lineHeight: 23.853
    },
    submit_portion: {
        marginTop: 50,
        backgroundColor: '#fff',
        width: '100%',
        paddingVertical: 26
    },
    submit_btn: {
        width: Width*0.85,
        height: 58,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})