import BackArrow from 'components/icons/BackArrow'
import { router } from 'expo-router';
import React, { useCallback } from 'react'
import { Text, View, Pressable, ScrollView, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider'
import { useSelector, useDispatch } from 'react-redux';
import { setSleepValues, setEnergyValues, setMoodValues, setWillPowerValues } from 'redux/actions/wellbeingActions';

const Width=Dimensions.get('screen').width;
const Height=Dimensions.get('screen').height;

const WellbeingRecords = () => {
    const dispatch = useDispatch();
    const wellbeing=useSelector((state: any)=>state.wellbeing);
    const [moodValue, setMoodValue] = React.useState(wellbeing.moodValue===-1?0:wellbeing.moodValue);
    const [energyValue, setEnergyValue] = React.useState(wellbeing.energyValue===-1?0:wellbeing.energyValue); 
    const [sleepValue, setSleepValue] = React.useState(wellbeing.sleepValue===-1?0:wellbeing.sleepValue);
    const [willPowerValue, setWillPowerValue] = React.useState(wellbeing.willPowerValue===-1?0:wellbeing.willPowerValue);

    const handleSave = async() => {
        dispatch(setMoodValues(moodValue));
        dispatch(setEnergyValues(energyValue));
        dispatch(setSleepValues(sleepValue));
        dispatch(setWillPowerValues(willPowerValue));

        router.push('/checkInScreen/Records')
    }

    const handleMoodChange = useCallback((value: any) => {
        // console.log(value);
        setMoodValue(value);
    },[moodValue])
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
        <View style={Styles.header_container}>
            <Pressable onPress={()=>router.back()}>
                <BackArrow/>
            </Pressable>
            <Text style={Styles.header_text}>Record All</Text>
        </View>
        <ScrollView style={Styles.container}>
            <View style={Styles.container2}>
                <Text style={Styles.text_style}>How would you describe your <Text style={{color: '#33ae9c'}}>mood</Text> today?</Text>
                <View style={Styles.container3}>
                    <Text style={Styles.text_style2}>Select your mood</Text>
                    {moodValue===0?
                        <Text style={[Styles.text_style3, {color: '#e64528'}]}>Low</Text>
                    : moodValue===1?
                        <Text style={[Styles.text_style3, {color: '#FFB800'}]}>Barely</Text>
                    : moodValue===2?
                        <Text style={[Styles.text_style3, {color: '#7844ff'}]}>Neutral</Text>
                    : moodValue===3?
                        <Text style={[Styles.text_style3, {color: '#33AE9C'}]}>Good</Text>
                    : <Text style={[Styles.text_style3, {color: '#33AE9C'}]}>Fantastic</Text>
                    }
                    
                </View>
                
            </View>
            <View style={{width: Width*0.9, marginHorizontal: Width*0.05}}>
                <Slider
                    minimumValue={0}
                    maximumValue={4}
                    step={1}
                    minimumTrackStyle={{
                        backgroundColor: moodValue===0?'#e64528': moodValue===1? '#FFB800' : moodValue===2? '#7844ff': '#33AE9C',
                        height: 12.5,
                        borderRadius: 10,
                        // width: Width*0.9
                    }}
                    maximumTrackStyle={{
                        backgroundColor: '#e4e5e3',
                        height: 12.5,
                        borderRadius: 10,
                        // width: Width*0.9
                    }}
                    thumbStyle={{
                        backgroundColor: moodValue===0?'#e64528': moodValue===1? '#FFB800' : moodValue===2? '#7844ff': '#33AE9C',
                        height: 24,
                        width: 24,
                        borderWidth: 2,
                        borderColor: '#fff',
                        borderRadius: 24,
                    }}
                    trackMarks={[0,1,2,3,4]}
                    renderTrackMarkComponent={(index) => (
                        <View style={[Styles.dot, {backgroundColor: index<moodValue? moodValue===0?'#e64528': moodValue===1? '#FFB800' : moodValue===2? '#7844ff': '#33AE9C': "#fff", borderColor: index<=moodValue?"#fff": '#b0b0b4'}]}/>
                    )}
                    value={moodValue}
                    onValueChange={(value) => {handleMoodChange(value[0])}}
                />
                <View style={Styles.horizontal}/>
            </View>

            <View style={Styles.container2}>
                <Text style={Styles.text_style}>How would you describe your <Text style={{color: '#33ae9c'}}>energy</Text> today?</Text>
                <View style={Styles.container3}>
                    <Text style={Styles.text_style2}>Select your mood</Text>
                    {energyValue===0?
                        <Text style={[Styles.text_style3, {color: '#e64528'}]}>Low</Text>
                    : energyValue===1?
                        <Text style={[Styles.text_style3, {color: '#FFB800'}]}>Barely</Text>
                    : energyValue===2?
                        <Text style={[Styles.text_style3, {color: '#7844ff'}]}>Neutral</Text>
                    : energyValue===3?
                        <Text style={[Styles.text_style3, {color: '#33AE9C'}]}>Good</Text>
                    : <Text style={[Styles.text_style3, {color: '#33AE9C'}]}>Fantastic</Text>
                    }
                    
                </View>
                
            </View>
            <View style={{width: Width*0.9, marginHorizontal: Width*0.05}}>
                <Slider
                    minimumValue={0}
                    maximumValue={4}
                    step={1}
                    minimumTrackStyle={{
                        backgroundColor: energyValue===0?'#e64528': energyValue===1? '#FFB800' : energyValue===2? '#7844ff': '#33AE9C',
                        height: 12.5,
                        borderRadius: 10,
                        // width: Width*0.9
                    }}
                    maximumTrackStyle={{
                        backgroundColor: '#e4e5e3',
                        height: 12.5,
                        borderRadius: 10,
                        // width: Width*0.9
                    }}
                    thumbStyle={{
                        backgroundColor: energyValue===0?'#e64528': energyValue===1? '#FFB800' : energyValue===2? '#7844ff': '#33AE9C',
                        height: 24,
                        width: 24,
                        borderWidth: 2,
                        borderColor: '#fff',
                        borderRadius: 24,
                    }}
                    trackMarks={[0,1,2,3,4]}
                    renderTrackMarkComponent={(index) => (
                        <View style={[Styles.dot, {backgroundColor: index<energyValue? energyValue===0?'#e64528': energyValue===1? '#FFB800' : energyValue===2? '#7844ff': '#33AE9C': "#fff", borderColor: index<=energyValue?"#fff": '#b0b0b4'}]}/>
                    )}
                    value={energyValue}
                    onValueChange={(value)=>setEnergyValue(value[0])}
                />
                <View style={Styles.horizontal}/>
            </View>

            <View style={Styles.container2}>
                <Text style={Styles.text_style}>How well did you <Text style={{color: '#33ae9c'}}>sleep</Text> last night?</Text>
                <View style={Styles.container3}>
                    <Text style={Styles.text_style2}>Select your mood</Text>
                    {sleepValue===0?
                        <Text style={[Styles.text_style3, {color: '#e64528'}]}>Low</Text>
                    : sleepValue===1?
                        <Text style={[Styles.text_style3, {color: '#FFB800'}]}>Barely</Text>
                    : sleepValue===2?
                        <Text style={[Styles.text_style3, {color: '#7844ff'}]}>Neutral</Text>
                    : sleepValue===3?
                        <Text style={[Styles.text_style3, {color: '#33AE9C'}]}>Good</Text>
                    : <Text style={[Styles.text_style3, {color: '#33AE9C'}]}>Fantastic</Text>
                    }
                    
                </View>
                
            </View>
            <View style={{width: Width*0.9, marginHorizontal: Width*0.05}}>
                <Slider
                    minimumValue={0}
                    maximumValue={4}
                    step={1}
                    minimumTrackStyle={{
                        backgroundColor: sleepValue===0?'#e64528': sleepValue===1? '#FFB800' : sleepValue===2? '#7844ff': '#33AE9C',
                        height: 12.5,
                        borderRadius: 10,
                        // width: Width*0.9
                    }}
                    maximumTrackStyle={{
                        backgroundColor: '#e4e5e3',
                        height: 12.5,
                        borderRadius: 10,
                        // width: Width*0.9
                    }}
                    thumbStyle={{
                        backgroundColor: sleepValue===0?'#e64528': sleepValue===1? '#FFB800' : sleepValue===2? '#7844ff': '#33AE9C',
                        height: 24,
                        width: 24,
                        borderWidth: 2,
                        borderColor: '#fff',
                        borderRadius: 24,
                    }}
                    trackMarks={[0,1,2,3,4]}
                    renderTrackMarkComponent={(index) => (
                        <View style={[Styles.dot, {backgroundColor: index<sleepValue? sleepValue===0?'#e64528': sleepValue===1? '#FFB800' : sleepValue===2? '#7844ff': '#33AE9C': "#fff", borderColor: index<=sleepValue?"#fff": '#b0b0b4'}]}/>
                    )}
                    value={sleepValue}
                    onValueChange={(value)=>setSleepValue(value[0])}
                />
                <View style={Styles.horizontal}/>
            </View>

            <View style={Styles.container2}>
                <Text style={Styles.text_style}>How would you rate your <Text style={{color: '#33ae9c'}}>will power</Text> today?</Text>
                <View style={Styles.container3}>
                    <Text style={Styles.text_style2}>Select your mood</Text>
                    {willPowerValue===0?
                        <Text style={[Styles.text_style3, {color: '#e64528'}]}>Low</Text>
                    : willPowerValue===1?
                        <Text style={[Styles.text_style3, {color: '#FFB800'}]}>Barely</Text>
                    : willPowerValue===2?
                        <Text style={[Styles.text_style3, {color: '#7844ff'}]}>Neutral</Text>
                    : willPowerValue===3?
                        <Text style={[Styles.text_style3, {color: '#33AE9C'}]}>Good</Text>
                    : <Text style={[Styles.text_style3, {color: '#33AE9C'}]}>Fantastic</Text>
                    }
                    
                </View>
                
            </View>
            <View style={{width: Width*0.9, marginHorizontal: Width*0.05}}>
                <Slider
                    minimumValue={0}
                    maximumValue={4}
                    step={1}
                    minimumTrackStyle={{
                        backgroundColor: willPowerValue===0?'#e64528': willPowerValue===1? '#FFB800' : willPowerValue===2? '#7844ff': '#33AE9C',
                        height: 12.5,
                        borderRadius: 10,
                        // width: Width*0.9
                    }}
                    maximumTrackStyle={{
                        backgroundColor: '#e4e5e3',
                        height: 12.5,
                        borderRadius: 10,
                        // width: Width*0.9
                    }}
                    thumbStyle={{
                        backgroundColor: willPowerValue===0?'#e64528': willPowerValue===1? '#FFB800' : willPowerValue===2? '#7844ff': '#33AE9C',
                        height: 24,
                        width: 24,
                        borderWidth: 2,
                        borderColor: '#fff',
                        borderRadius: 24,
                    }}
                    trackMarks={[0,1,2,3,4]}
                    renderTrackMarkComponent={(index) => (
                        <View style={[Styles.dot, {backgroundColor: index<willPowerValue? willPowerValue===0?'#e64528': willPowerValue===1? '#FFB800' : willPowerValue===2? '#7844ff': '#33AE9C': "#fff", borderColor: index<=willPowerValue?"#fff": '#b0b0b4'}]}/>
                    )}
                    value={willPowerValue}
                    onValueChange={(value)=>setWillPowerValue(value[0])}
                />
                <View style={Styles.horizontal}/>
            </View>
            <Pressable onPress={handleSave}>
                <View style={Styles.save_btn}>
                    <Text style={Styles.save_text}>Save</Text>
                </View>
            </Pressable>
        </ScrollView>
    </SafeAreaView>
  )
}

export default WellbeingRecords

const Styles=StyleSheet.create({
    container: {
        backgroundColor: '#f5f6f4',
    },
    header_container:{
        paddingTop: 15,
        paddingHorizontal: 20,
        width: Width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10
    },
    header_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 28,
        textAlign: 'right',

    },
    container2: {
        paddingTop: 20
    },
    text_style: {
        color: '#080D09',
        fontSize: 16,
        fontFamily: 'Regular',
        marginLeft: Width * 0.05,
        marginRight: Width * 0.05,
    },
    container3: {
        paddingTop: 25,
        marginHorizontal: Width * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text_style2: {
        color: '#4e4f4e',
        fontSize: 14,
        fontFamily: 'Regular',
    },
    text_style3: {
        fontFamily: 'Regular',
        fontSize: 16,
    },
    dot: {
        height: 24,
        width: 24,
        borderRadius: 24,
        backgroundColor: '#f7f8f6',
        borderWidth: 1,
        borderColor: '#b0b0b4',
    },
    horizontal: {
        height: 2,
        borderWidth: 1,
        borderColor: '#e4e5e3',
        width: Width*0.9,
        marginTop: 30,
        marginBottom: 30,
    },
    save_btn: {
        width: Width*0.9,
        height: 50,
        backgroundColor: '#0d3f4a',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: Width*0.05
    },
    save_text: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Regular',
        letterSpacing: -0.14
    }
})