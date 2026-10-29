// //JavaScript

// const daftarBarang = [
//     "Laptop",
//     "Mouse",
//     "Keyboard",
//     "Monitor"
// ];

// console.log(daftarBarang[0]); // Output: Laptop
// console.log(daftarBarang[1]); // Output: Mouse
// console.log(daftarBarang[2]); // Output: Keyboard
// console.log(daftarBarang[3]); // Output: Monitor
// console.log(daftarBarang.length); // Output: 4

// const barang = {
//     kode: "INV-001",
//     nama: "Laptop",
//     stok: 10,
//     harga: 7500000
// };

// console.log(`Nama: ${barang.kode}`); // Output: INV-001
// console.log(`Nama: ${barang.nama}`); // Output: Laptop
// console.log(`Stok: ${barang.stok}`); // Output: 10
// console.log(`Harga: ${barang.harga}`);  // Output: 7500000


// const stok = 0;
// const sattus =  "habis";

// if (stok === 0 || sattus === "habis") {
//     console.log("Periksa ketersediaan barang")
// }

// for (let i = 10; i >= 1; i--) {
//     console.log("perulangan ke-", i);
// }

// for (let i = 10; i >= 1; i--) {
//     if (i % 2 === 0) {
//         console.log("perulangan ke-", i, "→ genap");
//     } else {
//         console.log("perulangan ke-", i, "→ ganjil");
//     }
// }

const daftarBarang = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];

for (let i = 0; i <daftarBarang.length; i++) {
    console.log(daftarBarang[i]);
}
