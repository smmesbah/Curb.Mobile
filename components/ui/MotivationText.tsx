import React from 'react'
import {Text, StyleSheet, View, TextInput, Dimensions, TouchableWithoutFeedback, Keyboard} from 'react-native'

const windowHeight=Dimensions.get('screen').height;
const windowWidth=Dimensions.get('screen').width;

const MotivationText = ({editOpen, id, itemtext, onChangeText, yourData, setEditOpen}) => {

    const handleOnChangeText = (text) => {
        onChangeText(text)
        yourData.map((item) => {
            if(item.id===id){
                item.Answer=text;
                onChangeText(text)
            }
        })
        console.log(yourData);
    }

    const handleTouchOutside=()=>{
        if(editOpen){
            setEditOpen(false);
        }
    }

    const answer = yourData.filter(item => item.id===id)[0].Answer;
    const question = yourData.filter(item => item.id===id)[0].Question;
    console.log('answer', answer);

  return (
    // <TouchableWithoutFeedback onPress={handleTouchOutside}>
    <View 
    style={styles.input_portion}
    >
        <Text
            style={styles.text_motivation}
        >
            {question}
        </Text>

        {!editOpen? 
        <Text style={styles.text_input}>{answer}</Text> 
        :
        <TextInput
        onFocus={() => setEditOpen(true) }   //focus received
        onBlur={() => setEditOpen(false) }
        multiline={true}
        style={[styles.text_input,{color: '#ccc'}]}
        onChangeText={text=>{handleOnChangeText(text)}}
        value={itemtext}
        placeholder='Write your Answer?'
        placeholderTextColor={'#ccc'}
        textAlignVertical='top'
      />}
    </View>
    // </TouchableWithoutFeedback>
  )
}

export default MotivationText

const styles = StyleSheet.create({
    text_motivation: {
        fontSize: 16,
        lineHeight: 26.25,
        color: '#fff',
        height: 'auto',
        width: '100%',
        marginBottom: 10,
        paddingTop: 10
    },
    text_input: {
        fontSize: 20,
        color: '#fff',
        height: windowHeight*0.12,
        width: '100%',
        textAlignVertical: 'top',
        marginTop: 12,

    },
    input_portion: {
        width: windowWidth-60,
        height: 'auto',
        backgroundColor: '#7844ff',
        borderRadius: 15,
        paddingTop: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        marginHorizontal: 10
    
    }
})