import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FunctionComponent } from 'react'
const { height, width } = Dimensions.get("screen")
//-=-=-=-=-=-=-=- style import-=-=-=-=-=
import colors from '../../style/Colors';

interface Props {
    title: string;
    onPress: () => void;
}
const OurButton: FunctionComponent<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default OurButton;

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        backgroundColor: colors.black,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        padding: 10,
        marginVertical: 10,
        borderRadius: 3,
    },
    text: {
        color: colors.white
    }
})