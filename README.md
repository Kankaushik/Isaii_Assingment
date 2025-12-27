# Retail Management Application

This project is a simple "Retail Management mobile application" developed using "React Native and Expo".

The application is designed to handle basic retail operations such as invoice creation, stock management, and tracking customer pending amounts. The focus of this project is on implementing correct business logic rather than adding excessive features.

---

## Purpose of the Application

The objective of this application is to demonstrate how common retail activities can be managed digitally in a structured manner.

The application shows how:

- Stock changes when a sale takes place
- Customer dues are updated after billing
- Data can be preserved even after the application is closed

---

## Key Features

- Creation of invoices
- Automatic reduction of stock after billing
- Tracking of customer pending (due) amounts
- Persistent data storage using local storage
- Simple tab-based navigation for ease of use

---

## Working of the Application

- "Invoice Module"

  - Allows entry of item, quantity, rate, and customer name
  - Automatically calculates the total amount

- "Stock Module"

  - Displays available stock
  - Updates stock automatically after an invoice is created

- "Customer Module"
  - Displays customer details and pending amount
  - Pending amount increases based on invoice total

---

## Technologies Used

- React Native
- Expo Router
- Context API
- AsyncStorage

---

## Data Persistence

The application uses "AsyncStorage" to store data locally.  
This ensures that stock details and customer pending amounts are not lost when the application is restarted.

---

## Scope of the Assignment

Some parts of the assignment, such as dealer management, alerts, reports, and AI-based features, are mentioned as advanced or conceptual modules.

In this project, the emphasis has been placed on implementing the "core retail workflow" correctly. The remaining modules are considered as "future scope", as permitted by the assignment guidelines.

---

## Future Enhancements

- Dropdown selection for items and customers
- Validation to prevent selling more items than available stock
- Customer-wise invoice history
- Export of reports in PDF or CSV format

---

## Conclusion

This project demonstrates a clear understanding of retail business logic, state management, and data persistence in a mobile application. It is suitable for academic evaluation and internship-level assessment.
