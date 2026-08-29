import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

export default function UserPage() {
	const { id } = useParams();
	const [users, setUsers] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		async function fetchUsers() {
			try {
				const res = await fetch("/data.json");
				const data = await res.json();

				setUsers(data);
				setIsLoaded(true);
			} catch (error) {
				console.log(error);
			}
		}

		fetchUsers();
	}, []);

	const selectedUser = users.find((user) => user.id === Number(id));

	if (!isLoaded) return <h1>Loading user...</h1>;

	return (
		<>
			<Helmet>
				<title>{selectedUser.name}</title>
			</Helmet>
			<div className="">
				<Card className="max-w-lg mx-auto text-center">
					<CardHeader>
						<img
							src={selectedUser.image}
							alt={selectedUser.name}
							className="w-xs mx-auto"
						/>
						<CardTitle className="mt-4">{selectedUser.name}</CardTitle>
						<CardDescription>{selectedUser.country}</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col">
						<p>Championships: {selectedUser.championships}</p>
						<p>Wins: {selectedUser.wins}</p>
						<p>Podiums: {selectedUser.podiums}</p>
						<p>Races: {selectedUser.races}</p>
					</CardContent>
					<CardFooter>Contact: {selectedUser.email}</CardFooter>
				</Card>
			</div>
		</>
	);
}
