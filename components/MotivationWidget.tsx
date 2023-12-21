import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Image, FlatList, Animated, TouchableOpacity, Modal } from 'react-native';
import MotivationText from './ui/MotivationText';
import Pagination from './ui/Pagination';
import AddWhyCardModal from './ui/AddWhyCardModal';
import { AddIcon } from './icons/AddIcon';
import { EditIcon } from './icons/EditIcon';
// import { FlatList } from 'react-native-gesture-handler';

const windowHeight=Dimensions.get('screen').height;
const windowWidth=Dimensions.get('screen').width;



let yourData = [
    { id: 1, Question: 'What is your motivation to cut back on drinking?', Answer: '' },
    { id: 2, Question: 'What is your motivation to cut back on drinking?', Answer: '' },
    { id: 3, Question: 'What is your motivation to cut back on drinking?', Answer: '' },
  ];


const MotivationWidget = () => {
    
    const [text, onChangeText] = React.useState(yourData.map(() => ''));
    const [index, setIndex]=React.useState(0);
    const [editOpen, setEditOpen]=React.useState(false);
    const [addModalOpen, setAddModalOpen]=React.useState(false);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
      console.log('yourData has changed:', yourData);
    }, [yourData]);

    const handleOnScroll = (event) => {
        Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
            },
          )(event);
    }

    const handleOnViewableItemsChanged = React.useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = React.useRef({
        itemVisiblePercentThreshold: 50,
      }).current;
    
  return (
    <View style={styles.container}>
    <View style={styles.why_style}>
    <Text
    style={styles.text_style}
    >Your "Why"?</Text>
    <View
        style={styles.add_edit_style}
    >
    </View>
    </View>

    <View>
        <FlatList data={yourData}
        renderItem={({item}) => (<MotivationText Data={yourData} id={item.id} text={text[index]} onChangeText={onChangeText}/>)}
        horizontal={true}
        pagingEnabled={true}
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        ItemSeparatorComponent={() => <View style={{width: 15}}/>}
        />
        {/* <Pagination data={yourData} scrollX={scrollX} index={index}/> */}
        
    </View>
    <Modal visible={addModalOpen} transparent>
         <AddWhyCardModal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} yourData={yourData}/>
    </Modal>
    </View>
  )
}

export default MotivationWidget

const styles = StyleSheet.create({
    container: {
      // justifyContent: 'center',
      // alignItems: 'center',
      
      marginTop: 15,
    },
    why_style: {
        paddingLeft: windowWidth*.090,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: windowWidth*.03,
        // paddingHorizontal: windowWidth*.05,
        // width: windowWidth,
    },
    add_edit_style: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 21,
    },
    text_style: {
        height: 'auto',
        fontSize: 17,
        fontFamily: 'Medium',
        color: '#080D09',
        letterSpacing: 0.8,
    },
    text_motivation: {
        fontSize: 16,
        lineHeight: 26.25,
        color: '#9fa0ac',
        height: 'auto',
        width: '100%',
        marginBottom: 10,
        paddingTop: 10
    },
    text_input: {
        fontSize: 20,
        fontFamily: 'Medium',
        color: '#ffffff',
        height: windowHeight*0.12,
        width: '100%',
        textAlignVertical: 'top',
        marginTop: 12,

    },
    input_portion: {
        width: windowWidth-60,
        height: 'auto',
        backgroundColor: '#7844ff',
        borderRadius: 15,
        paddingTop: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    
    }
})


// id={item.id} text={text[index]} onChangeText={onChangeText} yourData={yourData}