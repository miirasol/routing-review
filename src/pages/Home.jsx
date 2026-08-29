import { Input } from "@/components/ui/input";
import UserCard from "@/components/UserCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		async function fetchUsers() {
			try {
				const res = await fetch("/data.json");
				const data = await res.json();

				setUsers(data);
			} catch (error) {
				console.log(error);
			}
		}

		fetchUsers();
	}, []);

	console.log(users);

	const filteredList = users.filter((user) =>
		user.name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<div className="px-6">
				<div className="mb-6 w-md mx-auto">
					<Input
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search driver..."
						className={
							filteredList.length === 0
								? "border-red-500 focus-visible:ring-red-500"
								: ""
						}
					/>
				</div>
				<div className="grid grid-cols-4 gap-8">
					{filteredList.map((user) => (
						<UserCard user={user} key={user.id} />
					))}
				</div>
			</div>
		</>
	);
}
