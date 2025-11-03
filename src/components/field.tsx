import type { CustomerFormData } from "../schemas";
import type { FieldProps } from "../types";

export default function Field({ label, type = "text", name, register, error, placeholder }: FieldProps) {
    return (
        <div className="flex flex-col gap-1">
            <label>{label}</label>
            <input placeholder={placeholder} type={type} className="p-2 border-2 border-gray-300 rounded-md" {...register(name as keyof CustomerFormData)} />
            {error ? <span className="text-red-500">{error}</span> : null}
        </div>
    )
}