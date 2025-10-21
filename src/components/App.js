
import './../styles/App.css';

import React from "react";


export default function App() {
  const budget = 100;

  const items = [
    { name: "Groceries", value: 80 },
    { name: "Shoes", value: 120 },
    { name: "Book", value: 50 },
    { name: "Watch", value: 150 },
  ];

  return (
    <div id="container">
      <h1>Within Budget</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              id={index + 1} // <- Added ID so Cypress can query
              style={{ color: item.value > budget ? "red" : "green" }}
            >
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
