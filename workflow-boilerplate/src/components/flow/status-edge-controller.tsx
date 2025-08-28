"use client";

import type { EdgeExecutionState } from "@/lib/flow/workflow-execution-engine";
import { StatusEdge } from "@/components/flow/status-edge";
import type { EdgeProps } from "@xyflow/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function StatusEdgeController(props: EdgeProps<any>) {
	return (
		<StatusEdge
			{...props}
			data={{
				status: props.data?.executionState?.error ? 'error' : 'pending',
			}}
		/>
	);
}
