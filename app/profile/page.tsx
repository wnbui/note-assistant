"use client";

// import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Profile() {
  // const [name, setName] = useState('John Doe');
  // const [email,] = useState('johndoe@example.com');
  // const [password, setPassword] = useState('');
  const { data: session } = useSession();
  const emailSession = session?.user?.email;
  const nameSession = session?.user?.name;

  return (
    <div className="max-w-lg mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">User Profile</h1>
      <h2 className="text-lg text-gray-600 mb-6">Manage your account settings</h2>
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 shadow-lg rounded-xl p-8 border border-gray-200">
        <form className="flex flex-col gap-6">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border bg-gray-200"></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email logged in</label>
            <h2>{emailSession}</h2>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <h2>{nameSession ? nameSession: "no name provided"}</h2>
          {/*  <input*/}
          {/*    type="text"*/}
          {/*    value={name}*/}
          {/*    onChange={(e) => setName(e.target.value)}*/}
          {/*    className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-primary/30 focus:border-primary sm:text-sm"*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <label className="block text-sm font-medium text-gray-700">Email</label>*/}
          {/*  <input*/}
          {/*    type="email"*/}
          {/*    value={email}*/}
          {/*    disabled*/}
          {/*    className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-primary/30 focus:border-primary sm:text-sm bg-gray-100"*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <label className="block text-sm font-medium text-gray-700">Password</label>*/}
          {/*  <input*/}
          {/*    type="password"*/}
          {/*    value={password}*/}
          {/*    onChange={(e) => setPassword(e.target.value)}*/}
          {/*    className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-primary/30 focus:border-primary sm:text-sm"*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div className="flex space-x-4">*/}
          {/*  <button*/}
          {/*    type="submit"*/}
          {/*    className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-focus hover:scale-105 transition-transform shadow-sm animate-pulse"*/}
          {/*  >*/}
          {/*    Save Changes*/}
          {/*  </button>*/}
          {/*  <button*/}
          {/*    type="button"*/}
          {/*    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300"*/}
          {/*  >*/}
          {/*    Cancel*/}
          {/*  </button>*/}
          </div>
        </form>
      </div>
    </div>
  );
} 