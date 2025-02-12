import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { House, DoorOpen, CalendarDays, UserRoundPen, SquarePlus } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function TabBar() {
  const router = useRouter();

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/(tabs)')}>
        <House size={24} color="#fff" />
        <Text style={styles.tabLabel}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/explore')}>
        <DoorOpen size={24} color="#fff" />
        <Text style={styles.tabLabel}>Gateway</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/addnew')}>
        <SquarePlus size={32} color="#FFAE00" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/button')}>
        <CalendarDays size={24} color="#fff" />
        <Text style={styles.tabLabel}>New Button</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/profile')}>
        <UserRoundPen size={24} color="#fff" />
        <Text style={styles.tabLabel}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#252525',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0,
  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
  },
  tabLabel: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});