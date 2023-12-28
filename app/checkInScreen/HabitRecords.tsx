import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, Pressable, Dimensions } from 'react-native'
import { router } from 'expo-router'
import BackArrow from 'components/icons/BackArrow'
import VisitedIcon from 'components/icons/VisitedIcon';
import { useSelector, useDispatch } from 'react-redux';
import { setLocations, setActivities, setPeople } from 'redux/actions/habitActions';


const Height=Dimensions.get('window').height;
const Width=Dimensions.get('window').width;

interface locations {
    id: number,
    value: string,
}

const HabitRecords = () => {

    const dispatch = useDispatch();
    const habit=useSelector((state: any)=>state.habit);

    // const locations: locations[] = [
    //     { id: 1, value: 'My home' },
    //     { id: 2, value: 'Another home' },
    //     { id: 3, value: 'Work' },
    //     { id: 4, value: 'Restaurant' },
    //     { id: 5, value: 'Gym' },
    //     { id: 6, value: 'Pub/Bar' },
    // ]
    const locations=['My home', 'Another home', 'Work', 'Restaurant', 'Gym', 'Pub/Bar']
    const people = ["Friends",'Family', "Partner", 'Work colleagues']
    //     { id: 1, value: 'Friends' },
    //     { id: 2, value: 'Family' },
    //     { id: 3, value: 'Partner' },
    //     { id: 4, value: 'Work colleagues' },
    // ]
    const activities = ['Chill at home', 'Work', 'Chores', 'Exercise', 'Cook', 'Socialise']
    //     { id: 1, value: 'Chill at home' },
    //     { id: 2, value: 'Work' },
    //     { id: 3, value: 'Chores' },
    //     { id: 4, value: 'Exercise' },
    //     { id: 5, value: 'Cook' },
    //     { id: 6, value: 'Socialise' },
    // ]
    const loc=habit.setLocation;
    const act=habit.setActivity;
    const peo=habit.setPeople;
    const [selectedItems, setSelectedItems] = React.useState<string[]>(loc===''?[]:loc.split('-'));
    const [selectedActivities, setSelectedActivities] = React.useState<string[]>(act===''?[]:act.split('-'));
    const [selectedPeople, setSelectedPeople] = React.useState<string[]>(peo===''?[]:peo.split('-'));
    const toggleItemSelection = (item: string): void => {
        const alreadySelected = selectedItems.some(selectedItem => selectedItem === item);

        if (alreadySelected) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };
    const toggleActivitySelection = (item: string): void => {
        const alreadySelected = selectedActivities.some(selectedItem => selectedItem === item);

        if (alreadySelected) {
            setSelectedActivities(selectedActivities.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedActivities([...selectedActivities, item]);
        }
    };
    const togglePeopleSelection = (item: string): void => {
        const alreadySelected = selectedPeople.some(selectedItem => selectedItem === item);

        if (alreadySelected) {
            setSelectedPeople(selectedPeople.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedPeople([...selectedPeople, item]);
        }
    };

    useEffect(() => {
        console.log(selectedItems, selectedActivities, selectedPeople)
    }, [selectedItems, selectedActivities, selectedPeople]);

    const handleSave = () => {
        // console.log('Selected Items:', selectedItems.map(item => item.value));
        // console.log('Selected Activities:', selectedActivities.map(item => item.value));
        // console.log('Selected People:', selectedPeople.map(item => item.value));

        let loc = selectedItems.map(item => item).join('-');
        let act = selectedActivities.map(item => item).join('-');
        let peo = selectedPeople.map(item => item).join('-');

        // Remove trailing hyphen
        loc = loc.endsWith('-') ? loc.slice(0, -1) : loc;
        act = act.endsWith('-') ? act.slice(0, -1) : act;
        peo = peo.endsWith('-') ? peo.slice(0, -1) : peo;

        dispatch(setLocations(loc));
        dispatch(setActivities(act));
        dispatch(setPeople(peo));

        console.log(habit);

        if(loc==='' && act==='' && peo===''){
            alert("Please select all the fields")
        }
        else{
            
            router.push('/checkInScreen/Records');
        }

        // router.push('/checkInScreen/Records');
        
    }
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
                <Text style={Styles.text_style}>Where did you visit today?</Text>
                <View style={Styles.container3}>
                    <View style={[Styles.dot, {backgroundColor: '#33ae9c'}]}/>
                    <Text style={Styles.text_style2}>Select locations</Text>
                </View>
                <View style={Styles.container4}>
                    {locations.map((location, index)=>(
                        <Pressable onPress={() => toggleItemSelection(location)} key={index}>
                            <View style={[Styles.container5, {borderColor: selectedItems.some(item => item === location)?'#33AE9C':"black", backgroundColor: selectedItems.some(item => item === location)?'rgba(51, 174, 156, 0.05)': '#fff'}]}>
                                <Text style={{color: selectedItems.some(item => item === location)?'#33AE9C':"black"}}>{location}</Text>
                                {selectedItems.some(item => item === location)?<VisitedIcon color="#33ae9c"/>: null}
                            </View>
                        </Pressable>
                    ))
                    }
                </View>
                <View style={Styles.horizontal}/>
            </View>
            <View style={Styles.container2}>
                <Text style={Styles.text_style}>What did you do today?</Text>
                <View style={Styles.container3}>
                    <View style={[Styles.dot, {backgroundColor: "#7844FF"}]}/>
                    <Text style={Styles.text_style2}>Select activities</Text>
                </View>
                <View style={Styles.container4}>
                    {activities.map((location, index)=>(
                        <Pressable onPress={() => toggleActivitySelection(location)} key={index}>
                            <View style={[Styles.container5, {borderColor: selectedActivities.some(item => item === location)?'#7844ff':"black", backgroundColor: selectedActivities.some(item => item === location)?'rgba(120, 68, 255, 0.05)': '#fff'}]}>
                                <Text style={{color: selectedActivities.some(item => item === location)?'#7844ff':"black"}}>{location}</Text>
                                {selectedActivities.some(item => item === location)?<VisitedIcon color='#7844ff'/>: null}
                            </View>
                        </Pressable>
                    ))
                    }
                </View>
                <View style={Styles.horizontal}/>
            </View>
            <View style={Styles.container2}>
                <Text style={Styles.text_style}>Who did you see?</Text>
                <View style={Styles.container3}>
                    <View style={[Styles.dot, {backgroundColor: '#e64528'}]}/>
                    <Text style={Styles.text_style2}>Select people</Text>
                </View>
                <View style={Styles.container4}>
                    {people.map((location, index)=>(
                        <Pressable onPress={() => togglePeopleSelection(location)} key={index}>
                            <View style={[Styles.container5, {borderColor: selectedPeople.some(item => item === location)?'#e64528':"black", backgroundColor: selectedPeople.some(item => item === location)?'rgba(230, 69, 40, 0.05)': '#fff'}]}>
                                <Text style={{color: selectedPeople.some(item => item === location)?'#e64528':"black"}}>{location}</Text>
                                {selectedPeople.some(item => item === location)?<VisitedIcon color="#e64528"/>: null}
                            </View>
                        </Pressable>
                    ))
                    }
                </View>
                <View style={Styles.horizontal}/>
            </View>
            <Pressable onPress={handleSave}>
                <View style={Styles.save_btn}>
                    <Text style={Styles.save_text}>
                        Save
                    </Text>
                </View>
            </Pressable>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HabitRecords

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
        marginTop: 20,
        marginHorizontal: Width*0.05,
        flexDirection: 'column',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    text_style: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 20,
    },
    dot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        // backgroundColor: ''
    },
    container3: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    text_style2: {
        color: '#080d09',
        fontFamily: 'Regular',
        fontSize: 16
    },
    container4: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 15,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexWrap: 'wrap',
    }, 
    container5: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        gap: 8,
        borderRadius: 12,
        borderWidth: 1,
        flexDirection: 'row'
    },
    horizontal: {
        height: 2,
        borderWidth: 1,
        borderColor: '#e4e5e3',
        width: Width*0.9,
        marginTop: 15,
        marginBottom: 15,
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