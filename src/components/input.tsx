import type { InputProps } from "../types";

export default function Input({ value, onChange, id }: InputProps) {
  return (
    <input className="border-1 border-gray-300 rounded p-1 font-roboto" value={value} onChange={onChange} id={id} />
  )
}