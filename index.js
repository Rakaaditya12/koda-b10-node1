const fs = require("node:fs");

const mp3 = ".mp3";
const lagu = [
  {
    artis: "Mahalini Raharja",
    listLagu: [
      "Bawa Dia Kembali",
      "Mati Matian",
      "Sial",
      "Sisa Rasa",
      "Melawan Restu",
    ],
  },
  {
    artis: "Dewa 19",
    listLagu: ["Kangen", "Pupus", "Risalah Hati", "Separuh Nafas", "Arjuna"],
  },
  {
    artis: "Tulus",
    listLagu: [
      "Teh Hijau",
      "Hati Hati di Jalan",
      "Monokrom",
      "Manusia Kuat",
      "Gajah",
    ],
  },
];

function setLagu() {
  lagu.forEach((item) => {
    item.listLagu.forEach((lagu) => {
      const namaLagu = `${item.artis} - ${lagu}${mp3}`;
      fs.writeFileSync(namaLagu, "");
    });
  });
}
setLagu();
