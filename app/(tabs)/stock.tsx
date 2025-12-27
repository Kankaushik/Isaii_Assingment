import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useStock } from "../context/StockContext";

export default function StockScreen() {
  const { stock, resetStock } = useStock();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stock Management</Text>

      <FlatList
        data={stock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const lowStock = item.quantity <= 10;

          return (
            <View style={[styles.card, lowStock && styles.lowStockCard]}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={[styles.qty, lowStock && styles.lowText]}>
                Available: {item.quantity}
              </Text>
              {lowStock && <Text style={styles.warning}>⚠ Low Stock</Text>}
            </View>
          );
        }}
      />

      {/* DEV RESET BUTTON */}
      <TouchableOpacity style={styles.resetBtn} onPress={resetStock}>
        <Text style={styles.resetText}>Reset Stock (Dev)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },

  card: {
    padding: 14,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#f9fbff",
    borderLeftWidth: 4,
    borderLeftColor: "#2ecc71",
  },

  lowStockCard: {
    borderLeftColor: "#e74c3c",
    backgroundColor: "#fff5f5",
  },

  name: { fontSize: 16, fontWeight: "600" },
  qty: { marginTop: 6, fontWeight: "500" },

  lowText: { color: "#e74c3c", fontWeight: "bold" },
  warning: { color: "#e74c3c", marginTop: 4 },

  resetBtn: {
    marginTop: 20,
    padding: 14,
    backgroundColor: "#e67e22",
    borderRadius: 8,
    alignItems: "center",
  },
  resetText: { color: "#fff", fontWeight: "bold" },
});
