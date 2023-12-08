import React from 'react'
import {Text, StyleSheet, View, TextInput, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { EditIcon } from 'components/icons/EditIcon';
import { SubmitIcon } from 'components/icons/SubmitIcon';

const windowHeight=Dimensions.get('screen').height;
const windowWidth=Dimensions.get('screen').width;

const MotivationText = ({Data, id, itemtext, onChangeText}) => {
    const [text, EditText]=React.useState('');
    const [editOpen, setEditOpen]=React.useState(false);

    const handleOnChangeText = (text) => {
        onChangeText(text)
        EditText(text);
    }

    const handleSubmit=()=>{
        if(editOpen){
            setEditOpen(false);
            Data.map((item) => {
                if(item.id===id){
                    item.Answer=text;
                }
            })
            console.log(Data);
        }
    }

    const answer = Data.filter(item => item.id===id)[0].Answer;
    const question = Data.filter(item => item.id===id)[0].Question;
    console.log('answer', answer);

  return (
    // <TouchableWithoutFeedback onPress={handleTouchOutside}> '#0D3F4A'
    <LinearGradient
    colors={['#0D3F4A','#0D3F4A', '#377C8B']}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }}
    // locations={[0.5, 0.2, 0.0]}
    style={[styles.input_portion, {marginLeft: id===1? windowWidth*0.09: 0, marginRight: id===Data.length? windowWidth*0.09: 0}]}
    >
    {/* <View 
    style={styles.input_portion}
    > */}
        <Text
            style={styles.text_motivation}
        >
            {question}
        </Text>

        {!editOpen && answer!==''? 
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
      <View style={styles.edit_swipe_style}>
      <Text style={styles.swipe}>* Swipe left to see more goals</Text>
      {editOpen || answer===''?
      <TouchableOpacity onPress={()=>handleSubmit()}><SubmitIcon/></TouchableOpacity>
      : <TouchableOpacity onPress={()=>setEditOpen(!editOpen)}><EditIcon/></TouchableOpacity>}
      </View>
    {/* </View> */}
    </LinearGradient>
  )
}

export default MotivationText

const styles = StyleSheet.create({
    text_motivation: {
        fontSize: 12,
        fontFamily: 'Regular',
        letterSpacing: 0.12,
        lineHeight: 26.25,
        color: '#fff',
        height: 'auto',
        width: '100%',
        marginBottom: 5,
        // paddingTop: 10
    },
    text_input: {
        fontSize: 20,
        fontFamily: 'Medium',
        letterSpacing: 1,
        lineHeight: 25,
        color: '#fff',
        height: windowHeight*0.07,
        width: '100%',
        textAlignVertical: 'top',
        marginTop: 5,

    },
    input_portion: {
        width: windowWidth*.84,
        height: 'auto',
        backgroundColor: '#7844ff',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // padding: windowWidth*.055,
        // marginHorizontal: 10
    
    },
    edit_swipe_style:{
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        paddingRight: 14,
        marginBottom: 9
    },
    swipe: {
        fontSize: 10,
        fontFamily: 'Regular',
        fontStyle: 'normal',
        color: '#fff',
        opacity: 0.5,
        letterSpacing: 1,
        height: 'auto',
        width: '100%',
        textAlign: 'left',
    }
})