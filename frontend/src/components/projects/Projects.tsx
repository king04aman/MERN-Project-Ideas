"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { projectsList, Tags } from "@/data/data";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import { Skeleton } from "../ui/skeleton";

type LevelsType = Tags["level"] | "All";
const LOCAL_STORAGE_KEY = "projectLevel";

const Projects = ({ className }: { className: string }) => {
	const [level, setLevel] = useState<LevelsType>("All");
	const [loading, setLoading] = useState(false);

	// Load from localStorage on mount
	useEffect(() => {
		const saved = localStorage.getItem(
			LOCAL_STORAGE_KEY
		) as LevelsType | null;
		if (
			saved &&
			["Begineer", "Intermediate", "Advanced", "All"].includes(saved)
		) {
			setLevel(saved);
		}
		setLoading(true);
	}, []);

	// Update localStorage whenever level changes
	useEffect(() => {
		if (loading) {
			localStorage.setItem(LOCAL_STORAGE_KEY, level);
		}
	}, [level, loading]);

	const filteredProjects = projectsList.filter(
		(project) => level === "All" || project.tag.level === level
	);

	if (!loading) {
		// Shimmer while waiting for hydration
		return (
			<div className={cn(className, "animate-pulse space-y-3")}>
				<div className="flex gap-2">
					<Skeleton className="h-8 w-20 rounded bg-muted-foreground/10" />
					<Skeleton className="h-8 w-28 rounded bg-muted-foreground/10" />
					<Skeleton className="h-8 w-24 rounded bg-muted-foreground/10" />
					<Skeleton className="h-8 w-16 rounded bg-muted-foreground/10" />
				</div>
				<div className="flex flex-col gap-2 mt-5">
					{[1, 2, 3].map((i) => (
						<div key={i} className="h-20 rounded-2xl bg-muted dark:bg-muted/40" />
					))}
				</div>
			</div>
		);
	}

	return (
		<div className={cn(className)}>
			<ToggleGroup
				value={level}
				onValueChange={(newValue: LevelsType) => {
					if (newValue) setLevel(newValue);
				}}
				className="min-w-sm"
				variant="outline"
				type="single"
			>
				<ToggleGroupItem value="Begineer">Begineer</ToggleGroupItem>
				<ToggleGroupItem value="Intermediate">
					Intermediate
				</ToggleGroupItem>
				<ToggleGroupItem value="Advanced">Advanced</ToggleGroupItem>
				<ToggleGroupItem value="All">All</ToggleGroupItem>
			</ToggleGroup>

			<div className="flex flex-col gap-2 mt-5">
				{filteredProjects.map((project) => (
					<ProjectCard
						projectItem={project}
						key={project.longTitle}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
