import TicketList from "./TicketList";
import { Suspense } from "react"
import Loading from "./loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <h2 className="flex justify-center text-xl">Tickets</h2>
      <p className="flex justify-center text-sm">Currently open tickets.</p>
      
      <div className="flex justify-center my-5">
        <Link href="/tickets/create">
          <button className="btn-primary">Create new Ticket</button>
        </Link>
      </div>

      <Suspense fallback={<Loading/>}>
        <TicketList />
      </Suspense>
    </main>
  )
}