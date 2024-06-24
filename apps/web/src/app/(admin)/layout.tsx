import React from 'react';
import Sidebar from './_components/sidebar';
import { protectedRoute } from '@/lib/auth';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await protectedRoute.superAdmin()

  console.log(session);
  

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        </header>
        <main className="bg-white p-6 rounded-lg shadow-md">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;