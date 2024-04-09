import * as yup from "yup";

export const jobSchema = yup.object().shape({
  type: yup.string().oneOf(["Full-Time", "Part-Time", "Remote", "Internship"]),
  title: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  location: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  description: yup.string(),
  salary: yup.string(),
  companyName: yup.string(),
  companyDescription: yup.string(),
  contactEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  contactPhone: yup.number().positive(),
});
