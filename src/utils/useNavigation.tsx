import { useContext } from 'react';
import { NavigationContext, NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation';

export const useNavigation = () => {
  return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, NavigationParams>;
};
