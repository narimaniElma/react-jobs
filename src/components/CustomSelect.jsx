import { useField } from "formik";


const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2"
            >{label}</label>
            <select
                {...props}
                {...field}
                className="border rounded w-full py-2 px-3"
            />
            {/* {meta.error && meta.touched && <div className="text-red-500 text-xs">{meta.error}</div>} */}
        </div>
    )
}

export default CustomSelect