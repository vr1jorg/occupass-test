import type { SectionHeadingProps } from "../types";

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h4 className="text-xl font-bold p-4 font-roboto">{children}</h4>
    )
}
