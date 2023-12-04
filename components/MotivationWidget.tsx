import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Image, FlatList, Animated, TouchableOpacity, Modal } from 'react-native';
import MotivationText from './ui/MotivationText';
import Pagination from './ui/Pagination';
import AddWhyCardModal from './ui/AddWhyCardModal';
// import { FlatList } from 'react-native-gesture-handler';

const windowHeight=Dimensions.get('screen').height;
const windowWidth=Dimensions.get('screen').width;



let yourData = [
    { id: 1, Question: 'What is your motivation to cut back on drinking?', Answer: 'Your want to reclaim your mornings!' },
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
    <>
    <View style={styles.why_style}>
    <Text
    style={styles.text_style}
    >Your "Why"?</Text>
    <View
        style={styles.add_edit_style}
    >
        <TouchableOpacity onPress={()=>setAddModalOpen(true)}>
        <Image
         source={require('../assets/icons/AddIcon.png')}
         height={20}
         width={20}
         style={{
            tintColor: '#000'
         }}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setEditOpen(!editOpen)}>
        <Image
         source={require('../assets/icons/EditIcon.png')}
         height={18}
         width={18}
         style={{
            tintColor: '#000'
         }}
        />
        </TouchableOpacity>
    </View>
    </View>

    <View>
        <FlatList data={yourData}
        renderItem={({item}) => (<MotivationText id={item.id} editOpen={editOpen} setEditOpen={setEditOpen} text={text[index]} onChangeText={onChangeText} yourData={yourData}/>)}
        horizontal={true}
        pagingEnabled={true}
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        />
        <Pagination data={yourData} scrollX={scrollX} index={index}/>
        
    </View>
    <Modal visible={addModalOpen} transparent>
         <AddWhyCardModal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} yourData={yourData}/>
    </Modal>
    </>
  )
}

export default MotivationWidget

const styles = StyleSheet.create({
    why_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth-40,
    },
    add_edit_style: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 9
    },
    text_style: {
        marginBottom: 15,
        flex: 2,
        height: 'auto',
        fontSize: 16,
        fontWeight: '500',
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