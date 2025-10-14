import { cn } from "@/lib/utils";
import React from "react";

export const BaseNode = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & { selected?: boolean }
>(({ className, selected, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"relative rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all duration-200",
			"text-sm leading-relaxed",
			"hover:shadow-md hover:border-border/60",
			selected ? "ring-2 ring-ring ring-offset-2 shadow-lg border-border" : "border-border/40",
			className,
		)}
		// biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
		tabIndex={0}
		{...props}
	/>
));
BaseNode.displayName = "BaseNode";
