import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Link } from "expo-router";
import ImagePagination from "../../components/ui/ImagePagination";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Data = [
  {
    id: 1,
    header: "Track progress effortlessly",
    subHeader:
      "Log your moods and drinking behavior to see how far you've come",
    image: require("../../assets/Onbording/onbordingSlider1.jpg"),
  },
  {
    id: 2,
    header: "Learn about your mind and motivation",
    subHeader: "Build your self-knowledge every day with lessons from experts",
    image: require("../../assets/Onbording/onbordingSlider2.jpg"),
  },
  {
    id: 3,
    header: "Celebrate every victory",
    subHeader: "Share your achievements and grow your community",
    image: require("../../assets/Onbording/onbordingSlider3.jpg"),
  },
];

const Onbording2 = () => {
    const flatlistRef = useRef();
    const [lock, setLock]=React.useState(false);
    const [index, setIndex]=React.useState<number>(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let interval = setInterval(() => {
            let ind=(index+1)
            if(ind<3) setIndex(ind)
            else setIndex(0)
        if (flatlistRef.current) {
            (flatlistRef.current as any).scrollToIndex({index: index, animated: true});
        }
        // setIndex((index + 1)%Data.length);
    }, 2000)
      
        return () => clearInterval(interval);
      }, [index]);

    const getItemLayout = (data: any, index: any) => ({
        length: Width*0.9,
        offset: Width * index,
        index: index,
    })

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          ref={flatlistRef}
          data={Data}
          renderItem={({ item }) => (
            <View key={item.id} style={{ width: Width }}>
              <ImageBackground
                source={item.image}
                style={styles.image}
                imageStyle={{ borderRadius: 15, height: "100%", width: "100%" }}
              >
                <View style={styles.curb}>
                  <Text style={styles.curbText}>curb</Text>
                  <View style={styles.dot}></View>
                </View>

                <View style={styles.flex}>
                  <Text style={styles.text1}>{item.header}</Text>
                </View>
              </ImageBackground>

              <Text style={styles.text2}>{item.subHeader}</Text>
            </View>
          )}
          getItemLayout={getItemLayout}
          horizontal={true}
          pagingEnabled={true}
          snapToAlignment="center"
          onScroll={handleOnScroll}
          showsHorizontalScrollIndicator={false}
        //   ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        />
        <ImagePagination data={Data} scrollX={scrollX} index={index} lock={lock}/>
        <View style={styles.button}>
          <Link
            href="/signup"
            style={[
              styles.buttonText,
              { width: "100%", fontFamily: "Regular" },
            ]}
          >
            Next
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onbording2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    // paddingVertical: 15,
    paddingBottom: 25,
  },
  image: {
    resizeMode: "contain",
    justifyContent: "center",
    width: null,
    height: Height * 0.6,
    marginHorizontal: 15,
    marginTop: 10,
    position: "relative",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: '#000000a0',
    fontFamily: "Regular",
  },
  curb: {
    position: "absolute",
    top: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    backgroundColor: "#fff",
    width: 15,
    height: 15,
    borderRadius: 50,
    marginLeft: 10,
    color: "#fff",
  },
  curbText: {
    color: "white",
    fontSize: 42,
    // fontWeight: 'bold',
    letterSpacing: 5,
    fontFamily: "Regular",
  },
  text1: {
    color: "white",
    fontSize: 42,
    lineHeight: 50,
    fontFamily: "Regular",
  },
  text2: {
    color: "white",
    fontSize: 18,
    margin: 20,
    fontFamily: "Regular",
    // width: Width*0.9,
  },
  flex: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 35,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "Regular",
  },
  alreadyHaveAnAccount: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  dotPosition: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  paginationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
});
