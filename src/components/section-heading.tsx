import type { SectionHeadingProps } from "../types";

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h4 className="text-xl font-bold py-2 font-roboto">{children}</h4>
    )
}
