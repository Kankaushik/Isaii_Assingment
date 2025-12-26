import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Invoice = {
  id: string;
  item: string;
  quantity: number;
  rate: number;
  total: number;
};

export default function InvoiceScreen() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const addInvoice = () => {
    if (!item || !quantity || !rate) return;

    const total = Number(quantity) * Number(rate);

    const newInvoice: Invoice = {
      id: Date.now().toString(),
      item,
      quantity: Number(quantity),
      rate: Number(rate),
      total,
    };

    setInvoices([...invoices, newInvoice]);

    // clear input fields
    setItem("");
    setQuantity("");
    setRate("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Invoice</Text>

      <TextInput
        placeholder="Item Name"
        style={styles.input}
        value={item}
        onChangeText={setItem}
      />

      <TextInput
        placeholder="Quantity"
        keyboardType="numeric"
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
      />

      <TextInput
        placeholder="Rate"
        keyboardType="numeric"
        style={styles.input}
        value={rate}
        onChangeText={setRate}
      />

      <TouchableOpacity style={styles.button} onPress={addInvoice}>
        <Text style={styles.buttonText}>Add Invoice</Text>
      </TouchableOpacity>

      <Text style={styles.subTitle}>Invoices</Text>

      <FlatList
        data={invoices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.invoiceCard}>
            <Text>Item: {item.item}</Text>
            <Text>Qty: {item.quantity}</Text>
            <Text>Rate: ₹{item.rate}</Text>
            <Text style={{ fontWeight: "bold" }}>Total: ₹{item.total}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  subTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#2e86de",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
  invoiceCard: {
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
  },
});
