import { StyleSheet, View } from 'react-native';
import TabBar from '../components/TabBar';

export default function NewButtonScreen() {
  return (
    <View style={styles.container}>
     <TabBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#1A1A1A',
  }
});
