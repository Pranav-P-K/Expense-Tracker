import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-green-400">
        <div className="flex-1">
            <Link href='/' className="btn btn-ghost text-2xl px-12">Expense Tracker</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-12">
                <li className='btn bg-orange-400 text-black text-xl border-none hover:bg-orange-500'><Link href='/signup'>SIGN UP</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar