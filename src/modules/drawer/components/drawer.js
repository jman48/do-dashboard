import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import { View, Text, Button } from 'native-base';
import MaterialInitials from 'react-native-material-initials/native';
import { LINKS } from '../constants';
import Row from './row';

const Drawer = ({ navigate, logout }) => (
  <SafeAreaView
    style={{ flex: 1, backgroundColor: '#136EFB' }}
    forceInset={{ top: 'always', horizontal: 'never' }}
  >
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#136EFB',
        marginBottom: 25
      }}
    >
      <MaterialInitials
        text="j.armstrong484@gmail.com"
        size={120}
        backgroundColor="white"
        color="#136EFB"
      />
    </View>
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        {LINKS.map(({ name, location }) => (
          <Row key={name} name={name} location={location} navigate={navigate} />
        ))}
      </View>
    </View>
    <View>
      <Button onPress={logout} full style={{ backgroundColor: '#136EFB' }}>
        <Text>Logout</Text>
      </Button>
    </View>
  </SafeAreaView>
);

Drawer.propTypes = {
  navigate: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default Drawer;

/**
 * Scheme DigitalOceanControllApp

 */
