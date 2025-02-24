import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import { User } from "../types";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  const fetchGitHubUser = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data: User = await response.json();
      setUser(data);
    } catch (error) {
      setUser(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">devfinder</h1>
      <SearchBar onSearch={fetchGitHubUser} />
      <div className="mt-6">
        <UserCard user={user} />
      </div>
    </div>
  );
}
