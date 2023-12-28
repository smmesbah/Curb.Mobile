import BackArrow from 'components/icons/BackArrow'
import React, { useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { useSelector } from 'react-redux';

const Width=Dimensions.get('screen').width;
const Height=Dimensions.get('screen').height;

const Records = () => {
    const wellbeing=useSelector((state:any)=>state.wellbeing);
    const habit=useSelector((state:any)=>state.habit);
    const [text, onChangeText] = React.useState("");
    const borderColors=['#e64528', '#FFB800', '#7844ff', '#33AE9C', '#33AE9C'];
    const texts=["Low", 'Barely', 'Neutral', 'Good', 'Fantastic']
    const loc=habit.setLocation
    const act=habit.setActivity
    const peo=habit.setPeople
    const locArray = loc.split('-');
    const actArray = act.split('-');
    const peoArray = peo.split('-');
    // useEffect(() => {
    //     console.log(wellbeing)
    //     console.log(habit)
    //     console.log(locArray)
    //     console.log(actArray)
    //     console.log(peoArray)
    // },[])
  return (
    <SafeAreaView>
        <View style={Styles.header_container}>
            <BackArrow/>
            <Text style={Styles.header_text}>Mon 1st Jan</Text>
        </View>
        <ScrollView>
            <LinearGradient
                colors={['#377C8B', '#0D3F4A', '#0D3F4A' ]}
                locations={[0.0, 0.2, 0.6]}
            >
                <View style={Styles.container}>
                    <View style={Styles.container2}>
                        <Text style={Styles.text_style1}>£0</Text>
                        <Text style={Styles.text_style2}>Spent</Text>
                    </View>
                    <View style={Styles.container2}>
                        <Text style={Styles.text_style1}>0</Text>
                        <Text style={Styles.text_style2}>Calories</Text>
                    </View>
                    <View style={Styles.container2}>
                        <Text style={Styles.text_style1}>2</Text>
                        <Text style={Styles.text_style2}>Units</Text>
                    </View>
                </View>
                <View style={Styles.container3}>
                    <Text style={Styles.text_style3}>Based on your average weekly drinking behaviour</Text>
                </View>
            </LinearGradient>
            <View style={Styles.container4}>
                <Text style={Styles.tell_text}>Tell us more</Text>
                <Text style={Styles.tell_description}>Lorem ipsum dolor sit amet consectetur. Morbi
                    volutpat mollis eget viverra turpis.</Text>
            </View>
            <View style={Styles.container5}>
                <View style={Styles.text_container}>
                    <View style={[Styles.dot, {backgroundColor: '#33ae9c'}]}/>
                    <Text style={Styles.text_style4}>Your well being</Text>
                </View>
                <Pressable onPress={()=>router.push('/checkInScreen/WellbeingRecords')}>
                    <View style={Styles.record_btn}>
                        <Feather name="plus" size={18} color="#fff" />
                        <Text style={Styles.btn_text}>Record all</Text>
                    </View>
                </Pressable>
            </View>
            <View style={Styles.container5}>
                <View style={{gap: 15}}>
                    <Text style={Styles.text_style5}>Sleep</Text>
                    {wellbeing.sleepValue===-1?
                        <View style={[Styles.btn_text2, {borderColor: '#33AE9C'}]}>
                            <Feather name="plus" size={18} color="#4E4F4E" />
                        </View>
                     : 
                        <View style={[Styles.btn_text2, {borderColor: borderColors[wellbeing.sleepValue]}]}>
                            {/* <Feather name="plus" size={18} color="#4E4F4E" /> */}
                            <Text style={{color: borderColors[wellbeing.sleepValue], fontFamily: 'Regular', fontSize: 16}}>{texts[wellbeing.sleepValue]}</Text>
                        </View>
                    }   
                </View>
                <View style={{gap: 15}}>
                    <Text style={Styles.text_style5}>Mood</Text>
                    {wellbeing.moodValue===-1?
                        <View style={[Styles.btn_text2, {borderColor: '#33AE9C'}]}>
                            <Feather name="plus" size={18} color="#4E4F4E" />
                        </View>
                     : 
                        <View style={[Styles.btn_text2, {borderColor: borderColors[wellbeing.moodValue]}]}>
                            {/* <Feather name="plus" size={18} color="#4E4F4E" /> */}
                            <Text style={{color: borderColors[wellbeing.moodValue], fontFamily: 'Regular', fontSize: 16}}>{texts[wellbeing.moodValue]}</Text>
                        </View>
                    }
                </View>
            </View>
            <View style={Styles.container5}>
                <View style={{gap: 15}}>
                    <Text style={Styles.text_style5}>Energy</Text>
                    {wellbeing.energyValue===-1?
                        <View style={[Styles.btn_text2, {borderColor: '#33AE9C'}]}>
                            <Feather name="plus" size={18} color="#4E4F4E" />
                        </View>
                     : 
                        <View style={[Styles.btn_text2, {borderColor: borderColors[wellbeing.energyValue]}]}>
                            {/* <Feather name="plus" size={18} color="#4E4F4E" /> */}
                            <Text style={{color: borderColors[wellbeing.energyValue], fontFamily: 'Regular', fontSize: 16}}>{texts[wellbeing.energyValue]}</Text>
                        </View>
                    }
                </View>
                <View style={{gap: 15}}>
                    <Text style={Styles.text_style5}>WillPower</Text>
                    {wellbeing.willPowerValue===-1?
                        <View style={[Styles.btn_text2, {borderColor: '#33AE9C'}]}>
                            <Feather name="plus" size={18} color="#4E4F4E" />
                        </View>
                     : 
                        <View style={[Styles.btn_text2, {borderColor: borderColors[wellbeing.willPowerValue]}]}>
                            {/* <Feather name="plus" size={18} color="#4E4F4E" /> */}
                            <Text style={{color: borderColors[wellbeing.willPowerValue], fontFamily: 'Regular', fontSize: 16}}>{texts[wellbeing.willPowerValue]}</Text>
                        </View>
                    }
                </View>
            </View>
            <View style={Styles.container5}>
                <View style={Styles.text_container}>
                    <View style={[Styles.dot, {backgroundColor: '#7844ff'}]}/>
                    <Text style={Styles.text_style4}>Your habits</Text>
                </View>
                <Pressable onPress={()=>router.push('/checkInScreen/HabitRecords')}>
                    <View style={Styles.record_btn}>
                        <Feather name="plus" size={18} color="#fff" />
                        <Text style={Styles.btn_text}>Record all</Text>
                    </View>
                </Pressable>
            </View>
            <View style={Styles.container5}>
                <View style={{gap: 15}}>
                    {locArray.length===1 && locArray[0]===''?
                        <View style={[Styles.btn_text2, {borderColor: '#7844ff'}]}>
                            <Feather name="plus" size={18} color="#4E4F4E" />
                            <Text style={[Styles.text_style5]}>Place</Text>
                        </View>
                    : 
                    <View>
                        <Text style={Styles.text_style5}>Place</Text>
                        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, marginTop: 10}}>
                            {locArray.map((item: any, index: any)=>(
                                <View key={index} style={Styles.container6}>
                                    <Text style={[Styles.text_style6, {color: '#33AE9C'}]}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    }
                </View>
                <View style={{gap: 15}}>
                {peoArray.length===1 && peoArray[0]===''?
                        <View style={[Styles.btn_text2, {borderColor: '#7844ff'}]}>
                            <Feather name="plus" size={18} color="#4E4F4E" />
                            <Text style={[Styles.text_style5]}>People</Text>
                        </View>
                    : 
                    <View>
                        <Text style={[Styles.text_style5]}>People</Text>
                        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, marginTop: 10}}>
                            {peoArray.map((item: any, index: any)=>(
                                <View key={index} style={{
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    alignItems: 'center',
                                    gap: 8,
                                    borderRadius: 12,
                                    borderWidth: 1,
                                    borderColor: "#E64528",
                                    backgroundColor: 'rgba(230, 69, 40, 0.05)',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={[Styles.text_style6, {color: '#E64528'}]}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    }
                </View>
            </View>
            <View>
            {actArray.length===1 && actArray[0]===''?
                    <View style={Styles.btn_text3}>
                            <Feather name="plus" size={18} color="#4E4F4E" />
                            <Text style={[Styles.text_style5]}>Activities</Text>
                     </View>   
                    : 
                    <View style={[{marginHorizontal: Width*0.05, backgroundColor: '#f7f8f6',}]}>
                        <Text style={Styles.text_style5}>Activities</Text>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, marginTop: 10}}>
                            {actArray.map((item: any, index: any)=>(
                                <View key={index} style={{
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    alignItems: 'center',
                                    gap: 8,
                                    borderRadius: 12,
                                    borderWidth: 1,
                                    borderColor: "#7844FF",
                                    backgroundColor: 'rgba(120, 68, 255, 0.05)',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={[Styles.text_style6, {color: '#7844FF'}]}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    }
            </View>
            <View style={Styles.container5}>
                <View style={Styles.text_container}>
                    <View style={[Styles.dot, {backgroundColor: '#E64528'}]}/>
                    <Text style={Styles.text_style4}>Add a note</Text>
                </View>
            </View>
            <View style={Styles.container5}>
                <TextInput
                    style={Styles.input_styles}
                    placeholder='Write your notes'
                    placeholderTextColor={"#b0b0b4"}
                    multiline={true}
                    textAlignVertical='top'
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
            <Pressable onPress={()=>router.push('homeScreen/checkIn')}>
                <View style={Styles.save_btn}>
                    <Text style={Styles.save_text}>Save</Text>
                </View>
            </Pressable>
            <View style={{height: Width*.19}}></View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Records

const Styles=StyleSheet.create({
    header_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 30,
        backgroundColor: '#fff'
    },
    header_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 28,
        textAlign: 'right',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 25
        // paddingVertical: 25,
    },
    container2: {
        // marginTop: 25,
        width: Width*.25,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(51, 174, 156, 0.30)',
        // paddingHorizontal: 20,
        paddingVertical: 27,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#33ae9c'
    },
    text_style1: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Regular',
    },
    text_style2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'Regular',
    },
    container3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    text_style3: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Regular',
    },
    container4: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        paddingVertical: 25
    },
    tell_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 20,
        marginBottom: 5
    },
    tell_description: {
        color: '#4E4F4E',
        fontFamily: 'Regular',
        fontSize: 16,
        lineHeight: 28
    }, 
    dot: {
        height: 12,
        width: 12,
        borderRadius: 6,
    },
    text_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 15,
        backgroundColor: '#f7f8f6'
    },
    text_style4: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 20,
    },
    record_btn: {
        height: Height*.045,
        backgroundColor: '#33ae9c',
        flexDirection: 'row',
        paddingHorizontal: 16,
        borderRadius: 8,
        paddingVertical: 6,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_text: {
        color: '#fff',
        fontFamily: 'Regular',
        fontSize: 16,
        letterSpacing: -.14
    },
    text_style5: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 17,
    },
    btn_text2: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        // borderColor: '#33ae9c',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: Width*.42,
        height: 50
    },
    btn_text3: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#7844ff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: Width*.9,
        height: 50,
        marginHorizontal: 20,
        marginTop: 10
    }, 
    input_styles: {
        width: Width*.9,
        height: Height*.2,
        padding: 15,
        alignItems: 'flex-start',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#b0b0b4',
        backgroundColor: '#fff',
        paddingTop: 10
    },
    save_btn: {
        width: Width*0.9,
        height: 52,
        borderRadius: 100,
        paddingVertical: 2,
        paddingHorizontal: 6,
        backgroundColor: '#0d3f4a',
        marginHorizontal: Width*.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    save_text: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 16,
        letterSpacing: -.14,
    },
    container6: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        gap: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#33AE9C",
        backgroundColor: 'rgba(51, 174, 156, 0.05)',
        flexDirection: 'row'
    },
    text_style6: {
        fontFamily: 'Regular',
        fontSize: 17,
    }
})