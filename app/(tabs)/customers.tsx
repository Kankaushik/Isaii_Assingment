import { FlatList, StyleSheet, Text, View } from "react-native";
import { useCustomer } from "../context/CustomerContext";

export default function CustomersScreen() {
  const { customers } = useCustomer();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Pending Payments</Text>

      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text style={styles.pending}>Pending: ₹{item.pendingAmount}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    padding: 14,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#f9fbff",
    borderLeftWidth: 4,
    borderLeftColor: "#e67e22",
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  pending: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: "bold",
    color: "#c0392b",
  },
});
