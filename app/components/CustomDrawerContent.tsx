import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SmartphoneNfc } from 'lucide-react-native';

export default function CustomDrawerContent(props: any) {
  const router = useRouter();

  const handleLogout = () => {
    // Add your logout logic here
    router.replace('/signin');
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/drawer-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

      </View>

      {/* Drawer Items */}
      <DrawerContentScrollView {...props} style={styles.scrollView}>
        <TouchableOpacity 
          style={[styles.drawerItem, props.state.index === 0 && styles.activeItem]} 
          onPress={() => router.push('/(tabs)')}
        >
          <Ionicons 
            name="phone-portrait-outline" 
            size={24} 
            color={props.state.index === 0 ? '#0066FF' : '#0066FF'} 
          />
          <Text style={[styles.drawerLabel, props.state.index === 0 && styles.activeLabel]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.drawerItem} 
          onPress={() => router.push('/explore')}
        >
          <Ionicons name="grid-outline" size={24} color="#0066FF" />
          <Text style={styles.drawerLabel}>Gateway</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <Ionicons name="phone-portrait-outline" size={24} color="#0066FF" />
          <Text style={styles.drawerLabel}>New Button</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <Ionicons name="phone-portrait-outline" size={24} color="#0066FF" />
          <Text style={styles.drawerLabel}>New Button</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
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
    marginHorizontal: 10,
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
    backgroundColor: '#FFFFFF',  // White background
    borderLeftWidth: 3,
    borderLeftColor: '#FFFFFF',  // Changed to white border
  },
  activeLabel: {
    color: '#0066FF',  // Blue text for active item
  },
}); 