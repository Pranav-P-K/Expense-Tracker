'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-green-400">
        <div className="flex-1">
            <Link href='/' className="btn btn-ghost text-3xl mx-16">Expense Tracker</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-4 gap-8 mx-8">
                <li className='btn bg-orange-400 text-black text-xl border-none hover:bg-orange-500 transition-colors'><Link href='/signup'>SIGN UP</Link></li>
                <li className='btn bg-orange-400 text-black text-xl border-none hover:bg-orange-500'><Link href='/signin'>LOGIN</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar