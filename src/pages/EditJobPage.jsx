import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { jobSchema } from '../schemas';
import { toast } from 'react-toastify';

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      type: job.type,
      title: job.title,
      description: job.description,
      location: job.location,
      salary: job.salary,
      companyName: job.company.name,
      companyDescription: job.company.description,
      contactEmail: job.company.contactEmail,
      contactPhone: job.company.contactPhone,
    },
    validationSchema: jobSchema,
    onSubmit: (values, actions) => {
      submitForm(values);
      actions.resetForm();
    },
  })

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (values) => {

    const updatedJob = {
      id: id,
      type: values.type,
      title: values.title,
      description: values.description,
      location: values.location,
      salary: values.salary,
      company: {
        name: values.companyName,
        description: values.companyDescription,
        contactEmail: values.contactEmail,
        contactPhone: values.contactPhone
      }
    }

    updateJobSubmit(updatedJob);

    toast.success('Job updated successfully')

    navigate(`/jobs/${id}`)
  }

  const classInput = errors.title && touched.title ? "border border-red-500 rounded w-full py-2 px-3 mb-2" : 'border rounded w-full py-2 px-3 mb-2'

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">Update Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
              >Job Type</label>
              <select
                id="type"
                name="type" className="border rounded w-full py-2 px-3"
                required
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.type && touched.type && <div>{errors.type}</div>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
              >Job Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className={classInput}
                placeholder="eg. Beautiful Apartment In Miami"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title && <div className="text-red-500 text-xs">{errors.title}</div>}
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >Description</label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
              >Salary</label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                value={values.salary}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className={classInput}
                placeholder='Company Location'
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.location && touched.location && <div className="text-red-500 text-xs">{errors.location}</div>}
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2"
              >Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={values.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="companyDescription"
                className="block text-gray-700 font-bold mb-2"
              >Company Description</label>
              <textarea
                id="companyDescription"
                name="companyDescription"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={values.companyDescription}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contactEmail"
                className="block text-gray-700 font-bold mb-2"
              >Contact Email</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                className={classInput}
                placeholder="Email address for applicants"
                value={values.contactEmail}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.contactEmail && touched.contactEmail && <div className="text-red-500 text-xs">{errors.contactEmail}</div>}
            </div>

            <div className="mb-4">
              <label
                htmlFor="contactPhone"
                className="block text-gray-700 font-bold mb-2"
              >Contact Phone</label>
              <input
                type="number"
                id="contactPhone"
                name="contactPhone" className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={values.contactPhone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditJobPage