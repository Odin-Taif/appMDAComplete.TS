import React, { useContext, useState, ReactElement, FunctionComponent, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Alert, Modal } from "react-native";
import { OurButton } from "../ReuasebleComponents";

import colors from "../../style/Colors";
const { height, width } = Dimensions.get("screen");


import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-Sgin out=-=-=-=-=-=-

//-=-=-=-=-=-=-=-=- import UserContext 
import { UserContext } from '../../../App'
import { Signout } from "../../screens";
type User = {
    id?: number;
    name?: string;
    email?: string;
};
const ProfileUser: FunctionComponent<{}> = (props): ReactElement => {
    const [username, setUsername] = useState<string>('');
    const user: User = useContext(UserContext);
    // useEffect is called after the component is initially rendered and
    // after every other render
    // Since the async method Parse.User.currentAsync is needed to
    // retrieve the current user data, you need to declare an async
    // function here and call it afterwards
    useEffect(() => {
        const getCurrentUser = async () => {
            // This condition ensures that username is updated only if needed
            if (username === '') {
                const currentUser = await user.email;
                if (currentUser !== null) {
                    setUsername(currentUser)
                }
            }
        }
        getCurrentUser();
    }, [username]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.listContainer]}
            >
                <Text style={styles.subtitle}>|={username}</Text>
            </TouchableOpacity>
            <Signout />
        </View>
    )
}
export default ProfileUser;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 1,
        backgroundColor: colors.blue,
        paddingVertical: 20,
    },
    listContainer: {
        flexDirection: "row",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        alignSelf: "center",
    },


    subtitle: {
        fontSize: 15,
        fontWeight: "700",
        color: colors.black,
    },

});
