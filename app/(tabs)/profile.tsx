import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Edit2, LogOut, Phone, Mail, User, Smartphone } from 'lucide-react-native';

export default function ProfileScreen() {

  const handleLogout = () => {
    router.replace('/signin');
  };

  return(
  <SafeAreaView style={styles.container}>
     {/* Header */}
     <View style={styles.header}>
       <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
         <ArrowLeft color="white" size={24} />
         <Text style={styles.headerTitle}>Profile</Text>
       </TouchableOpacity>
     </View>

     {/* Profile Header Card */}
     <View style={styles.profileCard}>
       <View style={styles.avatar} />
       <View style={styles.profileInfo}>
         <Text style={styles.profileName}>Palguna Suggu</Text>
         <Text style={styles.profileEmail}>Palguna@gmail.com</Text>
       </View>
     </View>

     {/* Details Section */}
     <View style={styles.detailsCard}>
       <View style={styles.detailItem}>
         <View style={styles.detailLeft}>
           <User size={20} color="#4A90E2" />
           <View style={styles.detailTexts}>
             <Text style={styles.detailLabel}>Full Name</Text>
             <Text style={styles.detailValue}>Palguna Suggu</Text>
           </View>
         </View>
         <Edit2 size={16} color="#666" />
       </View>

       <View style={styles.detailItem}>
         <View style={styles.detailLeft}>
           <Mail size={20} color="#4A90E2" />
           <View style={styles.detailTexts}>
             <Text style={styles.detailLabel}>Email</Text>
             <Text style={styles.detailValue}>palguna@gmail.com</Text>
           </View>
         </View>
         <Edit2 size={16} color="#666" />
       </View>

       <View style={styles.detailItem}>
         <View style={styles.detailLeft}>
           <Phone size={20} color="#4A90E2" />
           <View style={styles.detailTexts}>
             <Text style={styles.detailLabel}>Phone Number</Text>
             <Text style={styles.detailValue}>408-841-0928</Text>
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
         <Text style={styles.statHighlight}>23</Text>
       </View>
       <View style={styles.statItem}>
         <Smartphone size={20} color="#4A90E2" />
         <Text style={styles.statLabel}>Billing Class: </Text>
         <Text style={styles.statHighlight}>None</Text>
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
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#1A1A1A',
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
   marginBottom: 12,
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
