import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SlideItemType } from 'component/SlideItem';

interface PaginationProps {
    data: SlideItemType[];
    scrollX: Animated.Value;
}

const { width, height } = Dimensions.get('screen');

const Pagination: React.FC<PaginationProps> = ({data, scrollX}) => {
  return (
    <View style={styles.container}>
      {
        data.map((_, idx) => {
            const inputRange = [ (idx - 1) * width, idx * width, (idx + 1) * width ];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [12, 30, 12],
                extrapolate: 'clamp',
            });
            return <Animated.View key={idx.toString()} style={[styles.dot, {width: dotWidth}]} />
        })
      }
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 5,
        backgroundColor: '#ccc',
    }
})