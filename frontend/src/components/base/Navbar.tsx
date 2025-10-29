import Link from "next/link";
import { JSX } from "react";

import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

export default function Navbar(): JSX.Element {
	return (
		<header className="w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 ">
			<div className="mx-auto max-w-3xl px-4 sm:px-12 lg:px-10">
				<div className="flex h-16 items-center justify-between">
					{/* Brand */}
					<div className="flex items-center gap-3">
						<Link
							href="/"
							className="inline-flex items-center gap-2"
						>
							<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white font-semibold">
								😉
							</span>
							<span className="font-medium text-gray-900 dark:text-gray-100">
								FullStackfolio
							</span>
						</Link>
						<span className=" text-sm text-gray-500 dark:text-gray-400">
							Learn  · Build · Explore
						</span>
					</div>

					<div className=" flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-full border ">
						<AnimatedThemeToggler className="" />
					</div>
				</div>
			</div>
		</header>
	);
}
