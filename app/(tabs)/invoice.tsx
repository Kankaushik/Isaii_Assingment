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

    const qty = Number(quantity);
    const price = Number(rate);

    if (isNaN(qty) || isNaN(price)) return;

    const newInvoice: Invoice = {
      id: Date.now().toString(),
      item,
      quantity: qty,
      rate: price,
      total: qty * price,
    };

    setInvoices((prev) => [...prev, newInvoice]);

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

      {invoices.length === 0 && (
        <Text style={styles.emptyText}>No invoices added yet</Text>
      )}

      <FlatList
        data={invoices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.invoiceCard} activeOpacity={0.7}>
            <Text style={styles.invoiceItem}>Item: {item.item}</Text>
            <Text>Qty: {item.quantity}</Text>
            <Text>Rate: ₹{item.rate}</Text>
            <Text style={styles.invoiceTotal}>Total: ₹{item.total}</Text>
          </TouchableOpacity>
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
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#dd9052ff",
    borderLeftWidth: 6,
    borderLeftColor: "#d32b05ff",
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#dd9052ff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  emptyText: {
    textAlign: "center",
    color: "#777",
    marginTop: 10,
  },
  invoiceCard: {
    padding: 14,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#e9e4deff",
    borderLeftWidth: 4,
    borderLeftColor: "#d32b05ff",
    elevation: 9,
  },
  invoiceItem: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  invoiceTotal: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: "bold",
    color: "#921414ff",
  },
});
