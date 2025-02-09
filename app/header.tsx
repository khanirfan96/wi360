import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Menu } from 'lucide-react-native';

export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity 
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Menu size={24} color="#FFFFFF" />
            </TouchableOpacity>
            
            <Image
                source={require('../assets/images/header-logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#1A1A1A',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',  // Dark gray border to match the theme
    },
    logo: {
        height: 30,
        width: 100,
    },
});