import { Button } from "@/components/ui/button";
import { Panel } from "@xyflow/react";
import { Eye, PenLine, MessageSquare, Sparkles } from "lucide-react";
import type React from "react";

const nodeTypes = [
	{
		type: "visualize-text",
		label: "Visualize Text",
		icon: Eye,
	},
	{
		type: "text-input",
		label: "Text Input",
		icon: PenLine,
	},
	{
		type: "generate-text",
		label: "Generate Text",
		icon: MessageSquare,
	},
	{
		type: "prompt-crafter",
		label: "Prompt Crafter",
		icon: Sparkles,
	},
];

export function NodesPanel() {
	const onDragStart = (event: React.DragEvent, nodeType: string) => {
		event.dataTransfer.setData("application/reactflow", nodeType);
		event.dataTransfer.effectAllowed = "move";
	};

	return (
		<Panel position="top-center" className="flex gap-3 p-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg">
			{nodeTypes.map((nodeType) => (
				<Button
					key={nodeType.type}
					variant="outline"
					className="cursor-grab bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm transition-all duration-200 text-xs"
					style={{ fontWeight: 500, letterSpacing: '-0.025em' }}
					draggable
					onDragStart={(e) => onDragStart(e, nodeType.type)}
				>
					<nodeType.icon className="mr-2 h-3.5 w-3.5" />
					{nodeType.label}
				</Button>
			))}
		</Panel>
	);
}
