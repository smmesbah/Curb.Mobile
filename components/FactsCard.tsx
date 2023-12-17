import React from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'

const [height, width]=[Dimensions.get('screen').height, Dimensions.get('screen').width];

const FactsCard = ({id,description}) => {

    const BORDERS = ['#0D3F4A', '#7844FF', '#33AE9C']
    const borders=BORDERS[(id-1) % BORDERS.length]
  return (
    <View style={[Styles.container, {borderColor: borders}]}>
      <Text style={Styles.facts_text}>{description}</Text>
    </View>
  )
}

export default FactsCard

const Styles=StyleSheet.create({
    container: {
        borderRadius: 12,
        borderWidth: 0.5,
        width: width*0.9,
        backgroundColor: '#fff',
        marginBottom: 23,
        elevation: 5
    }, 
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    facts_text: {
        color: '#080D09',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 17,
        lineHeight: 28,
        letterSpacing: .5,
        paddingHorizontal: width*0.05,
        paddingVertical: 38
    }
})