import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
	return (
		<>
			<Link to={`/users/${user.id}`}>
				<Card size="sm" className="hover:shadow-lg transition-shadow">
					<CardHeader>
						<CardTitle>{user.name}</CardTitle>
					</CardHeader>
					<CardContent>{user.email}</CardContent>
					<CardFooter>User #{user.id}</CardFooter>
				</Card>
			</Link>
		</>
	);
}
