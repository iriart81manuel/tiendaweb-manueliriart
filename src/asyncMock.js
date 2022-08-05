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
    price: 1599,
    category: "Mouses",
    img: "/images/mouses/mouse2.png",
    stock: 8,
    description:
      "Sensor óptico Pixart 3327 - Siete botones programables - Cómodo diseño simétrico°",
  },
  {
    id: "3",
    name: "Pulsefire Surge",
    price: 1799,
    category: "Mouses",
    img: "/images/mouses/mouse3.png",
    stock: 10,
    description:
      "Sensor Pixart 3389 - Hasta 50 millones de clics fiables - Efectos RGB dinámicos de 360°",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
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
