import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { addSelectedDay, removeSelectedDay } from 'redux/actions/selectedDaysActions';


interface TouchableHighlightButtonProps {
    text: string,
    redirect? : {
        pathname: string,
        params?: {
            day: string,
            // week: string,
        }
    },
    // selectedDays?: string[],
}

const { width, height } = Dimensions.get('screen');

const TouchableHighlightButton: React.FC<TouchableHighlightButtonProps> = ({text, redirect}) => {
    var [isPress, setIsPress] = React.useState(false);
    const selectedDays = useSelector((state: any) => state.selecedDays.selectedDays);
    const dispatch=useDispatch();

    var touchProps = {
        activeOpacity: 1,
        underlayColor: 'black',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.btnPress : styles.btnNormal,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        // onPress: () => router.push({
        //     pathname: redirect?.pathname,
        //     params: redirect?.params,
        // })
        onPress: () =>{
            if(!selectedDays?.includes(text)){
                dispatch(addSelectedDay(text))
            }
            else if(selectedDays?.includes(text)){
                dispatch(removeSelectedDay(text))
            }
        }
    }
    return (
        <TouchableHighlight {...touchProps}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                    paddingVertical: 15,
                    paddingHorizontal: 30,
                    width: '100%',
                    borderRadius: 30,
                    backgroundColor: selectedDays?.includes(text) ? 'black' : 'white',
                    borderWidth: 2,
                    borderColor: selectedDays?.includes(text) ? 'black' : '#d9d9d9',
                }}
            >
                <Text
                    style={{
                        fontSize: 17,
                        color: selectedDays?.includes(text) ? 'white' : 'black',
                        fontFamily: "Regular"
                    }}
                >{text}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default TouchableHighlightButton

const styles = StyleSheet.create({
    btnNormal: {
        // borderColor: '#d9d9d9',
        // borderWidth: 2,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.7,
    },
    btnPress: {
        borderColor: 'black',
        // borderWidth: 2,
        borderRadius: 30,
        width: width * 0.7,
    }
})