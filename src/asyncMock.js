const products = [
  {
    id: "1",
    name: "PulseFireCore",
    price: 1600,
    category: "Mouses",
    img: 'https://drive.google.com/uc?export=view&id=16LfdmhkJkYEPIfWjtOov-d6yV0a6cGbm',
    stock: 25, 
    description:'Sensor Pixart 3389 - Seis botones - Cómodo diseño ergonómico'
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
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
