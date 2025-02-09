import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from './components/CustomDrawerContent';
import Header from './header';

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
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack initialRouteName="signin">
    //     <Stack.Screen name="signin" options={{ headerShown: false }} />
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="+not-found" />
    //   </Stack>
    //   <StatusBar style="auto" />
    // </ThemeProvider>
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
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "Home"
        }}
      />
      <Drawer.Screen
        name="gateway"
        options={{
          drawerLabel: "Gateway",
          title: "Gateway"
        }}
      />
      {/* Add more drawer screens as needed */}
    </Drawer>
  );
}
