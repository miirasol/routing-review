import { Link } from "react-router-dom";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
	return (
		<>
			<div className="px-8">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink
								render={<Link to={"/"} />}
								className="hover:bg-black/5 transition-opacity"
							>
								Home
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								render={<Link to={"/about"} />}
								className="hover:bg-black/5 transition-opacity"
							>
								About
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</>
	);
}
