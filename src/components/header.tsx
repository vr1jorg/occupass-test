import Menu from "./menu";

export default function Header() {
    return (
        <header>
            <h1 className='text-xl font-bold font-roboto'>Occupass Dashboard</h1>
            <Menu />
            <hr />
        </header>
    )
}