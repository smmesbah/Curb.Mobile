import LeftArrow from 'components/icons/LeftArrow'
import ToggleIcon from 'components/icons/ToggleIcon';
import ToggleIconOff from 'components/icons/ToggleIconOff';
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Switch, TouchableOpacity} from 'react-native'
import { router, useNavigation } from 'expo-router';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

interface OptionCardProps {
    text: string,
    toggle: boolean,
    redirect: string,
}

const OptionCard: React.FC<OptionCardProps> = ({text, toggle, redirect}) => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = React.useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch = () => setIsEnabled(!isEnabled);
  return (
    <View style={Styles.container}>
        <Text style={Styles.text_style}>{text}</Text>
        {toggle ?
            <TouchableOpacity onPress={toggleSwitch}>
                {isEnabled?<ToggleIcon/>:<ToggleIconOff/>}
            </TouchableOpacity>
            
            : 
            <TouchableOpacity onPress={()=>router.push(redirect)}>
                <LeftArrow/>
            </TouchableOpacity>}
        
    </View>
  )
}

export default OptionCard

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: width*0.90,
        height: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 15,
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#B0B0B4'
    },
    text_style: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 16,
    }, 
    toggle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        backgroundColor: '#000'
    }
})