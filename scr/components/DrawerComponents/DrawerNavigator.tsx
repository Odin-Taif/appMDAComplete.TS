
import React, { useState, createContext, useContext } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Home } from './Home';
import { Tasks } from "./Task";
//-=-=-=-=-=-=-=-=-=-=-=-=-=-= creating the drawer. 
const Drawer = createDrawerNavigator();
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-||||||||
const CustomDrawer = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      {/* -=-=-=-=-=-=-= UserProfile component-=--=-= */}

      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            backgroundColor: "#f6f6f6",
            marginBottom: 20,
          }}
        >
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: "",
      }}
      drawerContent={(props: any) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={Home} name="Home" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
