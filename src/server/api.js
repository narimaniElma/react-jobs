import axios from "axios";

const URL = "/api/jobs";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Add new job
export const addJob = async (newJob) => {
  try {
    const response = await axios.post(URL, newJob);
  } catch (error) {
    console.log(error.response);
  }
};

// Update job
export const updateJob = async (job) => {
  try {
    const response = await axios.put(URL + `/${job.id}`, job);
  } catch (error) {
    console.log(error.response);
  }
};

// Delete job
export const deleteJob = async (id) => {
  try {
    const response = await axios.delete(URL + `/${id}`, id);
  } catch (error) {
    console.log(error.response);
  }
};