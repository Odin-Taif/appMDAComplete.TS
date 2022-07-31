// here we will chose between the appstack or the authstack.
import React, { FunctionComponent, useState, useEffect, useContext, createContext } from 'react'

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Appstack from './appstack';
import Authstack from './authstack';
//===========Firebase imports================
import { auth } from "../../scr/constant/firebase";
import { onAuthStateChanged } from "firebase/auth";



//==-=-=-=create context and export-=-=-=-=-=-=-=-=-=-=-=-
export const UserContext = createContext({})
interface Props {
    user?: string;
    children: React.ReactNode;
}


export const MainNav: FunctionComponent<Props> = (props) => {
    const [user, setUser] = useState<unknown>(null);
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    // we get the signed in user and only then we display the app. 
    const userAuthoriztion = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
            setLoggedIn(true)
            // console.log(user)
        } else {
            // User is signed out
        }
    });
    return (
        <UserContext.Provider value={user}>
            <NavigationContainer>
                {/* {loggedIn ? <Appstack user={user} /> : <Authstack />} */}
            </NavigationContainer>
        </UserContext.Provider>



    )

}





