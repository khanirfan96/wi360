import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from 'react-native';
import { ChevronDown, X } from 'lucide-react-native';

const DeviceControlModal = ({ visible, onClose }: { visible: any, onClose: any }) => {
    const [formData, setFormData] = useState({
        deviceName: '',
        deviceType: 'Devices',
        lat: '',
        lon: ''
    });

    const handleReset = () => {
        setFormData({
            deviceName: '',
            deviceType: 'Devices',
            lat: '',
            lon: ''
        });
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
                    {/* Form Fields */}
                    <View style={styles.formContainer}>
                        <View style={styles.header}>
                            <Text style={styles.label}>Device Name</Text>
                            <TouchableOpacity onPress={onClose}>
                                < X size={18} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Devices Poly"
                            placeholderTextColor="#666"
                            value={formData.deviceName}
                            onChangeText={(text) => setFormData({ ...formData, deviceName: text })}
                        />

                        <Text style={styles.label}>Type or select a submenu</Text>
                        <TouchableOpacity style={styles.dropdown}>
                            <Text style={styles.dropdownText}>{formData.deviceType}</Text>
                            <ChevronDown size={20} color="#FFB800" />
                        </TouchableOpacity>

                        <View style={styles.coordsContainer}>
                            <View style={styles.coordInput}>
                                <Text style={styles.label}>Lat</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="-25.000"
                                    placeholderTextColor="#666"
                                    value={formData.lat}
                                    onChangeText={(text) => setFormData({ ...formData, lat: text })}
                                    keyboardType="numeric"
                                />
                            </View>

                            <View style={styles.coordInput}>
                                <Text style={styles.label}>Lon</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="26.000"
                                    placeholderTextColor="#666"
                                    value={formData.lon}
                                    onChangeText={(text) => setFormData({ ...formData, lon: text })}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>

                        {/* Buttons */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add Device</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                                <Text style={styles.resetButtonText}>Reset</Text>
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
    formContainer: {
        gap: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    dropdown: {
        backgroundColor: '#252525',
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    dropdownText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    coordsContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    coordInput: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    addButton: {
        backgroundColor: '#FFB800',
        borderRadius: 8,
        padding: 12,
        flex: 1,
        marginRight: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resetButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 12,
        flex: 1,
        marginLeft: 8,
        alignItems: 'center',
    },
    resetButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default DeviceControlModal