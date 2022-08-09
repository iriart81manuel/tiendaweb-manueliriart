const products = [
  {
    id: "1",
    name: "Pulsefire Pro",
    price: 2399,
    category: "Mouses",
    img: "/images/mouses/mouse1.png",
    stock: 12,
    description: "Sensor Pixart 3389 - Seis botones - Cómodo diseño ergonómico",
  },
  {
    id: "2",
    name: "Pulsefire Core",
    price: 2199,
    category: "Mouses",
    img: "/images/mouses/mouse2.png",
    stock: 8,
    description:
      "Sensor óptico Pixart 3327 - Siete botones programables - Cómodo diseño simétrico°",
  },
  {
    id: "3",
    name: "Pulsefire Surge",
    price: 2299,
    category: "Mouses",
    img: "/images/mouses/mouse3.png",
    stock: 10,
    description:
      "Sensor Pixart 3389 - Hasta 50 millones de clics fiables - Efectos RGB dinámicos de 360°",
  },
  {
    id: "4",
    name: "HyperX Cloud Stinger",
    price: 1900,
    category: "Auriculares",
    img: "images/auriculares/auri1.png",
    stock: 9,
    description:
      "Audio inmersivo - Control de audio",
  },
  {
    id: "5",
    name: "HyperX Cloud Core",
    price: 2099,
    category: "Auriculares",
    img: "images/auriculares/auri2.png",
    stock: 5,
    description:
      "Confort - Cancelación de ruido",
  },
  {
    id: "6",
    name: "Hyperx Inalámbricos Cloud II Wireless",
    price: 2900,
    category: "Auriculares",
    img: "images/auriculares/auri3.png",
    stock: 6,
    description:
      "Inalambrico - Duracion de bateria 30h",
  },
  {
    id: "7",
    name: "HyperX Alloy Origins",
    price: 2700,
    category: "teclados",
    img: "images/teclados/tecl1.png",
    stock: 11,
    description:
      "Antighosting - Cable removible",
  },
  {
    id: "8",
    name: "Hyperx Alloy Core",
    price: 3099,
    category: "teclados",
    img: "images/teclados/tecl2.png",
    stock: 4,
    description:
      "Antighosting - Resiste salpicaduras",
  },
  {
    id: "9",
    name: "Hyperx Alloy Origins 65 Compacto",
    price: 3199,
    category: "teclados",
    img: "images/teclados/tecl2.png",
    stock: 4,
    description:
      "65% (pequeño) - Switch Linear Red",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
