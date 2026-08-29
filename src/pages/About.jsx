import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

export default function About() {
	return (
		<>
			<Helmet>
				<title>About</title>
			</Helmet>
			<div className="p-6">
				<Card className="max-w-lg mx-auto">
					<CardHeader>
						<CardTitle>James Michael Mirasol</CardTitle>
						<CardDescription>
							3rd-Year BSIT Student who loves Formula 1
						</CardDescription>
						<CardAction>
							<Badge
								variant="secondary"
								className="p-0 overflow-hidden w-8 h-8"
							>
								<a href="http://github.com/miirasol" target="_blank">
									<img
										className="object-contain"
										src="/img/github-logo.svg"
										alt="github.com/miirasol"
									/>
								</a>
							</Badge>
						</CardAction>
					</CardHeader>
					<CardContent className="space-y-6 pt-2">
						<div className="space-y-1.5">
							<h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
								About Me
							</h3>
							<p className="text-sm text-foreground leading-relaxed">
								I write code, watch F1, and build web apps. This project is a
								simple React dashboard built with shadcn/ui and Tailwind.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
								Technologies & Tools
							</h3>
							<div className="flex flex-wrap gap-1.5">
								<Badge variant="secondary">Java</Badge>
								<Badge variant="secondary">C / C++</Badge>
								<Badge variant="secondary">JavaScript</Badge>
								<Badge variant="secondary">React</Badge>
								<Badge variant="secondary">Tailwind</Badge>
								<Badge variant="secondary">shadcn/ui</Badge>
								<Badge variant="secondary">Git / GitHub</Badge>
							</div>
						</div>

						<div className="space-y-2 pt-2 border-t">
							<h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
								Academic Details
							</h3>
							<div className="grid grid-cols-2 gap-y-1.5 text-sm">
								<span className="text-muted-foreground">Degree:</span>
								<span className="font-medium text-foreground">
									BS Information Technology
								</span>

								<span className="text-muted-foreground">Section:</span>
								<span className="font-medium text-foreground">3FG1</span>

								<span className="text-muted-foreground">Institution:</span>
								<span className="font-medium text-foreground">
									Bulacan State University
								</span>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
