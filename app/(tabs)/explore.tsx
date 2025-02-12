import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import BackButton from '../components/BackButton';
import { useRouter } from 'expo-router';
import TabBar from '../components/TabBar';

export default function GatewayScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    gateId: '',
    description: '',
    latitude: '',
    longitude: '',
    altitude: '',
  });

  const handleReset = () => {
    setFormData({
      name: '',
      gateId: '',
      description: '',
      latitude: '',
      longitude: '',
      altitude: '',
    });
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackButton onPress={() => router.back()} />
          <Text style={styles.headerTitle}>Add Gateway</Text>
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.infoText}>
          If you have a LoRaWAN compatible device not showing here, please mail{' '}
          <Text style={styles.link}>support@wi360.net</Text> with device details then we can add it to the system.
        </Text>


        <View style={styles.formRow}>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Gateway Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Gateway Name"
              placeholderTextColor="#666"
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
          </View>

          <View style={styles.inputWrap}>
            <Text style={styles.label}>Gateway ID</Text>
            <TextInput
              style={styles.input}
              placeholder="----------------"
              placeholderTextColor="#666"
              value={formData.gateId}
              onChangeText={(text) => setFormData({ ...formData, gateId: text })}
            />
            <Text style={styles.helperText}>DevEUI can be found on the device or in the provided leaflet.</Text>
          </View>
        </View>

        <View >
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            placeholderTextColor="#666"
            value={formData.description}
            onChangeText={(text) => setFormData({ ...formData, description: text })}
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
      </SafeAreaView>
      <TabBar />
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
    flex:1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    padding: 6
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
  infoText: {
    color: '#AAAAAA',
    fontSize: 14,
    marginVertical: 10,
  },
  link: {
    color: '#FFB800',
  },
  formRow: {
    flexDirection: 'row',
    gap: 16,
    marginVertical: 16,
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
  form: {
    padding: 16,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
  },
  disabledInput: {
    backgroundColor: '#1A1A1A',
    color: '#666666',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginTop: 'auto',
    gap: 180,
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