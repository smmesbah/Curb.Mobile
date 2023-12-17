import Level1Tree from 'components/icons/Level1Tree';
import Level2Tree from 'components/icons/Level2Tree';
import Level3Tree from 'components/icons/Level3Tree';
import React from 'react'
import { View, Text, StyleSheet, Animated, Dimensions, ScrollView } from 'react-native';

const LevelTrees = ({tree, focused}) => {

  return (
    <View style={Styles.container}>
        {tree==='level1' && <Level1Tree/>}
        {tree==='level2' && <Level2Tree/>}
        {tree==='level3' && <Level3Tree/>}
        {tree==='level1' && <Text style={[Styles.text_style,{color: focused==='level1'?'#080D09':'#9ea29f'}]}>Level 1</Text>}
        {tree==='level2' && <Text style={[Styles.text_style,{color: focused==='level2'?'#080D09':'#9ea29f'}]}>Level 2</Text>}
        {tree==='level3' && <Text style={[Styles.text_style,{color: focused==='level3'?'#080D09':'#9ea29f'}]}>Level 3</Text>}
    </View>
  )
}

export default LevelTrees

const Styles=StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_style: {
        fontFamily: 'Regular',
        fontSize: 18,
        letterSpacing: 0.5,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
    }
})