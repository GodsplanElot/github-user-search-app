import { useState } from "react";

interface SearchBarProps {
  onSearch: (username: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-[730px] flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md"
    >
      {/* Search Input */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub username..."
        className="flex-1 bg-transparent outline-none text-lg text-gray-900 dark:text-white p-2"
      />
      
      {/* Search Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg"
      >
        Search
      </button>
    </form>
  );
}
