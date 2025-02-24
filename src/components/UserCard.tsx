import { User } from "../types.ts";

type UserCardProps = {
  user: User | null;
};

export default function UserCard({ user }: UserCardProps) {
  if (!user) return <p className="text-gray-400 text-center">No user found.</p>;

  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url}
          alt="User Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-400">@{user.login}</p>
        </div>
      </div>
      <p className="mt-4">{user.bio || "No bio available."}</p>
      <div className="mt-4 flex justify-between text-sm text-gray-400">
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Repos: {user.public_repos}</p>
      </div>
    </div>
  );
}
