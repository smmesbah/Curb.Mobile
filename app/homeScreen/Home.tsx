import { View, Text, Image, Keyboard, Platform, Dimensions, TouchableOpacity, Modal } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from './Home.style';
import DrinkFreeDays from 'components/DrinkFreeDays';
import CaloriesAvoidedWidget from 'components/CaloriesAvoidedWidget';
import MotivationWidget from 'components/MotivationWidget';
import styles from './Home.style';
import TaskCard from 'components/TaskCard';
import { ScrollView } from 'react-native-gesture-handler';
import CalenderModal from 'components/CalenderModal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const windowWidth=Dimensions.get('screen').width;
const windowHeight=Dimensions.get('screen').height;
const dummyValues=[
    {
        title: 'Play Basketball',
        Description: 'Play basketball with friends',
        imageUri: require('../../assets/images/CurbLogo.png'),
    },
    {
        title: 'Play Basketball',
        Description: 'Play basketball with friends',
        imageUri: require('../../assets/images/CurbLogo.png'),
    },
    {
        title: 'Play Basketball',
        Description: 'Play basketball with friends',
        imageUri: require('../../assets/images/CurbLogo.png'),
    },
    {
        title: 'Play Basketball',
        Description: 'Play basketball with friends',
        imageUri: require('../../assets/images/CurbLogo.png'),
    }
]

const Home = () => {

    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const [calandermodalOpen, setCalanderModalOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setKeyboardOpen(true);
        console.log('keyboard open');
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardOpen(false);
        console.log('keyboard closed');
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView>
    <ScrollView 
    automaticallyAdjustContentInsets={true}
    automaticallyAdjustKeyboardInsets={true}>
    
    <View style={[Styles.container]}>
            <Image
                source={require('../../assets/images/CurbLogo.png')}
                height={20}
                width={86.62}
                style={{
                    marginTop: 20,
                }}
            />
            
            <View style={[Styles.profile_container, {marginTop: 20}]}
            // , {marginTop: 20}
            >
            <Text>c u r b <MaterialCommunityIcons name="checkbox-blank-circle" size={10} /></Text>
            
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                gap: 30
            }}>
                <TouchableOpacity onPress={()=>setCalanderModalOpen(true)}>
                <Image
                    source={require('../../assets/icons/HomeCalander.png')}
                />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/icons/HomeProfile.png')}
                />
            </View>
            </View>
            <DrinkFreeDays/>
            <View style={{marginTop: 40, width: '100%'}}>
            <CaloriesAvoidedWidget/>
            </View>
            <View style={{marginTop: 100, width: '100%'}}>
            <MotivationWidget/>
            </View>
            
    </View>
    <View>
    <Text style={[styles.task_text, {backgroundColor: 'transparent'}]}>Today's task</Text>
    <View>
        {dummyValues.map((item, index)=>(
            <TaskCard 
                key={index}
                title={item.title}
                description={item.Description}
                imageUri={item.imageUri}
            />
        ))}
    </View>
    </View>
    <Modal visible={calandermodalOpen} transparent>
        <CalenderModal calandermodalOpen={calandermodalOpen} setCalanderModalOpen={setCalanderModalOpen}/>
    </Modal>
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default Home

