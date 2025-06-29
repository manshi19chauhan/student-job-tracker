import axios from 'axios';
import '../style.css'; 
const API_URL = 'http://localhost:5000/api/jobs';

export const fetchJobs = () => axios.get(API_URL);
export const createJob = (jobData) => axios.post(API_URL, jobData);
export const updateJob = (id, updatedData) => axios.put(`${API_URL}/${id}`, updatedData);
export const deleteJob = (id) => axios.delete(`${API_URL}/${id}`);