'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLogin={isLogin} toggleForm={toggleForm} />
      <main className="flex-grow">
        <HomePage isLogin={isLogin} />
      </main>
    </div>
  );
};

export default Home;
