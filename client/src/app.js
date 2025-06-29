import React, { useState, useEffect } from 'react';
import JobForm from './components/jobForm.js';
import JobList from './components/jobList.js';
import { fetchJobs, createJob, updateJob, deleteJob } from './api/jobs';
import './style.css'; 
function App() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ company: '', role: '', status: 'Applied', date: '', link: '' });

  const loadJobs = async () => {
    const res = await fetchJobs();
    setJobs(res.data);
  };

  useEffect(() => { loadJobs(); }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddJob = async (e) => {
    e.preventDefault();
    await createJob(form);
    setForm({ company: '', role: '', status: 'Applied', date: '', link: '' });
    loadJobs();
  };

  const handleUpdateStatus = async (id, status) => {
    await updateJob(id, { status });
    loadJobs();
  };

  const handleDeleteJob = async (id) => {
    await deleteJob(id);
    loadJobs();
  };

  return (
    <div class="div1-h1-stud-jb-trk"className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4" class="h1-stud-jb-trk">Student Job Tracker</h1>
      <JobForm form={form} onChange={handleInputChange} onSubmit={handleAddJob} />
      <JobList jobs={jobs} onUpdateStatus={handleUpdateStatus} onDelete={handleDeleteJob} />
    </div>
  );
}

export default App;