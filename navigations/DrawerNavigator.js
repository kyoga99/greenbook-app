import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Theme } from "../utils";
import { WithScrollView } from "./helper";
import CustomDrawer from "./CustomDrawer";
import CustomHeader from "./CustomHeader";
import BottomTabNavigator from "./BottomTabNavigator";
import Donate from "../screens/Donate";
import Shop from "../screens/Shop";
import About from "../screens/About";
import Updates from "../screens/Updates";
import Team from "../screens/Team";
import Process from "../screens/Process";
import Press from "../screens/Press";
import Testimonials from "../screens/Testimonials";
import Contact from "../screens/Contact";
import FAQ from "../screens/FAQ";
import Volunteers from "../screens/Volunteers";
import Volunteer from "../screens/Volunteer";
import Sponsors from "../screens/Sponsors";
import Collapsible from "react-native-collapsible";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { CustomDrawerContent } from './MenuItems';
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator
    // drawerContent={CustomDrawer} <-- is not being used by the app so I commented it out so it doesn't affect performance
    drawerPosition="right"
    drawerStyle={{
      backgroundColor: "white",
    }}
    screenOptions={(props) => ({
      header: () => <CustomHeader dark {...props} />,
    })}
    drawerContentOptions={{
      inactiveTintColor: "white",
      activeTintColor: "black",
      activeBackgroundColor: "white",
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Drawer.Screen name="Donate" component={WithScrollView(Donate)} />
    <Drawer.Screen name="Store" component={WithScrollView(Shop)} />
    <Drawer.Screen name="Sponsor Us" component={WithScrollView(Sponsors)} />
    <Drawer.Screen name="About" component={WithScrollView(About)} />
    <Drawer.Screen name="Updates" component={WithScrollView(Updates)} />
    <Drawer.Screen name="Team" component={WithScrollView(Team)} />
    <Drawer.Screen name="Volunteers" component={WithScrollView(Volunteers)} />
    <Drawer.Screen name="Process" component={WithScrollView(Process)} />
    <Drawer.Screen name="Press" component={WithScrollView(Press)} />
    <Drawer.Screen
      name="Testimonials"
      component={WithScrollView(Testimonials)}
    />
    <Drawer.Screen name="FAQ" component={WithScrollView(FAQ)} />
    <Drawer.Screen name="Contact" component={WithScrollView(Contact)} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
