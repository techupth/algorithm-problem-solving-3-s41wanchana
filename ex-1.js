function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}
customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
sortCustomerName(customers);

// ตอบคำถามตรงนี้จ้า

// Bubble Sort มี O(n^2) เพราะมีการใช้ loop สองชั้น ซึ่ง loop แต่ละชั้นจะไล่ลำดับไปตามจำนวนข้อมูลใน Array
// ถ้าข้อมูลใน Array มีจำนวน n ตัว loop ขั้นแต่ละขั้นจะใช้เวลาเท่ากับ O(n) เมื่อ loop ซ้อนกัน จึงเป็น O(n*n) = O(n^2)
