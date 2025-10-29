"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function Container({
	className,
	maxWidth = "lg",
	children,
	...props
}: ContainerProps) {
	const maxWidthClasses: Record<typeof maxWidth, string> = {
		sm: "max-w-screen-sm",
		md: "max-w-screen-md",
		lg: "max-w-screen-lg",
		xl: "max-w-screen-xl",
		"2xl": "max-w-screen-2xl",
		full: "max-w-full",
	};

	return (
		<div
			className={cn(
				"w-full mx-auto px-4", // default padding + centering
				maxWidthClasses[maxWidth],
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}
