import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<>
			<Helmet>
				<title>Page Not Found</title>
			</Helmet>
			<div className="bg-zinc-100 h-screen">
				<div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
					<h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						404 - Page not found!
					</h1>
					<Link to={"/"}>
						<Button>Go Home</Button>
					</Link>
				</div>
			</div>
		</>
	);
}
