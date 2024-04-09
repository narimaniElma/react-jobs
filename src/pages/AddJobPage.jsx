import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { jobSchema } from "../schemas";
import CustomSelect from "../components/CustomSelect";
import CustomInput from "../components/CustomInput";
import CustomTextarea from "../components/CustomTextarea";

const AddJobPage = ({ addJobSubmit }) => {
    const navigate = useNavigate();

    const submitForm = (values) => {

        const newJob = {
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

        addJobSubmit(newJob);

        toast.success('Job added successfully');

        navigate('/jobs');
    }

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                >
                    <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

                    <Formik
                        initialValues={{
                            type: 'Full-Time',
                            title: '',
                            description: '',
                            location: '',
                            salary: 'Under $50K',
                            companyName: '',
                            companyDescription: '',
                            contactEmail: '',
                            contactPhone: '',
                        }}
                        validationSchema={jobSchema}
                        onSubmit={(values, actions) => {
                            submitForm(values);
                            actions.resetForm();
                        }}
                    >
                        {() => (
                            <Form >
                                <CustomSelect label='Job Type' name="type">
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Internship">Internship</option>
                                </CustomSelect>

                                <CustomInput label='Job Listing Name' type="text"
                                    id="title"
                                    name="title" placeholder="eg. Beautiful Apartment In Miami"
                                />

                                <CustomTextarea label='Description' id="description"
                                    name="description" placeholder="Add any job duties, expectations, requirements, etc"
                                />

                                <CustomSelect label='Salary' id="salary"
                                    name="salary">
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
                                </CustomSelect>

                                <CustomInput label='Location' type="text"
                                    id='location'
                                    name='location' placeholder="Company Location"
                                />

                                <h3 className="text-2xl mb-5">Company Info</h3>

                                <CustomInput label='Company Name' type="text"
                                    id="companyName"
                                    name="companyName" placeholder="Company Name"
                                />

                                <CustomTextarea label='Company Description' id="companyDescription"
                                    name="companyDescription"
                                    placeholder="What does your company do?"
                                />

                                <CustomInput label='Contact Email' type="email"
                                    id="contactEmail"
                                    name="contactEmail"
                                    placeholder="Email address for applicants"
                                />

                                <CustomInput label='Contact Phone' type="number"
                                    id="contactPhone"
                                    name="contactPhone"
                                    placeholder="Optional phone for applicants"
                                />

                                <button
                                    className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                                    type="submit"
                                >
                                    Add Job
                                </button>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default AddJobPage