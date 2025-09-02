'use client';

import Sidebar from "@/components/Sidebar"; 

const Admin = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Sidebar />
      <main className="flex flex-col justify-center items-center bg-gray-950 h-screen ml-50 mt-[-640]">
        <h1 className="text-2xl mb-4">Welcome, Admin!</h1>
        
        <p className="text-lg text-gray-700">
          Use the sidebar to manage products, view the admin board, and more.
        </p>
      </main>
    </div>
  );
};

export default Admin;
