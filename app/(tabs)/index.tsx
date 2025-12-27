import { useRouter } from "expo-router";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Retail Management</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/invoice")}
      >
        <Text style={styles.cardText}>Create Invoice</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/customers")}
      >
        <Text style={styles.cardText}>Customers</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/stock")}
      >
        <Text style={styles.cardText}>Stock Management</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  cardText: { fontSize: 16, fontWeight: "600" },
});
