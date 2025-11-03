import type { LabelProps } from "../types";

export default function Label({ label, inputId }: LabelProps) {
    return (
        <label htmlFor={inputId} className="font-bold font-roboto">{label}</label>
    )
}