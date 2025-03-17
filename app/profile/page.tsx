"use client";

import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();
  const emailSession = session?.user?.email;
  const nameSession = session?.user?.name;

  return (
    <div className="max-w-lg mx-auto py-10 px-6 bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">User Profile</h1>
      <h2 className="text-md text-gray-500 mb-8">Manage your account settings</h2>
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 shadow-lg rounded-xl p-8 border border-gray-200">
        <form className="flex flex-col gap-6">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full border bg-gray-300 shadow-md hover:scale-105 transition-transform"></div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Email logged in</label>
            <h2 className="text-lg font-medium text-gray-800">{emailSession}</h2>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
            <h2 className="text-lg font-medium text-gray-800">{nameSession ? nameSession : "No name provided"}</h2>
          </div>
          <div className="flex space-x-4 mt-6">
            <button
              type="button"
              onClick={() => window.location.href = '/'}
              className="bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition duration-300"
            >
              Go Back Home
            </button>
            {/*<button*/}
            {/*  type="button"*/}
            {/*  className="bg-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 hover:scale-105 transition duration-300"*/}
            {/*>*/}
            {/*  Cancel*/}
            {/*</button>*/}
          </div>
        </form>
      </div>
    </div>
  );
}