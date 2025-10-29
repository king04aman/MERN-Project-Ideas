import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ProjectItem } from "@/data/data";
import { Badge } from "../ui/badge";
const ProjectCard = ({ projectItem }: { projectItem: ProjectItem }) => {
	return (
		<>
			{projectItem ? (
				<Card>
					<CardHeader>
						<CardTitle>{ projectItem.tag.id + ". " + projectItem.title}</CardTitle>
						<CardDescription>
							{projectItem.longTitle}
						</CardDescription>
						<CardAction>
							<Badge variant={"secondary"} asChild>
								<p>{projectItem.tag.level}</p>
							</Badge>
						</CardAction>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-gray-800">
							{projectItem.description}
						</p>
						<CardAction className="mt-2">
							{projectItem.techs &&
								projectItem.techs.map((item) => {
									return (
										<Badge
											variant={"outline"}
											key={item}
											className="mr-1"
											asChild
										>
											<p>{item}</p>
										</Badge>
									);
								})}
						</CardAction>
					</CardContent>
				</Card>
			) : (
				<p>project item not found</p>
			)}
		</>
	);
};

export default ProjectCard;
