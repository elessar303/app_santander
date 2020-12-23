import { apiBackend } from  '../config/api'

export const login = async (username, password) => {

    const data = {
        email:username,
        password:password
    }

    try {

        const response = await apiBackend.post('login',data);

        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("lang", 'es');
          }
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error.response.data.message));
    }
    
}

export const logout = () => {
    localStorage.removeItem("user");
};
  