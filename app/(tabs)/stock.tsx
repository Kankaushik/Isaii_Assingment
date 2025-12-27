import { FlatList, StyleSheet, Text, View } from "react-native";

type StockItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const stockData: StockItem[] = [
  { id: "1", name: "Rice (1kg)", price: 60, quantity: 25 },
  { id: "2", name: "Wheat Flour (1kg)", price: 55, quantity: 8 },
  { id: "3", name: "Sugar (1kg)", price: 45, quantity: 15 },
  { id: "4", name: "Cooking Oil (1L)", price: 140, quantity: 5 },
];

export default function StockScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stock Management</Text>

      <FlatList
        data={stockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const lowStock = item.quantity <= 10;

          return (
            <View style={[styles.card, lowStock && styles.lowStockCard]}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>Price: ₹{item.price}</Text>
              <Text style={[styles.quantity, lowStock && styles.lowStockText]}>
                Available: {item.quantity}
              </Text>

              {lowStock && <Text style={styles.warning}>⚠ Low Stock</Text>}
            </View>
          );
        }}
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
    borderLeftColor: "#2ecc71",
    elevation: 2,
  },
  lowStockCard: {
    borderLeftColor: "#e74c3c",
    backgroundColor: "#fff5f5",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  quantity: {
    marginTop: 4,
    fontWeight: "500",
  },
  lowStockText: {
    color: "#e74c3c",
    fontWeight: "bold",
  },
  warning: {
    marginTop: 6,
    color: "#e74c3c",
    fontWeight: "bold",
  },
});
