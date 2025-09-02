'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminBoard = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5773/admin/adminBoard');
        const apiToken = await res?.data?.token;
        setToken(apiToken || null);
        if (apiToken) {
          localStorage.setItem('token', apiToken);
        }
      } catch (err) {
        setError('Failed to fetch admin board data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Board</h1>
      {error && <p className="text-red-500">{error}</p>}
      {token ? (
        <p className="text-green-600">Authenticated. Token saved.</p>
      ) : (
        <p className="text-gray-600">No token found.</p>
      )}
    </div>
  );
};

export default AdminBoard;