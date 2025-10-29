import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { heroData } from "@/data/data";
import { cn } from "@/lib/utils";

const HeroCard = ({ className }: { className?: string }) => {
	return (
		<Card className={cn(className)}>
			<CardHeader>
				<CardTitle className="text-4xl">{heroData.title}</CardTitle>
				<CardDescription>{heroData.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="leading-7 text-gray-700 dark:text-gray-200 [&:not(:first-child)]:mt-6">
					{heroData.longDescription}
				</p>
			</CardContent>
		</Card>
	);
};

export default HeroCard;
