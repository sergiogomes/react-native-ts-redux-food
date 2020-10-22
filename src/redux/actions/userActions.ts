import { Dispatch } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { LocationGeocodedAddress } from 'expo-location';
   
import { BASE_URL } from '../../utils';

export interface UpdateLocationAction {
  readonly type: 'ON_UPDATE_LOCATION',
  payload: LocationGeocodedAddress
};

export interface UserErrorAction {
  readonly type: 'ON_USER_ERROR',
  payload: any
};

export type UserAction = UpdateLocationAction | UserErrorAction;

export const onUpdateLocation = ( location: LocationGeocodedAddress ) => {
  return async ( dispatch: Dispatch<UserAction> ) => {
    try {
      const locationString = JSON.stringify(location);
      await AsyncStorage.setItem('user_location', locationString);
      dispatch({
        type: 'ON_UPDATE_LOCATION',
        payload: location,
      });
    } catch (error) {
      dispatch({
        type: 'ON_UPDATE_LOCATION',
        payload: error,
      });
    }
  };
};
