import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native'
import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react'
//-=-=-=-=-=-=-=-=-=-reusabel components. 
import { Input, OurButton } from '../components/ReuasebleComponents/index'
//-=-=-=-=-=-=-=-=-=-=-=-=-=- Firebase--=-=-=-=-=-=-=|
import { auth } from '../constant/firebase';
//-===-=-=-=-=-=- style-=-=-=-=-=-=---=-=-=-=-=-=-|
import colors from '../style/Colors'
//-=-=-=-=-=-Navigation==
import { StackActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get("screen");

const Signout = () => {
    const navigation = useNavigation()
    const doSignOut = async () => {
        return await auth.signOut()
            .then(async () => {
                const currentUser = await auth.currentUser;
                if (currentUser === null) {
                    Alert.alert(`Sucess!`, "You signed out! Sign in again!")
                    navigation.dispatch(StackActions.replace("Sign In"))
                    return true;
                }
            }).catch((error) => {
                Alert.alert(`error`, error.message);
                return false;
            })
    }
    return (
        <View>
            <TouchableOpacity style={styles.signoutBtn} onPress={doSignOut}>
                <Text style={styles.textBtn}>Signout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signout

const styles = StyleSheet.create({
    signoutBtn: {
        width: width / 2,
        backgroundColor: colors.black,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        padding: 10,
        marginVertical: 10,
        borderRadius: 3,
    },
    textBtn: {
        color: colors.white
    }
})