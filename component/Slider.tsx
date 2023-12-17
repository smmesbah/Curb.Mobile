import { Animated, FlatList, StyleSheet, Text, View, ViewToken } from 'react-native'
import React, { useRef } from 'react'
import Slides from '../data/onbordingSlider';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const Slider = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const handleOnScroll = (event:any) => {
        Animated.event([{
            nativeEvent: {
                contentOffset: {
                    x: scrollX

                },
            },
        }],
            {
                useNativeDriver: false,
            },
        )(event);
    };

    const handleOnViewableItemsChange = useRef(({viewableItems}: { viewableItems: ViewToken[] }) => {
        console.log('Currently Viewed Item:', viewableItems.map((item) => item.index));
    }).current;

    return (
        <View>
            <FlatList
                data={Slides}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChange}
            />
            <Pagination data={Slides} scrollX={scrollX}/>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({})