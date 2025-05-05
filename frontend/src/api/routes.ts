const BASE_URL = "http://localhost:5555";

const apiConfig = {
  auth: {
    login: `${BASE_URL}/api/auth/login/`,
    logout: `${BASE_URL}/api/auth/logout/`,
    register: `${BASE_URL}/api/auth/register/`,
  },
  users: {
    create: `${BASE_URL}/api/users/createUser/`,
    get: `${BASE_URL}/api/users/`,
    update: `${BASE_URL}/api/users/updateUserById/`,
    delete: `${BASE_URL}/api/users/deleteUserById/`,
  },
  products: {
    create: `${BASE_URL}/api/products/createProduct/`,
    get: `${BASE_URL}/api/products/`,
    getByFilter: `${BASE_URL}/api/products/getProducts`,
    update: `${BASE_URL}/api/products/updateProductById/`,
    delete: `${BASE_URL}/api/products/deleteProductById/`,
  },
};

export default apiConfig;
