import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import CustomDrawerContent from './components/CustomDrawerContent';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Drawer
        screenOptions={({ route }) => ({
          header: () => <Header />,
          headerShown: route.name !== 'signin',
          drawerStyle: {
            backgroundColor: '#1a1a1a',
            width: 280,
          },
        })}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
      </Drawer>
    </AuthProvider>

  );
}
