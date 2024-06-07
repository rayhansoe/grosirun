import { Prisma } from "@prisma/client";

export const products: Prisma.ProductCreateManyInput[] = [
  // Kategori: Makanan
  {
    id: 1,
    title: "Indomie Goreng",
    slug: "indomie-goreng",
    description: "Mie enak digoreng",
    price: 3000,
    packPrice: 50000,
    discountPrice: 2500,
    discountPackPrice: 47000,
    packQuantity: 48,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 1
  },
  {
    id: 2,
    title: "Roti Tawar",
    slug: "roti-tawar",
    description: "Roti tawar yang lembut",
    price: 12000,
    packPrice: 60000,
    discountPrice: 10000,
    discountPackPrice: 55000,
    packQuantity: 5,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 1
  },
  {
    id: 3,
    title: "Sereal Jagung",
    slug: "sereal-jagung",
    description: "Sereal jagung sehat untuk sarapan",
    price: 15000,
    packPrice: 70000,
    discountPrice: 13000,
    discountPackPrice: 65000,
    packQuantity: 5,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 1
  },
  // Kategori: Minuman
  {
    id: 4,
    title: "Kopi Hitam",
    slug: "kopi-hitam",
    description: "Kopi hitam pekat",
    price: 2000,
    packPrice: 20000,
    discountPrice: 1800,
    discountPackPrice: 17000,
    packQuantity: 10,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 2
  },
  {
    id: 5,
    title: "Teh Hijau",
    slug: "teh-hijau",
    description: "Teh hijau organik",
    price: 5000,
    packPrice: 45000,
    discountPrice: 4500,
    discountPackPrice: 42000,
    packQuantity: 10,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 2
  },
  {
    id: 6,
    title: "Susu Kedelai",
    slug: "susu-kedelai",
    description: "Susu kedelai sehat",
    price: 7000,
    packPrice: 60000,
    discountPrice: 6500,
    discountPackPrice: 58000,
    packQuantity: 10,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 2
  },
  // Kategori: Produk Segar
  {
    id: 7,
    title: "Sayuran Segar",
    slug: "sayuran-segar",
    description: "Sayuran segar dari kebun",
    price: 15000,
    packPrice: 70000,
    discountPrice: 13000,
    discountPackPrice: 65000,
    packQuantity: 5,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 3
  },
  {
    id: 8,
    title: "Buah Apel",
    slug: "buah-apel",
    description: "Buah apel segar",
    price: 10000,
    packPrice: 50000,
    discountPrice: 9000,
    discountPackPrice: 45000,
    packQuantity: 5,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 3
  },
  {
    id: 9,
    title: "Buah Jeruk",
    slug: "buah-jeruk",
    description: "Buah jeruk manis",
    price: 8000,
    packPrice: 40000,
    discountPrice: 7000,
    discountPackPrice: 35000,
    packQuantity: 5,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 3
  },
  // Kategori: Kebutuhan Ibu & Anak
  {
    id: 10,
    title: "Popok Bayi",
    slug: "popok-bayi",
    description: "Popok bayi yang nyaman",
    price: 50000,
    packPrice: 200000,
    discountPrice: 45000,
    discountPackPrice: 180000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 4
  },
  {
    id: 11,
    title: "Susu Formula",
    slug: "susu-formula",
    description: "Susu formula untuk bayi",
    price: 75000,
    packPrice: 300000,
    discountPrice: 70000,
    discountPackPrice: 280000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 4
  },
  {
    id: 12,
    title: "Peralatan Makan Bayi",
    slug: "peralatan-makan-bayi",
    description: "Peralatan makan untuk bayi",
    price: 30000,
    packPrice: 120000,
    discountPrice: 28000,
    discountPackPrice: 110000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 4
  },
  // Kategori: Home and Living
  {
    id: 13,
    title: "Bantal Tidur",
    slug: "bantal-tidur",
    description: "Bantal tidur yang nyaman",
    price: 40000,
    packPrice: 150000,
    discountPrice: 38000,
    discountPackPrice: 140000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 5
  },
  {
    id: 14,
    title: "Sprei",
    slug: "sprei",
    description: "Sprei berkualitas tinggi",
    price: 100000,
    packPrice: 400000,
    discountPrice: 95000,
    discountPackPrice: 380000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 5
  },
  {
    id: 15,
    title: "Lampu Meja",
    slug: "lampu-meja",
    description: "Lampu meja elegan",
    price: 70000,
    packPrice: 270000,
    discountPrice: 65000,
    discountPackPrice: 250000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 5
  },
  // Kategori: Kecantikan
  {
    id: 16,
    title: "Lipstik",
    slug: "lipstik",
    description: "Lipstik berbagai warna",
    price: 50000,
    packPrice: 200000,
    discountPrice: 45000,
    discountPackPrice: 180000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 6
  },
  {
    id: 17,
    title: "Bedak",
    slug: "bedak",
    description: "Bedak wajah halus",
    price: 30000,
    packPrice: 120000,
    discountPrice: 28000,
    discountPackPrice: 110000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 6
  },
  {
    id: 18,
    title: "Masker Wajah",
    slug: "masker-wajah",
    description: "Masker wajah menyegarkan",
    price: 20000,
    packPrice: 80000,
    discountPrice: 18000,
    discountPackPrice: 70000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 6
  },
  // Kategori: Kesehatan
  {
    id: 19,
    title: "Vitamin C",
    slug: "vitamin-c",
    description: "Vitamin C untuk daya tahan tubuh",
    price: 50000,
    packPrice: 200000,
    discountPrice: 45000,
    discountPackPrice: 180000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 7
  },
  {
    id: 20,
    title: "Minyak Kayu Putih",
    slug: "minyak-kayu-putih",
    description: "Minyak kayu putih untuk kehangatan",
    price: 25000,
    packPrice: 100000,
    discountPrice: 22000,
    discountPackPrice: 90000,
    packQuantity: 4,
    superAdminId: 1,
    status: "PUBLISHED",
    categoryId: 7
  }
];
