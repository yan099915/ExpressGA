const products = [
  {
    name: "Setelan Anak Laki Putih",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/picbaju1.jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 120000,
    countInStock: 10,
  },
  {
    name: "Setelan Anak Laki Dongker NY",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+7baju2.jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 135000,
    countInStock: 10,
  },
  {
    name: "Dress Anak Perempuan Pink",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+7+(1).jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 135000,
    countInStock: 10,
  },
  {
    name: "Dress Anak Motif Kelinci",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+6.jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 155000,
    countInStock: 10,
  },
  {
    name: "Baju Anak Berdasi",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+5.jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 130000,
    countInStock: 10,
  },
  {
    name: "Dress Anak Pink Hitam",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+5+(1).jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 145000,
    countInStock: 10,
  },
  {
    name: "Dress Anak Pink Hitam",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+5+(1).jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 145000,
    countInStock: 10,
  },
  {
    name: "Set Anak Orange Dongker",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+4.jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 140000,
    countInStock: 10,
  },
  {
    name: "Dress Anak Garis Biru",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+4+(1).jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 170000,
    countInStock: 10,
  },
  {
    name: "Setelan Anak Motif Beruang",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+3.jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 190000,
    countInStock: 10,
  },
  {
    name: "Dress Anak Motif Lolipop",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+3+(1).jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 190000,
    countInStock: 10,
  },
  {
    name: "Setelan Anak Laki Motif Mobil",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+2.jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 200000,
    countInStock: 10,
  },
  {
    name: "Dress Anak Perempuan Pink",
    imageUrl:
      "https://mymoviesapp.s3-ap-southeast-1.amazonaws.com/images/image+2+(1).jpg",
    description:
      "Warna: seperti yang ditunjukkan Usia yang cocok: bayi (1 ~ 3 tahun, 80 ~ 100cm) Nama kain: Katun Konten komponen bahan utama: 95 (%) Tinggi cocok: 80cm, 90cm, 100cm, 110cm, 120cm, 80cm-120cm",
    price: 185000,
    countInStock: 10,
  },
];

module.exports = products;
