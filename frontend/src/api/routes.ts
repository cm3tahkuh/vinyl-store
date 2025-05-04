const BASE_URL = "http://localhost:5555";

const apiConfig = {
  auth: {
    login: `${BASE_URL}/api/auth/login/`,
    logout: `${BASE_URL}/api/auth/logout/`,
    register: `${BASE_URL}/api/auth/register/`,
  },
  users: {
    create: `${BASE_URL}/api/users/create/`,
    get: `${BASE_URL}/api/users/`,
    update: `${BASE_URL}/api/users/updateUserById/`,
    delete: `${BASE_URL}/api/users/deleteUserById/`,
  },
};

export default apiConfig;
