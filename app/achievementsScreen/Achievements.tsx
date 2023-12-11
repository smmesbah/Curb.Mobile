import React from 'react'
import { View, Text, StyleSheet, Animated, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Achievements = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={Styles.container}>
                <Text style={Styles.achievement_text}>Achievements</Text>
                <View style={Styles.total_badges_ellipse}>
                    <Text style={Styles.badge_no}>17</Text>
                    <Text style={Styles.badge_text}>Total Badges</Text>
                    <Text style={Styles.badge_text}>Earned</Text>
                </View>
                <Text style={Styles.level_text}>You've reached Level 1</Text>
                <Text style={Styles.tree_text}>You’re tree is growing healthy</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Achievements

const Styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    achievement_text:{
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 28,
        letterSpacing: 0.5,
    },
    total_badges_ellipse:{
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D3F4A',
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 4.92,
        borderColor: '#377C8B',
    },
    badge_no: {
        color: '#fff',
        fontFamily: 'Regular',
        textAlign: 'center',
        fontSize: 39.623,
        lineHeight: 49.548
    },
    badge_text: {
        color: '#fff',
        fontFamily: 'Regular',
        fontSize: 15.849,
    },
    level_text: {
        marginTop: 26.63,
        color: '#0D3F4A',
        fontFamily: 'Regular',
        fontSize: 24
    },
    tree_text: {
        marginTop: 16,
        color: '#4E4F4E',
        fontFamily: 'Regular',
        fontSize: 16,
    }

})