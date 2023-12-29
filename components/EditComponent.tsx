import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import ProfileEdit from './icons/ProfileEdit'

interface EditComponentProps {
    text: string,
    value: string,
    color: string
}

const EditComponent: React.FC<EditComponentProps> = ({text, value, color}) => {
  return (
    <View style={Styles.container}>
        <View style={[Styles.circle, {backgroundColor: color}]}/>
        <Text style={Styles.text_style1}>{text}</Text>
        <Text style={Styles.text_style2}>{value}</Text>
        <View style={{marginLeft: 2}}>
            <ProfileEdit color="#000"/>
        </View>
    </View>
  )
}

export default EditComponent

const Styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        marginLeft: 25,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 15/2,
    },
    text_style1: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 18
    },
    text_style2: {
        color: '#080D09',
        fontFamily: 'Medium',
        fontSize: 20,
        marginLeft: 6,
    }
})