import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, Pressable, Dimensions } from 'react-native'
import { router } from 'expo-router'
import BackArrow from 'components/icons/BackArrow'
import AchievementDoneIcon from 'components/icons/AchievementDoneIcon';
import VisitedIcon from 'components/icons/VisitedIcon';

const Height=Dimensions.get('window').height;
const Width=Dimensions.get('window').width;

interface locations {
    id: number,
    value: string,
}

const HabitRecords = () => {

    const locations: locations[] = [
        { id: 1, value: 'My home' },
        { id: 2, value: 'Another home' },
        { id: 3, value: 'Work' },
        { id: 4, value: 'Restaurant' },
        { id: 5, value: 'Gym' },
        { id: 6, value: 'Pub/Bar' },
    ]
    const people: locations[] = [
        { id: 1, value: 'Friends' },
        { id: 2, value: 'Family' },
        { id: 3, value: 'Partner' },
        { id: 4, value: 'Work colleagues' },
    ]
    const activities: locations[] = [
        { id: 1, value: 'Chill at home' },
        { id: 2, value: 'Work' },
        { id: 3, value: 'Chores' },
        { id: 4, value: 'Exercise' },
        { id: 5, value: 'Cook' },
        { id: 6, value: 'Socialise' },
    ]
    const [selectedItems, setSelectedItems] = React.useState<locations[]>([]);
    const [selectedActivities, setSelectedActivities] = React.useState<locations[]>([]);
    const [selectedPeople, setSelectedPeople] = React.useState<locations[]>([]);
    const toggleItemSelection = (item: locations): void => {
        const alreadySelected = selectedItems.some(selectedItem => selectedItem.id === item.id);

        if (alreadySelected) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== item.id));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };
    const toggleActivitySelection = (item: locations): void => {
        const alreadySelected = selectedActivities.some(selectedItem => selectedItem.id === item.id);

        if (alreadySelected) {
            setSelectedActivities(selectedActivities.filter((selectedItem) => selectedItem.id !== item.id));
        } else {
            setSelectedActivities([...selectedActivities, item]);
        }
    };
    const togglePeopleSelection = (item: locations): void => {
        const alreadySelected = selectedPeople.some(selectedItem => selectedItem.id === item.id);

        if (alreadySelected) {
            setSelectedPeople(selectedPeople.filter((selectedItem) => selectedItem.id !== item.id));
        } else {
            setSelectedPeople([...selectedPeople, item]);
        }
    };

    const handleSave = () => {
        // console.log('Selected Items:', selectedItems.map(item => item.value));
        // console.log('Selected Activities:', selectedActivities.map(item => item.value));
        // console.log('Selected People:', selectedPeople.map(item => item.value));

        let loc:string =''
        selectedItems.map(item => {
            loc+=''+item.value
            if(item.id!==selectedItems.length-1){
                loc+='-'
            }
        });
        let act:string =''
        selectedActivities.map(item => {
            act+=''+item.value
            if(item.id!==selectedActivities.length-1){
                act+='-'
            }
        });
        let peo:string =''
        selectedPeople.map(item => {
            peo+=''+item.value
            if(item.id!==selectedPeople.length-1){
                peo+='-'
            }
        });
        // console.log(loc)
        // console.log(act)
        // console.log(peo)

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
                    <View style={Styles.dot}/>
                    <Text style={Styles.text_style2}>Select locations</Text>
                </View>
                <View style={Styles.container4}>
                    {locations.map((location, index)=>(
                        <Pressable onPress={() => toggleItemSelection(location)}>
                            <View style={[Styles.container5, {borderColor: selectedItems.some(item => item.id === location.id)?'#33AE9C':"black", backgroundColor: selectedItems.some(item => item.id === location.id)?'rgba(51, 174, 156, 0.05)': '#fff'}]}>
                                <Text style={{color: selectedItems.some(item => item.id === location.id)?'#33AE9C':"black"}}>{location.value}</Text>
                                {selectedItems.some(item => item.id === location.id)?<VisitedIcon color="#33ae9c"/>: null}
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
                    <View style={Styles.dot}/>
                    <Text style={Styles.text_style2}>Select activities</Text>
                </View>
                <View style={Styles.container4}>
                    {activities.map((location, index)=>(
                        <Pressable onPress={() => toggleActivitySelection(location)}>
                            <View style={[Styles.container5, {borderColor: selectedActivities.some(item => item.id === location.id)?'#7844ff':"black", backgroundColor: selectedActivities.some(item => item.id === location.id)?'rgba(120, 68, 255, 0.05)': '#fff'}]}>
                                <Text style={{color: selectedActivities.some(item => item.id === location.id)?'#7844ff':"black"}}>{location.value}</Text>
                                {selectedActivities.some(item => item.id === location.id)?<VisitedIcon color='#7844ff'/>: null}
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
                    <View style={Styles.dot}/>
                    <Text style={Styles.text_style2}>Select people</Text>
                </View>
                <View style={Styles.container4}>
                    {people.map((location, index)=>(
                        <Pressable onPress={() => togglePeopleSelection(location)}>
                            <View style={[Styles.container5, {borderColor: selectedPeople.some(item => item.id === location.id)?'#e64528':"black", backgroundColor: selectedPeople.some(item => item.id === location.id)?'rgba(230, 69, 40, 0.05)': '#fff'}]}>
                                <Text style={{color: selectedPeople.some(item => item.id === location.id)?'#e64528':"black"}}>{location.value}</Text>
                                {selectedPeople.some(item => item.id === location.id)?<VisitedIcon color="#e64528"/>: null}
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
        backgroundColor: '#33ae9c'
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