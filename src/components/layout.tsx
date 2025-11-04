import CustomersProvider from "../contexts/customers-context";
import type { LayoutProps } from "../types";
import Header from "./header";

export default function Layout({ children }: LayoutProps) {
    return (
        <CustomersProvider>
            <Header />
            <main>
                {children}
            </main>
        </CustomersProvider>
    )
}