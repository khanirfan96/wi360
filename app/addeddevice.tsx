import { useRouter } from 'expo-router';
import { SmartphoneNfc } from 'lucide-react-native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackButton from './components/BackButton';
import TabBar from './components/TabBar';

type Device = {
  id: string;
  name: string;
  status: 'active' | 'inactive';
};

const devices: Device[] = [
  { id: '1', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'active' },
  { id: '2', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'inactive' },
  { id: '3', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'active' },
  { id: '4', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'inactive' },
  { id: '5', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'active' },
  { id: '6', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'inactive' },
  { id: '7', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'active' },
  { id: '8', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'inactive' },
  { id: '9', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'inactive' },
  { id: '10', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'active' },
  { id: '11', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'inactive' },
  { id: '12', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'active' },
  { id: '13', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'inactive' },
  { id: '14', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'active' },
  { id: '15', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'inactive' },
  { id: '16', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'inactive' },
  { id: '17', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'active' },
  { id: '18', name: 'FIRST POLY SNT CBLS 1ST GATE TUMEDISO', status: 'inactive' },
];


const AddedDevice = () => {
  const router = useRouter();
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => router.push('/devicepage')}>
    <View style={[styles.deviceContainer, item.status === 'inactive' && styles.inactiveDevice]}>
      <SmartphoneNfc
        size={40}
        color={item.status === 'inactive' ? 'red' : 'green'}
      />
      <View style={styles.textContainer}>
        <Text style={styles.deviceName}>{item.name}</Text>
        <Text style={styles.deviceDetails}>Milesight Button WS101</Text>
        <Text style={styles.deviceDetails}>24e124353c12f793</Text>
      </View>
    </View>
    </TouchableOpacity>


  );

  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackButton onPress={() => router.back()} />
          <Text style={styles.headerTitle}>Add Device</Text>
        </View>
      </View>
      
      <FlatList
        data={devices} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
     
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  list: {
    backgroundColor: '#1a1a1a',
    paddingTop:20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  deviceScroll: {
    flexGrow: 0,
    marginBottom: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  deviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
  },
  inactiveDevice: {
    backgroundColor: '#3a2a2a',
  },
  textContainer: {
    marginLeft: 10,
  },
  deviceName: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  deviceDetails: {
    color: '#aaa',
    fontSize: 14,
  },
});

export default AddedDevice;