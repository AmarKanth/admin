import axios from "axios";


axios.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.access}`;
	config.baseURL = "http://localhost:8000/api/"
	return config;
}, error => error);


axios.interceptors.response.use(res => res, async error => {
	
	if (error.response.status === 401 && localStorage.access) {
		
		try {
			const response = await axios.post("token/refresh/", {"refresh": localStorage.refresh});
			localStorage.setItem('access', response.data.access);
			localStorage.setItem('isAuthenticated', true);
			axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
		} catch(error) {
			localStorage.removeItem('refresh');
			localStorage.removeItem('access');
			localStorage.removeItem('isAuthenticated');
		}

		return axios(error.config);
	}

	return Promise.reject(error);
});