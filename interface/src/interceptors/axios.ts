import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/"

axios.interceptors.response.use(res => res, async error => {

	if (error.response.status === 401) {

		await axios.post("token/refresh/", {
			"refresh": localStorage.getItem("refresh")
		}).then(res => {
			axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access}`;
		});

		return axios(error.config);
	}

	return error;
});