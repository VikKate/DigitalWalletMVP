import 'react-native-gesture-handler';
import React from 'react';
import {useColorModeValue, useTheme} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {Dashboard, Settings} from '../screens';
import {StatusBar, NavigationContainer} from '../components';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const {colors} = useTheme();
  const tabBarActiveTintColor = colors.tabBarActiveText;
  const tabBarInactiveTintColor = colors.tabBarInactiveText;
  const tabBarBackgroundColor = useColorModeValue(
    colors.tabBarBgLight,
    colors.tabBarBgDark,
  );
  const headerTintColor = useColorModeValue(colors.darkText, colors.lightText);
  const initialRouteName = useSelector(state => state.settings.selectedRoute);
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        backBehavior="order"
        initialRouteName={initialRouteName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <IoniconsIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor,
          tabBarInactiveTintColor,
          tabBarStyle: {
            backgroundColor: tabBarBackgroundColor,
          },
          tabBarShowLabel: false,
          unmountOnBlur: false,
        })}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerStyle: {
              backgroundColor: tabBarBackgroundColor,
            },
            headerTitleAlign: 'center',
            headerTintColor,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
