import React from 'react';
import '../style.css'; 
const JobList = ({ jobs, onUpdateStatus, onDelete }) => (
  <div className="mt-6 space-y-4" class="job-lst-div">
    {jobs.map(job => (
      <div key={job._id} class="job-lst-details" className="border p-4 rounded shadow">
        <h2 class="job-company-role" className="text-lg font-semibold">{job.company} - {job.role}</h2>
        <p>Status: {job.status}</p>
        <p>Date: {new Date(job.date).toLocaleDateString()}</p>
        <a href={job.link} class="job-lst-link" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
        <div class="job-lst-bttn-div" className="mt-2 space-x-2">
          {['Applied', 'Interview', 'Offer', 'Rejected'].map(s => (
            <button
              class="job-lst-status-bttn"
              key={s}
              onClick={() => onUpdateStatus(job._id, s)}
              className={`px-2 py-1 border rounded ${job.status === s ? 'bg-green-200' : ''}`}
            >
              {s}
            </button>
          ))}
          <button class="job-lst-del-bttn" onClick={() => onDelete(job._id)} className="px-2 py-1 border rounded bg-red-200">Delete</button>
        </div>
      </div>
    ))}
  </div>
);

export default JobList;