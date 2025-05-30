import { Ionicons } from '@expo/vector-icons';
import { Mail } from 'lucide-react-native';
import React, { useState } from 'react';
import {
    ActivityIndicator, Image, SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import useAuth from './context/AuthContext';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { login, loading } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) {
            Toast.show({type: 'error', text1: 'Error', text2: 'Please enter both email and password'});
            return;
        }
        await login(email, password); 
        
    };

    return (
        <SafeAreaView style={styles.container}>
            <Toast />
            <Image source={require('../assets/images/round.png')} style={styles.round} resizeMode="contain" />
            <View style={styles.content}>
                <Image source={require('../assets/images/Major-logo.png')} style={styles.logo} resizeMode="contain" />

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        placeholderTextColor="#666"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Mail size={20} color="#666" />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons
                            name={showPassword ? "eye-outline" : "eye-off-outline"}
                            size={24}
                            color="#666"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.rememberContainer}>
                    <TouchableOpacity style={styles.rememberMe} onPress={() => setRememberMe(!rememberMe)}>
                        <View style={styles.checkbox}>
                            {rememberMe && <View style={styles.checked} />}
                        </View>
                        <Text style={styles.rememberText}>Remember me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.loginButton, loading && styles.loginButtonDisabled]} disabled={loading} onPress={handleLogin}>
                    {loading ? (
                        <ActivityIndicator color="#000" />
                    ) : (
                        <Text style={styles.loginButtonText}>Login</Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    round: {
        width: '100%',
        height: 200,
    },
    logo: {
        width: 300,
        height: 300,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: 8,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        height: 50,
        marginTop: 10,
        width: '90%',
    },
    input: {
        flex: 1,
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 15,
        color: 'white',
    },
    rememberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
        paddingHorizontal: 12
    },
    rememberMe: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CBCBCB',
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        width: 12,
        height: 12,
        backgroundColor: '#FFA500',
    },
    rememberText: {
        color: '#CBCBCB',
    },
    forgotText: {
        color: '#CBCBCB',
    },
    loginButton: {
        backgroundColor: '#FFA500',
        width: '95%',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginButtonDisabled: {
        opacity: 0.7,
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
});