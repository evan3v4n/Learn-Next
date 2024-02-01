import Navbar from '../components/Navbar'
export default function DashboardLayout( { children }) {
  return (
    <main>
        <Navbar />
        {children}
    </main>
  )
}
