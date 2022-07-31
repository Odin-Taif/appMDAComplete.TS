import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState, useContext } from 'react';
import React, { FunctionComponent } from 'react'
import { OurButton } from '../components/ReuasebleComponents';

import { app, auth, db } from '../constant/firebase';
import { onAuthStateChanged } from "firebase/auth";
import DrawerNavigator from "../components/DrawerComponents/DrawerNavigator";
import { UserContext } from "../navigation/mainNav"
const MainPage: FunctionComponent = () => {




  const signOut = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        auth.signOut()
        console.log("logged out now")
      } else {

      }
    })
  }

  return (


    <>
      <DrawerNavigator />
    </>

  )
}

export default MainPage;

const styles = StyleSheet.create({


})