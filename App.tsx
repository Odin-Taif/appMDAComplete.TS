import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import React, {
  FunctionComponent,
  ReactElement,
  useState,
  createContext,
  useEffect,
} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Authstack from "./scr/navigation/AuthStack";
import AppStack from './scr/navigation/AppStack'

//=--=-=-=-=-=-=-=-=-=-=-=-=Firebase imports||||
import { auth } from "./scr/constant/firebase";
import { onAuthStateChanged } from "firebase/auth";
///=-=-=-=-=-componentes imports
import { Home } from "./scr/screens/index";


interface Props {
  user?: string;
  children: React.ReactNode;
}
//==-=-=-=create context and export-=-=-=-=-=-=-=-=-=-=-=-
export const UserContext = createContext({});
//-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
const App: FunctionComponent<{}> = (props): ReactElement => {
  const [user, setUser] = useState<unknown>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);


  // we get the signed in user and only then we display the app.
  useEffect(() => {
    const userAuthoriztion = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const currentUser = await user.email;
        setUser(user);
        setLoggedIn(true);
      } else {
        // Alert.alert(`Error`, "Please sigin in or sign up!")
      }
    });
    userAuthoriztion();
  }, [loggedIn]);
  return (
    <>
      <UserContext.Provider value={user}>
        <NavigationContainer>
          {loggedIn ? <AppStack /> : <Authstack />}
        </NavigationContainer>
      </UserContext.Provider>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
