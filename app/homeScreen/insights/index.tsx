import React from 'react'
import {Text, SafeAreaView, ScrollView, View, StyleSheet, Dimensions, TouchableOpacity, FlatList, Animated} from 'react-native'
import InsightsCardLock from 'components/InsightsCardLock';
import InsightsCard from 'components/InsightsCard';
import Pagination from 'components/ui/Pagination';
import FactsCard from 'components/FactsCard';

const windowHeight=Dimensions.get('screen').height;
const windowWidth=Dimensions.get('screen').width;

const Data=[
    {id: 1, description: 'You have the fewest cravings on the $days that you report having $good sleep'},
    {id: 2, description: 'You have the fewest cravings on the $days that you report having $good sleep'},
    {id: 3, description: 'You have the fewest cravings on the $days that you report having $good sleep'},
]

const FactData=[
    {id: 1, description: 'Curb helps you recognize patterns of behaviour that inform your mood and habits'},
    {id: 2, description: 'Curb helps you recognize patterns of behaviour that inform your mood and habits'},
    {id: 3, description: 'Curb helps you recognize patterns of behaviour that inform your mood and habits'},
]

const Insights = () => {
    const [lock, setLock]=React.useState(false);
    const [index, setIndex]=React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const handleOnScroll = (event: any) => {
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

  return (
    <SafeAreaView
        style={{
            // height: windowHeight * 0.9,
            width: windowWidth,
        }}
    >
      <View style={Styles.container}>
        <Text style={Styles.title}>Insights</Text>
      </View>
      <ScrollView style={{}}>
        <View style={{backgroundColor: '#ecedea'}}>
              <View style={Styles.header_container}>
                  {/* <Text style={Styles.title}>Insights</Text> */}
                  <Text style={Styles.description}>
                    Curb helps you recognise patterns of behaviour that inform your mood and habits
                  </Text>
              </View>

              <View>
                  {lock?
                      <View> 
                          <InsightsCardLock/>
                          <Pagination data={Data} scrollX={scrollX} index={index} lock={lock}/>
                      </View>
                      : 
                      <View>
                          <FlatList data={Data}
                          renderItem={({item}) => (<InsightsCard Data={Data} id={item.id}/>)}
                          horizontal={true}
                          pagingEnabled={true}
                          snapToAlignment='center'
                          showsHorizontalScrollIndicator={false}
                          onScroll={handleOnScroll}
                          ItemSeparatorComponent={() => <View style={{width: 20}}/>}
                          />
                          <Pagination data={Data} scrollX={scrollX} index={index} lock={lock}/>
                      
                      </View>
                  
                  }
              </View>
          </View>
          {!lock &&
              <View style={{backgroundColor: '#F4F3F1'}}>
                  <Text style={Styles.facts_text}>Facts</Text>
                  <View style={Styles.facts_container}>
                      {FactData.map((item, index)=>(
                          <FactsCard key={index} id={item.id} description={item.description}/>
                      )
                      )}
                  </View>
              </View>
          }
          <View style={{height: windowHeight*0.19}}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Insights

const Styles = StyleSheet.create({
    header_container:{
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingBottom: 20,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18
    }, 
    container:{
        backgroundColor: '#fff',
        paddingBottom: 5
    },
    title:{
        marginTop: windowHeight*.05,
        fontFamily: 'Regular',
        fontSize: 28,
        color: '#080D09',
        textAlign: 'right',
        marginRight: windowWidth*.055,
    },
    description: {
        color: '#4E4F4E',
        fontFamily: 'Regular',
        fontSize: 18,
        paddingLeft: windowWidth*.09,
        paddingRight: windowWidth*.09, 
        lineHeight: 30,
        marginTop: 28,
        // letterSpacing: 1
    },
    facts_text: {
        marginTop: 18,
        marginBottom: 20,
        fontFamily: 'Regular',
        fontSize: 28,
        color: '#080D09',
        textAlign: 'center',
    },
    facts_container: {
        justifyContent: 'center', 
        alignItems: 'center',
    }

})