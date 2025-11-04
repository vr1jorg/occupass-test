import { menuLinks } from "../constants"
import type { LinkProps } from "../types"

export default function Menu() {
    return (
        <aside>
            <nav className="flex gap-4">
                {menuLinks.map(link => (
                    <Link key={link.href} href={link.href}>{link.text}</Link>
                ))}
            </nav>
        </aside>
    )
}

function Link({ children, href }: LinkProps) {
    return (
        <a href={href} className="bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded font-roboto">
            {children}
        </a>
    )
}