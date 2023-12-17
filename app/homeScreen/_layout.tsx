import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, router } from 'expo-router'

const Layout = () => {
  return (
    <>
      <Slot/>
      <View
        style={{
            flexDirection: 'row',
            gap: 20,
        }}
      >
        <Pressable
            onPress={() => router.push('/homeScreen')}
        >
            <Text>Home</Text>
        </Pressable>
        <Pressable
            onPress={() => router.push('/homeScreen/tasks')}
        >
            <Text>Task</Text>
        </Pressable>
        <Pressable
            onPress={() => router.push('/homeScreen/insights')}
        >
            <Text>Insights</Text>
        </Pressable>
        <Pressable
            onPress={() => router.push('/homeScreen/achievement')}
        >
            <Text>Achievement</Text>
        </Pressable>
      </View>
    </>
  )
}

export default Layout

const styles = StyleSheet.create({})