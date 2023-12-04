import React, {useState} from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const TaskCard = ({title, description, imageUri}) => {

    const [checked, setChecked] = useState(false);

    const handlePress =  () => {
        setChecked(!checked);
    }

  return (
    <View style={styles.container}>
        <Image source={imageUri} height={20} width={20} resizeMode='contain'/>
        <View style={styles.text_info}>
            <View style={{flexDirection: 'column', flex: 2}}>
            <Text style={styles.title}>{title}</Text>
            {checked
            ? <Text style={{color: 'green'}}>Task Completed</Text>
            : <Text style={styles.description}>{description}</Text>}
            </View>
            <TouchableOpacity onPress={handlePress}>
                {checked? <Text style={{color: 'green'}}>Checked</Text> : <Text>check</Text>}
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default TaskCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        marginTop: 15,
        marginHorizontal: 20,
        padding: 25,
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
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    }, 
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: 'gray',
    }

})