import React, {useState} from 'react'
import {Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, Task} from 'react-native'
import { CircleOutline } from './icons/CircleOutline';
import { CheckedFilled } from './icons/checkedFilled';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

interface TaskCardProps {
    title: string,
    description: string,
    imageUri: any,
    Width: number,
    focus: string
}


const TaskCard: React.FC<TaskCardProps> = ({title, description, imageUri, Width, focus}) => {

    const [checked, setChecked] = useState(false);

    const handlePress =  () => {
        (focus==='home')?setChecked(!checked): null;
        // alert("hello")
    }

  return (
    <View style={[styles.container, {width: width*Width}]}>
        <View>
            <Image source={imageUri} resizeMode='cover' style={{height: height*0.15, width: width*.21, borderBottomLeftRadius: 12, borderTopLeftRadius: 12}}/>
            {focus==='upcoming' && <View
            style={styles.blur}
            />}
        </View>
        <View style={styles.text_info}>
            <View style={{flexDirection: 'column', flex: 2}}>
            {checked &&
            <View style={styles.task_completed}>
                 <Text style={{color: '#017F70', fontFamily: 'Regular', fontSize: 13}}>Task Completed</Text>
            </View>}
            <Text style={[styles.title,{color: focus!=='upcoming'? '#080D09': '#69726b'}]}>{title}</Text>
            <Text style={[styles.description,{color: focus!=='upcoming'? '#080D09': '#9ea29f'}]}>{description}</Text>
            </View>
            <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={handlePress} disabled={(focus==='upcoming' || focus==='previous')? true: false} >
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
        height: height*0.15,
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
        // color: '#080D09',
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
    }, 
    blur: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderBottomLeftRadius: 12, 
        borderTopLeftRadius: 12,
        backgroundColor: 'rgba(50, 50, 50, 0.7)',
    }

})