import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => {
                // @ts-ignore
                navigation.openDrawer();
            }}>
                <Ionicons name="menu" size={30} color="#fff" />
            </TouchableOpacity>
            <Image 
                source={require('../../assets/images/header-logo.png')} 
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1a1a1a',
        padding: 16,
        height: 60,
    },
    logo: {
        height: 40,
        width: 200,
        marginLeft: 30,
    },
});