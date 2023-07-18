const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: `${API}/api/${VERSION}/products`,
    oneProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    allproducts: `${API}/api/${VERSION}/products`,
    postProduct: `${API}/api/${VERSION}/products`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    putProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,

  },
  categories:{
    getCategorieslist: `${API}/api/${VERSION}/categories/`,
    postCategoryes: `${API}/api/${VERSION}/categories/`,
    getCategoryItems:(id) => `${API}/api/${VERSION}/categories/${id}/products/`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}/`,
  },
  files:{
    addImage: `${API}/api/${VERSION}/files/update`
  }
};

export default endPoints;
