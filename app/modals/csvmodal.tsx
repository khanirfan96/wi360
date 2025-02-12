import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from 'react-native';

const CSVExportModal = ({ visible, onClose } : {visible:any, onClose:any}) => {
  const [formData, setFormData] = useState({
    fromDate: '2025-01-25',
    toDate: '2025-01-30'
  });

  const handleDownload = () => {
    // Add download logic here
    console.log('Downloading CSV...');
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>CSV Data Export</Text>
          
          <View style={styles.formContainer}>
            <View style={styles.dateContainer}>
              <View style={styles.dateInput}>
                <Text style={styles.label}>From Date</Text>
                <TextInput
                  style={styles.input}
                  value={formData.fromDate}
                  onChangeText={(text) => setFormData({ ...formData, fromDate: text })}
                  placeholder="2025-01-25"
                  placeholderTextColor="#666"
                />
              </View>

              <View style={styles.dateInput}>
                <Text style={styles.label}>To Date</Text>
                <TextInput
                  style={styles.input}
                  value={formData.toDate}
                  onChangeText={(text) => setFormData({ ...formData, toDate: text })}
                  placeholder="2025-01-30"
                  placeholderTextColor="#666"
                />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.downloadButton}
                onPress={handleDownload}
              >
                <Text style={styles.downloadButtonText}>Download</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.closeButton}
                onPress={onClose}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1A1A1A',
    width: '90%',
    borderRadius: 12,
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    gap: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  dateInput: {
    flex: 1,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#252525',
    borderRadius: 8,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 14,
    height: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  downloadButton: {
    flex: 1,
    backgroundColor: '#FFB800',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default CSVExportModal;