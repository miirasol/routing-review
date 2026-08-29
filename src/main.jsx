import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import UserPage from "./pages/UserPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/users/:id",
				element: <UserPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<RouterProvider router={router}></RouterProvider>
		</HelmetProvider>
	</StrictMode>,
);
