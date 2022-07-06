import axios from "axios";


axios.defaults.baseURL = "http://localhost:8000/api/"


axios.interceptors.request.use(config => {
	const access_token = localStorage.getItem('access');
	config.headers.Authorization = `Bearer ${access_token}`;
	return config;
}, error => error);


axios.interceptors.response.use(res => res, async error => {
	
	if (error.response.status === 401) {
		
		await axios.post("token/refresh/", {
			"refresh": localStorage.getItem("refresh")
		}).then(res => {
			localStorage.setItem('access', res.data.access);
			axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access}`;
		});

		return axios(error.config);
	}

	return error;
});