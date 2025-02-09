import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

interface BackButtonProps {
  onPress: () => void;
  color?: string;
}

export default function BackButton({ onPress, color = '#FFFFFF' }: BackButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <ChevronLeft size={24} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
  },
}); 