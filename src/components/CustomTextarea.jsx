import { useField } from "formik"

const CustomTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2"
            >{label}</label>
            <textarea
                {...props}
                {...field}
                className="border rounded w-full py-2 px-3"
                rows="4"
            ></textarea>
        </div>
    )
}

export default CustomTextarea