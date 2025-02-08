import { Image, StyleSheet, Text } from 'react-native';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
     <Text style={styles.text}>Hey Hii to Index Page</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#1E1E1E',
    flex: 1
  },
  round:{
    width:200,
    height:200
  },
  text:{
    color:'white'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
