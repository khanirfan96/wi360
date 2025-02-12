import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from 'react-native';
import { ChevronDown, X } from 'lucide-react-native';

const NotificationModal = ({ visible, onClose }: { visible: any, onClose: any }) => {
    const [activeTab, setActiveTab] = useState('addContact'); // 'addContact' or 'contactList'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        contactType: 'Please select in dropdowns'
    });

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Device Notification</Text>
                        <TouchableOpacity onPress={onClose}>
                            < X size={18} color={'white'} />
                        </TouchableOpacity>
                    </View>

                    {/* Tab Buttons */}
                    <View style={styles.tabContainer}>
                        <TouchableOpacity
                            style={[styles.tabButton, activeTab === 'addContact' && styles.activeTabButton]}
                            onPress={() => setActiveTab('addContact')}
                        >
                            <Text style={[styles.tabText, activeTab === 'addContact' && styles.activeTabText]}>
                                Add Contact
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, activeTab === 'contactList' && styles.activeTabButton]}
                            onPress={() => setActiveTab('contactList')}
                        >
                            <Text style={[styles.tabText, activeTab === 'contactList' && styles.activeTabText]}>
                                Contact List
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Form Fields */}
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#666"
                            value={formData.name}
                            onChangeText={(text) => setFormData({ ...formData, name: text })}
                        />

                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Palgunasuggu@gmail.com"
                            placeholderTextColor="#666"
                            value={formData.email}
                            onChangeText={(text) => setFormData({ ...formData, email: text })}
                            keyboardType="email-address"
                        />

                        <Text style={styles.label}>Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="1234567890"
                            placeholderTextColor="#666"
                            value={formData.number}
                            onChangeText={(text) => setFormData({ ...formData, number: text })}
                            keyboardType="phone-pad"
                        />
                        <Text style={styles.helperText}>This number will be used for Voice and SMS</Text>

                        <Text style={styles.label}>Contact Type</Text>
                        <TouchableOpacity style={styles.dropdown}>
                            <Text style={styles.dropdownText}>{formData.contactType}</Text>
                            <ChevronDown size={20} color="#FFB800" />
                        </TouchableOpacity>
                        <Text style={styles.errorText}>The selected role shall have to sign up and activate</Text>

                        <TouchableOpacity style={styles.applyButton}>
                            <Text style={styles.applyButtonText}>Apply Changes</Text>
                        </TouchableOpacity>

                        <Text style={styles.footerText}>
                            **Contact will have to sign up and activate{'\n'}
                            Telegram with Wireless 360.
                        </Text>
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
        marginBottom: 16,
    },
    tabContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabButton: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    activeTabButton: {
        backgroundColor: '#FFB800',
    },
    tabText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    activeTabText: {
        color: '#000000',
    },
    formContainer: {
        gap: 12,
    },
    label: {
        color: '#FFFFFF',
        fontSize: 14,
        marginBottom: 4,
    },
    input: {
        backgroundColor: '#252525',
        borderRadius: 8,
        padding: 12,
        color: '#FFFFFF',
        fontSize: 14,
        height: 40,
    },
    helperText: {
        color: '#666',
        fontSize: 12,
        marginTop: -8,
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
        color: '#666',
        fontSize: 14,
    },
    errorText: {
        color: '#FF0000',
        fontSize: 12,
        marginTop: -8,
    },
    applyButton: {
        backgroundColor: '#FFB800',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        marginTop: 8,
    },
    applyButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerText: {
        color: '#666',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 8,
    }
});

export default NotificationModal
