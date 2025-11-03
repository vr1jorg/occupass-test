import type { CustomersFilterProps, IconProps, SortByNameProps } from "../types";

export default function CustomersFilter({ toggleNameSort, sortNameAsc }: CustomersFilterProps) {
    return (
        <section>
            <SortByName toggleNameSort={toggleNameSort} sortNameAsc={sortNameAsc} />
        </section>
    )
}

function ChevronIcon({ className }: IconProps) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M18 15L12 9L6 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function SortByName({ toggleNameSort, sortNameAsc }: SortByNameProps) {
    return (
        <button onClick={toggleNameSort} className="bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded flex gap-1 cursor-pointer">
            <span className="font-bold font-roboto">Sort by name</span>
            <ChevronIcon className={`${sortNameAsc ? 'rotate-180' : ''} transition duration-150 ease-in-out`} />
        </button>
    )
}