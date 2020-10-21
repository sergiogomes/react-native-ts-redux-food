import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import * as Location from 'expo-location';

const screenWidth = Dimensions.get('screen').width;

export const LandingPage = () => {
  const [errorMsg, SetErrorMsg] = useState('');
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>()

  const [displayAddress, setDisplayAddress] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        SetErrorMsg('Permission to access location is not granted.');
      }
      const location: Location.LocationObject = await Location.getCurrentPositionAsync({});

      const { coords } = location
      if (coords) {
        const { latitude, longitude } = coords;
        const addressResponse: Location.LocationGeocodedAddress[] = await Location.reverseGeocodeAsync({ latitude, longitude });

        for (const item of addressResponse) {
          setAddress(item);
          const currentAddress = `${item.name}, ${item.street}, ${item.postalCode}, ${item.country}`;
          setDisplayAddress(currentAddress);
          return;
        }
      } else {
        SetErrorMsg('Could not access location.');
      }
    });
  }, []);

  const {
    container,
    navigation,
    body,
    deliveryIcon,
    addressContainer,
    addressTitle,
    addressText,
    addressError,
    footer
  } = styles;

  return (
    <View style={container}>
      <View style={navigation}>
      </View>
      <View style={body}>
        <Image
          source={require('../images/delivery_icon.png')}
          style={deliveryIcon}  
        />
        <View style={addressContainer}>
          <Text style={addressTitle}> Your Delivery Address </Text>
        </View>
        <Text style={addressText}> {displayAddress} </Text>
        <Text style={addressError}> {errorMsg} </Text>
      </View>
      <View style={footer}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(242, 242, 242)',
    flex: 1,
  },
  navigation: {
    flex: 2,
  },
  body: {
    alignItems: 'center',
    flex: 9,
    justifyContent: 'center',
  },
  deliveryIcon: {
    height: 120,
    width: 120,
  },
  addressContainer: {
    alignItems: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
    marginBottom: 10,
    padding: 5,
    width: screenWidth - 100,
  },
  addressTitle: {
    color: '#7D7D7D',
    fontSize: 22,
    fontWeight: '700',
  },
  addressText: {
    color: '#4F4F4F',
    fontSize: 20,
    fontWeight: '200',
  },
  addressError: {
    color: 'red',
    fontSize: 18,
    fontWeight: '400',
  },
  footer: {
    flex: 1,
  },
});
