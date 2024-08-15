'use client'
import React, {useState} from "react";
import Link from "next/link";

type NavbarProps = {
  isLogin: boolean;
  toggleForm: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ isLogin, toggleForm }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-green-400 text-black px-12">
      <Link href='/' className="btn btn-ghost text-2xl">Expense Tracker</Link>
      <button 
        className="p-2 px-12 btn bg-orange-400 text-black text-xl border-none hover:bg-orange-500 transition-colors"
        onClick={toggleForm}
      >
        {isLogin ? 'Signup' : 'Login'}
      </button>
    </nav>
  );
};

export default Navbar;