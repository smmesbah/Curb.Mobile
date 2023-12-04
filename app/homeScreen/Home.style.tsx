import { StyleSheet, Dimensions} from "react-native";

const windowWidth=Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#ffffff",
        width: '100%',
        padding: 20,
        paddingTop: 0,
      },
    horizontal_line:{
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 2,
        width: '100%',
    },
    profile_container: {
        // flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth-40,
    },
    task_text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#9fa0ac',
        marginLeft: 15,
        marginTop: 9
    }
})

export default styles;