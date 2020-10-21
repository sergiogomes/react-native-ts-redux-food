import React from "react"
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const screenWidth = Dimensions.get('screen').width;

export const LandingPage = () => {
  const {
    container,
    navigation,
    body,
    deliveryIcon,
    addressContainer,
    addressTitle,
    addressText,
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
        <Text style={addressText}> Waiting for Current Location </Text>
      </View>
      <View style={footer}>
      </View>
    </View>
  );
}

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
  footer: {
    flex: 1,
  }
})