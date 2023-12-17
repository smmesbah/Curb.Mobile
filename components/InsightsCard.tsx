import React from 'react'
import {Text, Dimensions, View, StyleSheet, TouchableOpacity} from 'react-native'
import InsightCurbLogo from './icons/InsightCurbLogo';
import ShareIcon from './icons/ShareIcon';
const [width, height] = [Dimensions.get('screen').width, Dimensions.get('screen').height];

const InsightsCard = ({Data,id}) => {

  const COLORS = ['#0D3F4A', '#00053F', '#23023B'];
  const BORDERS = ['#33AE9C', '#7844FF', '#E0DDD4']
  const backgroundColor = COLORS[(id-1) % COLORS.length];
  const borders=BORDERS[(id-1) % BORDERS.length]
  const BtnCOLOR = ['rgba(51, 174, 156, 0.10)','rgba(120, 68, 255, 0.10)','rgba(224, 221, 212, 0.10)']
  const btnBackgroundColor = BtnCOLOR[(id-1) % BtnCOLOR.length];


  return (
    <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginRight: id===Data.length? 20: 0}}>
    <View style={[Styles.container, {backgroundColor: backgroundColor}]}>
        <View style={Styles.logo_style}>
            <InsightCurbLogo/>
        </View>
        <Text style={Styles.text_style}>You have the fewest cravings on the $days that you report having $good sleep</Text>
        <TouchableOpacity style={[Styles.share_button,{borderColor: borders, backgroundColor: btnBackgroundColor}]}>
            <Text style={Styles.button_text}>Share</Text>
            <ShareIcon/>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default InsightsCard

const Styles=StyleSheet.create({
    container: {
        marginTop: 28,
        width: width*.9,
        height: height*.6,
        borderRadius: 18,
        marginBottom: 10,
        // backgroundColor: '#0D3F4A', 
        paddingRight: 18,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    }, 
    text_style: {
        color: '#fff', 
        textAlign: 'right',
        fontFamily: 'Regular',
        fontSize: 32,
        letterSpacing: 1.8
    },
    logo_style: {
        marginTop: 25,
    },
    lock_icon: {
        marginTop: width*0.23,
        marginBottom: height*0.015
    }, 
    highlight: {
        color: "#33AE9C"
    },
    share_button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 106,
        height: 33,
        paddingVertical: 2,
        paddingHorizontal: 6,
        gap: 10,
        borderRadius: 10.5,
        borderWidth: 0.5,
        // borderColor: '#33AE9C',
        // backgroundColor: 'rgba(51, 174, 156, 0.10)'
    }, 
    button_text: {
        color: '#fff',
        fontFamily: 'Regular',
        textAlign: 'center',
        fontSize: 14,
        letterSpacing: -.14
    }

})