import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
	return (
		<>
			<div className="min-h-screen bg-zinc-100">
				<NavBar />
				<main className="max-w-7xl mx-auto">
					<Outlet />
				</main>
			</div>
		</>
	);
}
