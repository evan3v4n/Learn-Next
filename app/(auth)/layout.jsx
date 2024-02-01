import Link from "next/link";


export default function AuthLayout() {
    return (
        <main>
            <nav>
                <h1>Dojo Helpdesk</h1>
                <Link href="/signup">Signup</Link>
                <Link href="/login">Login</Link>
            </nav>

        </main>
    )
}