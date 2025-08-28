"use client";

import type { EdgeExecutionState } from "@/lib/flow/workflow-execution-engine";
import { StatusEdge } from "@/components/flow/status-edge";
import type { EdgeProps } from "@xyflow/react";

export function StatusEdgeController({
	data,
	...props
}: EdgeProps<{
	executionState?: EdgeExecutionState;
}>) {
	return (
		<StatusEdge
			{...props}
			data={{
				error: !!data.executionState?.error,
			}}
		/>
	);
}
