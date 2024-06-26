import { useState, useEffect } from 'react';
import axios from 'axios';
import JobListing from '../components/JobListing';
import Spinner from '../components/Spinner';

const JobListings = ({ isHome }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const apiUrl = `/api/jobs${isHome ? '?_limit=3' : ''}`;

    try {
      const { data } = await axios(apiUrl);
      setJobs(data);
    } catch (error) {
      console.log('Error fetching data', error.response);
    } finally {
      setLoading(false);
    };
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? <Spinner loading={loading} /> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default JobListings