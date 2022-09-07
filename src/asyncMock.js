const products = [
  {
    id: "1",
    name: "Pulsefire Pro",
    price: 2399,
    category: "mouses",
    img: "/images/mouses/mouse1.png",
    stock: 12,
    description: "Sensor Pixart 3389 - Seis botones - Cómodo diseño ergonómico",
  },
  {
    id: "4",
    name: "HyperX Cloud Stinger",
    price: 1900,
    category: "auriculares",
    img: "/images/auriculares/auri1.png",
    stock: 9,
    description:
      "Audio inmersivo - Control de audio",
  },
  {
    id: "7",
    name: "HyperX Alloy Origins",
    price: 2700,
    category: "teclados",
    img: "/images/teclados/tecl1.png",
    stock: 11,
    description:
      "Antighosting - Cable removible",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
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
