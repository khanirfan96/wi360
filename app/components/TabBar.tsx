import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { House, DoorOpen, CalendarDays, UserRoundPen, SquarePlus } from 'lucide-react-native';
import { useRouter, usePathname } from 'expo-router';

export default function TabBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/(tabs)')}>
        <House size={24} color={isActive('/(tabs)') ? "#FFAE00" : "#fff"} />
        <Text style={[styles.tabLabel, isActive('/(tabs)') && styles.activeLabel]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/explore')}>
        <DoorOpen size={24} color={isActive('/explore') ? "#FFAE00" : "#fff"} />
        <Text style={[styles.tabLabel, isActive('/explore') && styles.activeLabel]}>Gateway</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/addnew')}>
        <View style={styles.plusButtonContainer}>
          <SquarePlus size={24} color="#000000" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/button')}>
        <CalendarDays size={24} color={isActive('/button') ? "#FFAE00" : "#fff"} />
        <Text style={[styles.tabLabel, isActive('/button') && styles.activeLabel]}>New Button</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/profile')}>
        <UserRoundPen size={24} color={isActive('/profile') ? "#FFAE00" : "#fff"} />
        <Text style={[styles.tabLabel, isActive('/profile') && styles.activeLabel]}>Profile</Text>
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
  plusButtonContainer: {
    backgroundColor: '#FFB800',
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  activeLabel: {
    color: '#FFAE00',
  }
});