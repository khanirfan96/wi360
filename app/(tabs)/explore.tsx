import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import BackButton from '../components/BackButton';
import { useRouter } from 'expo-router';

export default function GatewayScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    latitude: '',
    longitude: '',
    altitude: '',
  });

  const handleReset = () => {
    setFormData({
      name: '',
      description: '',
      latitude: '',
      longitude: '',
      altitude: '',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackButton onPress={() => router.back()} />
          <Text style={styles.headerTitle}>Add Gateway</Text>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gateway Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#666"
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gateway ID</Text>
            <TextInput
              style={[styles.input, styles.disabledInput]}
              placeholder="----------------"
              placeholderTextColor="#666"
              editable={false}
            />
            <Text style={styles.helperText}>Gateway ID can be found on a sticker on the AP or in the device config.</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Description ....."
            placeholderTextColor="#666"
            multiline
            value={formData.description}
            onChangeText={(text) => setFormData({ ...formData, description: text })}
          />
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
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
          <View style={styles.inputContainer}>
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

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Altitude</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00,000"
            placeholderTextColor="#666"
            value={formData.altitude}
            onChangeText={(text) => setFormData({ ...formData, altitude: text })}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 16,
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
  disabledInput: {
    backgroundColor: '#1A1A1A',
    color: '#666666',
  },
  helperText: {
    color: '#666666',
    fontSize: 11,
    marginTop: 4,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    padding: 16,
    gap: 12,
    marginTop: 'auto',
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