import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';
import art from './Images/art.png';
import mile from './Images/mile.png';
import pier from './Images/pier.png';
import water from './Images/water.png';
import willis from './Images/willis.png';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function Art({ }) {
  return (
    <View style={styles.container}>
    <Image style={styles.images} source={art} />
    <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync('https://www.artic.edu/')}
      >
        More Information
        </Button>
    </View>
  );
}

function Willis({ }) {
  return (
    <View style={styles.container}>
    <Image style={styles.images} source={willis} />
    <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync('https://www.willistower.com/')}
      >
        More Information
        </Button>
    </View>
  );
}

function Water({ }) {
  return (
    <View style={styles.container}>
    <Image style={styles.images} source={water} />
    <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')}
      >
        More Information
        </Button>
    </View>
  );
}

function Mile({ }) {
  return (
    <View style={styles.container}>
    <Image style={styles.images} source={mile} />
    <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync('https://www.themagnificentmile.com/')}
      >
        More Information
        </Button>
    </View>
  );
}

function Pier({ }) {
  return (
    <View style={styles.container}>
    <Image style={styles.images} source={pier} />
    <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync('https://navypier.org/')}
      >
        More Information
        </Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institute of Chicago" component={Art} />
        <Drawer.Screen name="Magnificent Mile" component={Mile} />
        <Drawer.Screen name="Navy Pier" component={Pier} />
        <Drawer.Screen name="Water Tower" component={Water} />
        <Drawer.Screen name="Willis Tower" component={Willis} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
  images: {
    height: 480,
    width: 320
  },

});
