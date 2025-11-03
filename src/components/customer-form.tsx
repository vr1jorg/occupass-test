import { zodResolver } from "@hookform/resolvers/zod";
import { customerFormSchema, type CustomerFormData } from "../schemas";
import { useForm } from "react-hook-form";
import { submitForm } from "../actions";
import Field from "./field";

export default function CustomerForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<CustomerFormData>({
        resolver: zodResolver(customerFormSchema),
        mode: "onChange"
    });7

    async function onSubmit(data: CustomerFormData) {
        submitForm(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Field name="id" label="Customer id" placeholder="Customer id" register={register} error={errors["id"]?.message} />

            <button disabled={!isValid} className="bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:bg-stone-300 disabled:cursor-not-allowed">Enviar</button>
        </form>
    )
}