import React from 'react';
import BackButton from '../components/BackButton';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Edit2, LogOut, Phone, Mail, User, Smartphone } from 'lucide-react-native';
import TabBar from '../components/TabBar';
import useAuth from '../context/AuthContext';
import { UserDataItem } from '../types/profile';

interface UserDataResponse {
  userData: UserDataItem[];
}


export default function ProfileScreen() {

  const { userData, logout } = useAuth();
  const userInfo = userData?.userData[0];

  const handleLogout = async() => {
    await logout();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safecontainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <BackButton onPress={() => router.back()} />
            <Text style={styles.headerTitle}>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Header Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{userInfo.usrName}</Text>
            <Text style={styles.profileEmail}>{userInfo.usrEmail}</Text>
          </View>
        </View>

        {/* Details Section */}
        <View style={styles.detailsCard}>
          <View style={styles.detailItem}>
            <View style={styles.detailLeft}>
              <User size={20} color="#4A90E2" />
              <View style={styles.detailTexts}>
                <Text style={styles.detailLabel}>Full Name</Text>
                <Text style={styles.detailValue}>{userInfo.usrName}</Text>
              </View>
            </View>
            <Edit2 size={16} color="#666" />
          </View>

          <View style={styles.detailItem}>
            <View style={styles.detailLeft}>
              <Mail size={20} color="#4A90E2" />
              <View style={styles.detailTexts}>
                <Text style={styles.detailLabel}>Email</Text>
                <Text style={styles.detailValue}>{userInfo.usrEmail}</Text>
              </View>
            </View>
            <Edit2 size={16} color="#666" />
          </View>

          <View style={styles.detailItem}>
            <View style={styles.detailLeft}>
              <Phone size={20} color="#4A90E2" />
              <View style={styles.detailTexts}>
                <Text style={styles.detailLabel}>Phone Number</Text>
                <Text style={styles.detailValue}>{userInfo.usrNo}</Text>
              </View>
            </View>
            <Edit2 size={16} color="#666" />
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Smartphone size={20} color="#4A90E2" />
            <Text style={styles.statLabel}>Total Devices: </Text>
            <Text style={styles.statHighlight}>{userInfo.iotcount}</Text>
          </View>
          <View style={styles.statItem}>
            <Smartphone size={20} color="#4A90E2" />
            <Text style={styles.statLabel}>Billing Class: </Text>
            <Text style={styles.statHighlight}>{userInfo.usrCompID}</Text>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <View style={styles.logoutContent}>
            <LogOut size={20} color="#FF3B30" />
            <Text style={styles.logoutText}>Log Out</Text>
          </View>
          <ArrowLeft size={20} color="#666" style={{ transform: [{ rotate: '180deg' }] }} />
        </TouchableOpacity>
      </SafeAreaView>
      <TabBar />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  safecontainer:{
    flex: 1,
  },
  header: {
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 12,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4A90E2',
  },
  profileInfo: {
    marginLeft: 12,
  },
  profileName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  profileEmail: {
    color: '#999',
    fontSize: 14,
  },
  detailsCard: {
    backgroundColor: '#333',
    margin: 16,
    borderRadius: 12,
    padding: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  detailLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailTexts: {
    marginLeft: 12,
  },
  detailLabel: {
    color: '#999',
    fontSize: 12,
  },
  detailValue: {
    color: 'white',
    fontSize: 14,
  },
  statsCard: {
    backgroundColor: '#333',
    margin: 16,
    borderRadius: 12,
    padding: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  statLabel: {
    color: '#999',
    marginLeft: 12,
  },
  statHighlight: {
    color: '#4A90E2',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  logoutContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    color: '#FF3B30',
    marginLeft: 12,
    fontSize: 16,
  },
});
