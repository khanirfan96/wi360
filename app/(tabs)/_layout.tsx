import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFAE00', 
        tabBarInactiveTintColor: '#D9D9D9', 
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: focused ? '#FFAE00' : '#D9D9D9' }}
                source={require('../../assets/images/Vector.png')}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Gateway',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../../assets/images/messages1.png')}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="button"
        options={{
          title: 'New Button',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../../assets/images/calendar.png')}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../../assets/images/profile.png')}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
