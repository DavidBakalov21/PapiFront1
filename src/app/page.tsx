"use client";
import axios from "axios";
import { useState } from "react";
import reqURL from "./const/reqURL";

const Home = () => {
  const [user, setUser] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const SendData = async () => {
    try {
      const payload = {
        user: user,
        text: code,
      };

      const response = await axios.post(`${reqURL}/messages`, payload);

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Create a Gist</h1>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User name
          </label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Code
          </label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 h-60 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="// write your code here..."
          />
        </div>

        <div className="text-right">
          <button
            onClick={SendData}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Save Gist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
