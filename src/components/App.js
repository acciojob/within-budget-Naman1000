import React, { useState } from "react";
import './../styles/App.css';


export default function App() {
  
  const [price ,setPrice ] = useState(0);

  const items = [
    { name: "Groceries", value: 80 },
    { name: "Shoes", value: 120 },
    { name: "Book", value: 50 },
    { name: "Watch", value: 150 },
  ];

  return (
    <div id="container">
      <h1>Within Budget</h1>
      <input type = "number"
      value = {price} 
      onChange = {(e) => setPrice(e.target.value)}/>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}
            >
            <td>{item.name}</td>
              <td style={{
                color: item.value > price ? "red" : "green",
              }}>{item.value}</td>
                
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
