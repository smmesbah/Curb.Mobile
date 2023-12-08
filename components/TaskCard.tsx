import React, {useState} from 'react'
import {Text, View, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { CircleOutline } from './icons/CircleOutline';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CheckedFilled } from './icons/checkedFilled';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

const TaskCard = ({title, description, imageUri, Width}) => {

    const [checked, setChecked] = useState(false);

    const handlePress =  () => {
        setChecked(!checked);
        // alert("hello")
    }

  return (
    <View style={[styles.container, {width: width*Width}]}>
        <Image source={imageUri} resizeMode='cover' style={{height: height*0.13, width: width*.21, borderBottomLeftRadius: 12, borderTopLeftRadius: 12}}/>
        <View style={styles.text_info}>
            <View style={{flexDirection: 'column', flex: 2}}>
            {checked &&
            <View style={styles.task_completed}>
                 <Text style={{color: '#017F70', fontFamily: 'Regular', fontSize: 13}}>Task Completed</Text>
            </View>}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            </View>
            <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={handlePress}>
                {checked? <CheckedFilled/> : <CircleOutline/>}
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default TaskCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        height: height*0.13,
        // marginHorizontal: 20,
        // paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    text_info: {
        flex: 2,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 19,
        color: '#080D09',
        fontFamily: 'Regular',
        // letterSpacing: -0.16,
        fontStyle: 'normal',
        fontWeight: '400',
        marginBottom: 8,
    }, 
    description: {
        fontSize: 13,
        fontFamily: 'Regular',
        color: '#080D09',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: '400',
        letterSpacing: .6,
    }, 
    task_completed: {
        width: width*.30,
        backgroundColor: '#ebf5f4',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: (width*.36)/2,
    }

})