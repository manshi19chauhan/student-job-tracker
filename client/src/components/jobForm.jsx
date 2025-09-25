
import React from 'react';
import '../style.css'; 
const JobForm = ({ form, onChange, onSubmit }) => (
  <form class="job-form-details" onSubmit={onSubmit} className="space-y-2">
    <input class="job-form-details-comp"className="border p-2 w-full" placeholder="Company" name="company" value={form.company} onChange={onChange} required />
    <input class="job-form-details-role" className="border p-2 w-full" placeholder="Role" name="role" value={form.role} onChange={onChange} required />
    <select class="job-form-details-status" className="border p-2 w-full" name="status" value={form.status} onChange={onChange}>
      <option>Applied</option>
      <option>Interview</option>
      <option>Offer</option>
      <option>Rejected</option>
    </select>
    <input class="job-form-details-date" className="border p-2 w-full" type="date" name="date" value={form.date} onChange={onChange} required />
    <input class="job-form-details-link" className="border p-2 w-full" placeholder="Link" name="link" value={form.link} onChange={onChange} />
    <button class="job-form-add-bttn" className="bg-blue-500 text-white p-2 rounded w-full">Add Job</button>
  </form>
);

export default JobForm;