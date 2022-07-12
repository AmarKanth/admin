import axios from "axios";


axios.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.access}`;
	config.baseURL = "http://localhost:8000/api/"
	return config;
}, error => error);


axios.interceptors.response.use(res => res, async error => {
	
	if (error.response.status === 401) {
		
		await axios.post("token/refresh/", {"refresh": localStorage.refresh}).then(res => {
			localStorage.setItem('access', res.data.access);
			axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access}`;
		}).catch(error => {
			localStorage.removeItem('refresh');
			localStorage.removeItem('access');
		});

		return axios(error.config);
	}

	return Promise.reject(error);
});