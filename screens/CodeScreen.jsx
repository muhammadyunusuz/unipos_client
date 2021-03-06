import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

export default function CodeScreen({ navigation }) {
	const sendCode = () => {
		navigation.pop();
		navigation.replace("RegistrationScreen");
	};

	return (
		<View style={styles.container}>
			<Input placeholder="Sizga kelgan kod" keyboard="numpad" />

			<Button onPress={sendCode} style={styles.button}>
				<Text style={styles.buttonText}>Tasdiqlash</Text>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},
	button: {
		marginTop: 20,
		backgroundColor: "#000000",
	},
	buttonText: {
		color: "#ffffff",
		textAlign: "center",
		fontWeight: "500",
		fontSize: 17,
	},
});
