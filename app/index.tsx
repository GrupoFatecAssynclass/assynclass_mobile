import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {router.push({pathname: "login", params: {name: "X"}})}} style={{alignSelf: "center"}}><Text>Ir para login</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})