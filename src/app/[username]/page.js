'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("⚠️ No token found. Redirect to login.");
      return;
    }

    const decoded = jwtDecode(token);
    console.log("Decoded Token:", decoded);

    axios
      .get("http://localhost:5773/user/:username", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
      });
  }, []);

  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96">
        <Image
          src={user.profilePic || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
        />
        <h2 className="text-2xl font-bold text-center mt-4">{user.username}</h2>
        <p className="text-gray-600 text-center">{user.email}</p>
        <p className="text-center mt-2">
          <span className="font-semibold">Role:</span> {user.role}
        </p>
      </div>
    </div>
  );
}

export default Profile;
