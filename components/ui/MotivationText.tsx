import React, { useEffect } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { EditIcon } from 'components/icons/EditIcon';
import { SubmitIcon } from 'components/icons/SubmitIcon';
import CancelIcon from 'components/icons/CancelIcon';
import { YourWhyAnswers } from 'components/MotivationWidget';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

interface MotivationTextProps {
    Data: any,
    id: number,
    answers: YourWhyAnswers[],
    onChangeText: any
}

const MotivationText: React.FC<MotivationTextProps> = ({ Data, id, answers, onChangeText }) => {
    // const [text, EditText] = React.useState('');
    const [editOpen, setEditOpen] = React.useState(false);
    const [answer, setAnswer] = React.useState<string>('');

    useEffect(() => {
        filterAnswers();
    }, [])

    // filter answers
    const filterAnswers = () => {
        const ans = answers.filter((item: YourWhyAnswers) => item.strapiId == id);
        if (ans[0]) {
            // console.log(ans[0]);
            setAnswer(ans[0].answer)
        } else {
            // console.log("Not answered")
            setAnswer('')
        }
    }
    const handleSubmit = async () => {
        try {
            const token=await AsyncStorage.getItem('token');
            setEditOpen(!editOpen);
            const res = await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/home/answer-why`, {
                token: token,
                strapiId: id,
                answer: answer,
            })
            if (res.data.success) {
                console.log(res.data.message);
                console.log(res.data.data);
            } else {
                console.log(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }


    const handleCancelPress = () => {
        setEditOpen(!editOpen);
        setAnswer('');

    }

    // const answer = Data.filter((item: any) => item.id === id)[0].Answer;
    const question = Data.filter((item: any) => item.id === id)[0].attributes.Question;
    // console.log('answer', answer);

    return (
        <LinearGradient
            colors={['#0D3F4A', '#0D3F4A', '#377C8B']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            // locations={[0.5, 0.2, 0.0]}
            style={[styles.input_portion, { marginLeft: id === 1 ? windowWidth * 0.09 : 0, marginRight: id === Data.length ? windowWidth * 0.09 : 0 }]}
        >
            <Text style={styles.text_motivation}>
                {question}
            </Text>

            {/* {
                !editOpen && answer !== '' ?
                    <Text style={styles.text_input}>{answer}</Text>
                    : */}
            <TextInput
                onFocus={() => setEditOpen(true)}   //focus received
                // onBlur={() => setEditOpen(false)}
                multiline={true}
                style={[styles.text_input, { color: '#ccc' }]}
                onChangeText={(value) => setAnswer(value)}
                value={answer}
                placeholder='write your answer here'
                placeholderTextColor={'#5f6f7b'}
                textAlignVertical='top'
            />
            {/* } */}
            <View style={styles.edit_swipe_style}>
                <Text style={styles.swipe}>* Swipe left for more prompts</Text>
                {
                    editOpen ?
                        <View style={{ flexDirection: 'row', gap: 7 }}>
                            {answer !== '' && <TouchableOpacity onPress={() => handleCancelPress()}><CancelIcon /></TouchableOpacity>}
                            <TouchableOpacity onPress={() => handleSubmit()}><SubmitIcon /></TouchableOpacity>
                        </View>
                        :
                        <TouchableOpacity onPress={() => setEditOpen(!editOpen)}><EditIcon /></TouchableOpacity>
                }
            </View>
        </LinearGradient>
    )
}

export default MotivationText

const styles = StyleSheet.create({
    text_motivation: {
        fontSize: 12,
        fontFamily: 'Regular',
        letterSpacing: 0.12,
        // lineHeight: 26.25,
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
        height: windowHeight * 0.07,
        width: '100%',
        textAlignVertical: 'top',
        marginTop: 5,

    },
    input_portion: {
        width: windowWidth * .84,
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
    edit_swipe_style: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',,
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
        textAlign: 'left',
    }
})