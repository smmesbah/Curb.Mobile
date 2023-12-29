import styles from 'app/homeScreen/Home.style';
import { useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const AddWhyCardModal = ({addModalOpen, setAddModalOpen, yourData}) => {

    const [Question, setQuestion]=useState('');
    const [Answer, setAnswer]=useState('');
    const scaleValue = useRef(new Animated.Value(0)).current;

    const handleSave=()=>{
        const id=yourData.length+1;
        const data={id, Question, Answer};
        yourData.push(data);
        setAddModalOpen(false);
        console.log(yourData);
    }

    useEffect(() => {
        toggleModal();
      }, [addModalOpen]);
      const toggleModal = () => {
        if (addModalOpen) {
          setAddModalOpen(true);
          Animated.spring(scaleValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          setTimeout(() => setAddModalOpen(false), 200);
          Animated.timing(scaleValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      };

  return (
    <View
    style={Styles.modalBackground}>
    <Animated.View style={[Styles.modalContainer,]}>
    <Text style={Styles.text}>Your Question: </Text>
    <TextInput
        multiline={true}
        style={Styles.answer_input}
        onChangeText={setQuestion}
        value={Question}
        placeholder='Write your Question?'
        placeholderTextColor={'#ccc'}
        textAlignVertical='top'
    />
    <Text style={Styles.text}>Your Answer: </Text>
    <TextInput
        multiline={true}
        style={Styles.question_input}
        onChangeText={setAnswer}
        value={Answer}
        placeholder='write your answer here'
        placeholderTextColor={'#ccc'}
        textAlignVertical='top'
    />
    <View style={Styles.save_cancel}>
        <TouchableOpacity onPress={()=>{setAddModalOpen(false)}}>
            <Text style={Styles.cancel_text}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave}>
            <Text style={Styles.save_text}>Save</Text>
        </TouchableOpacity>
    </View>
    </Animated.View>
    </View>
  )
}

export default AddWhyCardModal

const Styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        // marginTop: 120,
        width: '80%',
        paddingHorizontal: 20,
        backgroundColor: '#f1f1f5',
        padding: 25,
        paddingTop: 30,
        borderRadius: 20,
        elevation: 20,
    }, 
    text: {
        fontSize: 20,
        fontWeight: '500',
        paddingBottom: 15,
    },
    answer_input: {
        fontSize: 16,
        color: '#000',
        height: 70,
        width: '100%',
        textAlignVertical: 'top',
        marginTop: 5,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 10,
        borderBlockColor: 'transparent',
        marginBottom: 20,
    },
    question_input: {
        fontSize: 16,
        color: '#000',
        height: 120,
        width: '100%',
        textAlignVertical: 'top',
        marginTop: 5,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 10,
        borderBlockColor: 'transparent', 
        marginBottom: 20,
    },
    save_cancel: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 15,
    },
    cancel_text: {
        flex: 1,
        backgroundColor: '#e0e0ea',
        color: '#82859d',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10,
    },
    save_text: {
        flex: 1,
        backgroundColor: '#4751e9',
        color: '#fff',
        paddingHorizontal: 55,
        paddingVertical: 10,
        borderRadius: 10,
    }
})