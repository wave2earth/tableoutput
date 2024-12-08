// Table 1 Data
const tableData = {
    A1: 41, A2: 18, A3: 21, A4: 63, A5: 2, A6: 53, A7: 5, A8: 57, A9: 60,
    A10: 93, A11: 28, A12: 3, A13: 90, A14: 39, A15: 80, A16: 88, A17: 49,
    A18: 60, A19: 26, A20: 28
  };
  
  // Populate Table 1
  const table1 = document.getElementById("table1");
  Object.entries(tableData).forEach(([index, value]) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index}</td><td>${value}</td>`;
    table1.appendChild(row);
  });
  
  // Calculate Processed Values
  const alpha = tableData.A5 + tableData.A20; // A5 + A20
  const beta = Math.floor(tableData.A15 / tableData.A7); // A15 / A7
  const charlie = tableData.A13 * tableData.A12; // A13 * A12
  
  // Populate Table 2
  document.getElementById("alpha").textContent = alpha;
  document.getElementById("beta").textContent = beta;
  document.getElementById("charlie").textContent = charlie;
  