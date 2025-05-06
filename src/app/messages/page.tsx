"use client";
import { useState } from "react";
import axios from "axios";
import reqURL from "../const/reqURL";
import IMessage from "../interfaces/IMessage";
import Message from "../components/Message";

const FetchedMessages = () => {
  const [id, setId] = useState<number>(1);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${reqURL}/messages/${id}`);
      setMessages(response.data);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-gray-800">Fetch User Messages</h1>

      <div className="flex gap-2">
        <input
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          placeholder="Enter username"
          className="flex-grow border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleFetch}
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "Fetching..." : "Fetch"}
        </button>
      </div>

      <div className="space-y-3">
        {messages.map((msg) => (
          <Message message={msg} />
        ))}
        {!loading && messages.length === 0 && (
          <p className="text-gray-400 italic">No messages found.</p>
        )}
      </div>
    </div>
  );
};

export default FetchedMessages;
