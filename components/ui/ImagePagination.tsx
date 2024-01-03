import React from 'react'
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

const windowWidth=Dimensions.get('screen').width;

interface PaginationProps {
    data: any;
    scrollX: any;
    index: any;
    lock: boolean;
}

const Pagination: React.FC<PaginationProps> = ({data, scrollX, lock}) => {
  return (
   <View style={styles.container}>
        {data.map((_, ind) => {
            const inputRange=[(ind-1)*windowWidth, ind*windowWidth, (ind+1)*windowWidth]
            const dotWidth=scrollX.interpolate({
                inputRange,
                outputRange: [10,10,10], 
                extrapolate: 'clamp'
            })
            const opacity=scrollX.interpolate({
                inputRange,
                outputRange: [0.7,0,0.6], 
                extrapolate: 'clamp'
            })
            const backgroundColor = !lock? scrollX.interpolate({
                inputRange,
                outputRange: ['#ccc', '#5a4fff', '#ccc'],
                extrapolate: 'clamp',
              }): 
              scrollX.interpolate({
                inputRange,
                outputRange: ['#ccc', '#bfcac9', '#ccc'],
                extrapolate: 'clamp',
              })
              ;
            return <Animated.View key={ind} style={[styles.dot, {width: dotWidth, backgroundColor: backgroundColor}]}/>
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
        marginTop: 5,
        marginBottom: 20
    },
    dot: {
        height: 10,
        width: 10,
        backgroundColor: '#0D3F4A',
        borderRadius: 5,
        marginHorizontal: 3
    },
    dotActive: {
        backgroundColor: '#0D3F4A',
    }
})