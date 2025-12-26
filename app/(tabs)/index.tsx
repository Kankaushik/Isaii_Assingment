import { router } from "expo-router";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Retail Management</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/invoice")}
      >
        <Text style={styles.cardText}>Create Invoice</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Customers</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Stock Management</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f8",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
