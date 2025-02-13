import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { SmartphoneNfc, TvMinimal, AudioLines, MapPinned, LogOut } from 'lucide-react-native';
import useAuth from '../context/AuthContext';
export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('dashboard');
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout()
  }

  const handleItemPress = (route: any, itemName: string) => {
    setActiveItem(itemName);
    router.push(route);
  };

  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/drawer-logo.png')} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Drawer Items */}
      <DrawerContentScrollView {...props} style={styles.scrollView}>
        <TouchableOpacity style={[styles.drawerItem, activeItem === 'dashboard' && styles.activeItem]}
          onPress={() => handleItemPress('/(tabs)', 'dashboard')}>
          <TvMinimal size={24} color={activeItem === 'dashboard' ? '#0066FF' : '#FFAE00'} />
          <Text style={[styles.drawerLabel, activeItem === 'dashboard' && styles.activeLabel]}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.drawerItem, activeItem === 'newButton' && styles.activeItem]}
          onPress={() => handleItemPress('/explore', 'newButton')}>
          <AudioLines size={24} color={activeItem === 'newButton' ? '#0066FF' : '#FFAE00'} />
          <Text style={[styles.drawerLabel, activeItem === 'newButton' && styles.activeLabel]}>New Button</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.drawerItem, activeItem === 'devices' && styles.activeItem]}
          onPress={() => handleItemPress('/addeddevice', 'devices')}>
          <SmartphoneNfc size={24} color={activeItem === 'devices' ? '#0066FF' : '#FFAE00'} />
          <Text style={[styles.drawerLabel, activeItem === 'devices' && styles.activeLabel]}>Devices</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.drawerItem, activeItem === 'gateways' && styles.activeItem]}
          onPress={() => handleItemPress('/gateways', 'gateways')}>
          <MapPinned size={24} color={activeItem === 'gateways' ? '#0066FF' : '#FFAE00'} />
          <Text style={[styles.drawerLabel, activeItem === 'gateways' && styles.activeLabel]}>Gateways</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={24} color="#FF3B30" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  logoContainer: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  logo: {
    width: 320,
    height: 140,
  },
  scrollView: {
    flex: 1,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#2A2A2A',
  },
  drawerLabel: {
    marginLeft: 15,
    fontSize: 16,
    color: '#fff',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  logoutText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#FF3B30',
  },
  activeItem: {
    backgroundColor: '#FFFFFF', 
    borderLeftWidth: 3,
    borderRadius: 10, 
  },
  activeLabel: {
    color: '#0066FF', 
  },
}); 