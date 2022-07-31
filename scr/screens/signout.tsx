import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react'
//-=-=-=-=-=-=-=-=-=-reusabel components. 
import { Input, OurButton } from '../components/ReuasebleComponents/index'
//-=-=-=-=-=-=-=-=-=-=-=-=-=- Firebase--=-=-=-=-=-=-=|
import { auth } from '../constant/firebase';
//-===-=-=-=-=-=- style-=-=-=-=-=-=---=-=-=-=-=-=-|
import Colors from '../style/Colors'
//-=-=-=-=-=-Navigation==
import { StackActions, useNavigation } from '@react-navigation/native';
import { async } from '@firebase/util';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Signout = () => {
    const navigation = useNavigation()
    const doSignOut = async () => {
        return await auth.signOut()
            .then(async () => {
                const currentUser = await auth.currentUser;
                if (currentUser === null) {
                    Alert.alert(`Sucess!`, "You signed out! Sign in again!")
                    navigation.dispatch(StackActions.replace("signin"))
                    return true;
                }

            }).catch((error) => {
                Alert.alert(`error`, error.message);
                return false;
            })
    }
    return (
        <View style={{ marginVertical: 100 }}>
            <TouchableOpacity onPress={doSignOut}>
                <Text>Signout</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Signout

const styles = StyleSheet.create({})