import { useField } from "formik"

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    const classInput = meta.error && meta.touched ? "border border-red-500 rounded w-full py-2 px-3 mb-2" : 'border rounded w-full py-2 px-3 mb-2'

    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2"
            >{label}</label>
            <input
                {...props}
                {...field}
                className={classInput}
            />
            {meta.error && meta.touched && <div className="text-red-500 text-xs">{meta.error}</div>}
        </div>
    )
}

export default CustomInput