import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import BackButton from '../components/BackButton';
import { useRouter } from 'expo-router';
import data from './data.json';

type Device = {
  name: string;
  type: string;
  selected: boolean;
  image: string; 
}

interface DeviceData {
  devices: Device[];
}

export default function AddNew() {
  const router = useRouter();
  const deviceData = data as DeviceData;
  const [selectedDevice, setSelectedDevice] = useState(deviceData.devices[0].name);
  const [formData, setFormData] = useState({
    deviceName: '',
    devEUI: '',
    appKey: '',
    latitude: '',
    longitude: '',
  });

  const handleReset = () => {
    setFormData({
      deviceName: '',
      devEUI: '',
      appKey: '',
      latitude: '',
      longitude: '',
    });
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackButton onPress={() => router.back()} />
          <Text style={styles.headerTitle}>Add Device</Text>
        </View>
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Select Device to Add</Text>

        <ScrollView showsVerticalScrollIndicator={true} style={styles.deviceScroll}>
          {deviceData.devices.map((device, index) => (
            <TouchableOpacity
              key={index}
              style={[

                styles.deviceItem,
                selectedDevice === device.name && styles.selectedDeviceItem,
              ]}
              onPress={() => setSelectedDevice(device.name)}
            >
              <View style={styles.deviceInfo}>
                <View style={styles.radioCircle}>
                  {selectedDevice === device.name && <View style={styles.selectedCircle} />}
                </View>
                <Image source={{ uri: device.image }}  style={styles.deviceImage} />
                <View>
                  <Text style={styles.deviceName}>{device.name}</Text>
                  <Text style={styles.deviceType}>{device.type}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.infoText}>
          If you have a LoRaWAN compatible device not showing here, please mail{' '}
          <Text style={styles.link}>support@wi360.net</Text> with device details then we can add it to the system.
        </Text>

        <View style={styles.formRow}>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Device Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Device Name"
              placeholderTextColor="#666"
              value={formData.deviceName}
              onChangeText={(text) => setFormData({ ...formData, deviceName: text })}
            />
          </View>

          <View style={styles.inputWrap}>
            <Text style={styles.label}>DevEUI</Text>
            <TextInput
              style={styles.input}
              placeholder="DevEUI"
              placeholderTextColor="#666"
              value={formData.devEUI}
              onChangeText={(text) => setFormData({ ...formData, devEUI: text })}
            />
            <Text style={styles.helperText}>DevEUI can be found on the device or in the provided leaflet.</Text>
          </View>
        </View>

        <View >
          <Text style={styles.label}>Application Key</Text>
          <TextInput
            style={styles.input}
            placeholder="----------------"
            placeholderTextColor="#666"
            value={formData.appKey}
            onChangeText={(text) => setFormData({ ...formData, appKey: text })}
          />
        </View>

        <View style={styles.formRow}>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Latitude</Text>
            <TextInput
              style={styles.input}
              placeholder="-24.000"
              placeholderTextColor="#666"
              value={formData.latitude}
              onChangeText={(text) => setFormData({ ...formData, latitude: text })}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputWrap}>
            <Text style={styles.label}>Longitude</Text>
            <TextInput
              style={styles.input}
              placeholder="25.000"
              placeholderTextColor="#666"
              value={formData.longitude}
              onChangeText={(text) => setFormData({ ...formData, longitude: text })}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Device</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  container: {
    paddingHorizontal: 16,
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
    // marginLeft: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252525',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  selectedDeviceItem: {
    borderColor: '#FFB800',
    borderWidth: 2,
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  selectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#FFB800',
  },
  deviceImage: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  deviceName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deviceType: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  infoText: {
    color: '#AAAAAA',
    fontSize: 10,
    marginBottom: 10,
  },
  link: {
    color: '#FFB800',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  formRow: {
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 8
  },
  inputWrap: {
    flex: 1,
  },
  label: {
    color: '#FFFFFF',
    marginBottom: 6,
    fontSize: 13,
  },
  input: {
    backgroundColor: '#252525',
    borderRadius: 4,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 14,
    height: 40,
  },
  helperText: {
    color: '#666',
    fontSize: 8,
    marginTop: 6,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginTop: 'auto',
    gap: 200,
  },
  addButton: {
    backgroundColor: '#FFB800',
    borderRadius: 4,
    padding: 14,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 14,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
