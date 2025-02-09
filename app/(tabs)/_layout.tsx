import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet } from 'react-native';
import { House, DoorOpen, CalendarDays, UserRoundPen, SquarePlus } from 'lucide-react-native';

const styles = StyleSheet.create({
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#252525',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#FFAE00',
        tabBarInactiveTintColor: '#fff',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <House size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Gateway',
          tabBarIcon: ({ color }) => <DoorOpen size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="addnew"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <SquarePlus size={32} color={'#FFAE00'} />
        }}
      />
      <Tabs.Screen
        name="button"
        options={{
          title: 'New Button',
          tabBarIcon: ({ color }) => <CalendarDays  size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <UserRoundPen  size={24} color={color} />
        }}
      />
    </Tabs>
  );
}
