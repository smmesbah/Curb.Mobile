import { StyleSheet, Dimensions} from "react-native";

const windowWidth=Dimensions.get('screen').width;
const windowHeight=Dimensions.get('screen').height;

const styles = StyleSheet.create({

    container: {
        borderRadius: 18,
        width: windowWidth*.90,
        marginTop: windowHeight*.04,
        paddingBottom: 15,
      },
    home_profile: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderWidth: 1.4,
        borderColor: '#b0b0b4',
        backgroundColor: '#266370',
        justifyContent: 'center',
        alignItems: 'center',
    },
    home_profile_text: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Regular',
        color: '#fff',
    },
    horizontal_line:{
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 2,
        width: '100%',
    },
    profile_container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15
    },
    task_text: {
        fontSize: 17,
        fontStyle: 'normal',
        fontFamily: 'Medium',
        color: '#fff',
        letterSpacing: -0.16,
        marginTop: windowWidth*.13,
        marginBottom: 13
    }, 
    curb_logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 25,
    },
    curb_text: {
        fontSize: 32,
        fontWeight: '500',
        color: '#fff',
    },
    drinkFreeDays: {
        marginLeft: 16.74,
        marginTop: windowHeight*.03,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
})

export default styles;