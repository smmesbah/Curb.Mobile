import React from 'react'
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

const windowWidth=Dimensions.get('screen').width;

const Pagination = ({data, scrollX, index}) => {
  return (
   <View style={styles.container}>
        {data.map((_, ind) => {
            const inputRange=[(ind-1)*windowWidth, ind*windowWidth, (ind+1)*windowWidth]
            const dotWidth=scrollX.interpolate({
                inputRange,
                outputRange: [12,30,12], 
                extrapolate: 'clamp'
            })
            const opacity=scrollX.interpolate({
                inputRange,
                outputRange: [0.7,0,0.6], 
                extrapolate: 'clamp'
            })
            const backgroundColor = scrollX.interpolate({
                inputRange,
                outputRange: ['#ccc', '#000', '#ccc'],
                extrapolate: 'clamp',
              });
            return <Animated.View key={ind} style={[styles.dot, {width: dotWidth, backgroundColor}]}/>
        })}
   </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    dot: {
        height: 10,
        width: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
        marginHorizontal: 3
    },
    dotActive: {
        backgroundColor: '#000',
    }
})