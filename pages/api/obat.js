// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json(
        [
            {
                "id": "1", "nama": "Acarbose", "ukuran": "100 Mg", "satuan": "Tablet", "harga": "Rp.928", "ket": "Acarbose adalah obat untuk menurunkan kadar gula darah pada penderita diabetes tipe 2. Agar pengobatan lebih efektif, penggunaan acarbose harus diimbangi dengan penerapan pola makan yang sehat dan olahraga teratur"
            },
            {
                "id": "2", "nama": "Alprazolam", "ukuran": "1 Mg", "satuan": "Tablet", "harga": "Rp.527", "ket": "Alprazolam adalah obat untuk mengatasi gangguan kecemasan dan gangguan panik.  Biasanya, alprazolam digunakan untuk pengobatan jangka pendek. Obat ini hanya boleh digunakan sesuai resep dokter"
            },
            {
                "id": "3", "nama": "Becom Zet", "ukuran": "-", "satuan": "Tablet", "harga": "Rp.2.680", "ket": "Becom Zet merupakan suplemen yang mengandung kombinasi antara multivitamin, mineral, dan zinc yang berfungsi sebagai Suplementasi vitamin b kompleks, vitamin C, vitamin E dan zinc"
            },
            {
                "id": "4", "nama": "Paracetamol", "ukuran": "500 Mg", "satuan": "Tablet", "harga": "Rp.318", "ket": "Paracetamol adalah obat untuk meredakan demam dan nyeri, termasuk nyeri haid atau sakit gigi"
            },
            {
                "id": "5", "nama": "Vitamin C", "ukuran": "100 Mg", "satuan": "Tablet", "harga": "Rp.1.812", "ket": "Vitamin C atau asam askorbat (ascorbic acid) adalah vitamin yang diperlukan untuk mencegah dan mengatasi kekurangan vitamin C. Kekurangan vitamin C bisa menyebabkan terjadinya penyakit skorbut atau scurvy. Selain itu, vitamin C juga memiliki efek antioksidan yang dapat membantu tubuh melawan radikal bebas"
            }
        ]
    )
  }
  