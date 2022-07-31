import React, { useEffect, useRef } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from '../../navigation/mainNav';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  Animated,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";


//===-=-=-=-=-=-=-=-=-=-=- components imports 

export function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

    </View>
  );
}
