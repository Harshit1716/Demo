import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// import {Account, Complaints, Dashboard, Home, Search} from '../screens';
// import Dashboard from '../screens/allScreens/DashBoard';
import {COLORS, ICONS, SIZES} from '../resources';
import {FirstScreen} from '../screens';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.HOME_TAB_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
      <Tab.Screen
        name="Complaints"
        component={FirstScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.LEAGUE_TAB_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
      <Tab.Screen
        name="Search"
        component={FirstScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.SEARCH_TAB_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
      <Tab.Screen
        name="LeaderBoard"
        component={FirstScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.LEADER_TAB_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.ACCOUNT_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
