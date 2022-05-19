export function getBytesStored(): Promise<number> {
	return fetch('https://ic-api.internetcomputer.org/api/v3/metrics/memory')
		.then(
			(res) =>
				res.json() as Promise<{
					memory_usage: [timestamp: number, stateSize: string];
				}>
		)
		.then((res) => +res.memory_usage[1]);
}
export function getNodeProviders(): Promise<number> {
	return fetch('https://ic-api.internetcomputer.org/api/node-providers/count')
		.then(
			(res) =>
				res.json() as Promise<{
					node_providers: {
						dc: 'all';
						node_providers: number;
					}[];
				}>
		)
		.then((res) => +res.node_providers[0].node_providers);
}

export function getTransactionRate(): Promise<number> {
	return fetch('https://ic-api.internetcomputer.org/api/v3/metrics/message-execution-rate')
		.then(
			(res) =>
				res.json() as Promise<{
					message_execution_rate: [timestamp: number, rate: string][];
				}>
		)
		.then((res) => +res.message_execution_rate[0][1]);
}

export function getBlockCount(): Promise<number> {
	return fetch('https://ic-api.internetcomputer.org/api/metrics/pblock')
		.then(
			(res) =>
				res.json() as Promise<{
					block: [[timestamp: number, height: string]];
				}>
		)
		.then((res) => +res.block[0][1]);
}

export function getCanisterCount(): Promise<number> {
	return fetch('https://ic-api.internetcomputer.org/api/metrics/registered-canisters')
		.then(
			(res) =>
				res.json() as Promise<{
					running_canisters: [timestamp: number, count: string][];
					stopped_canisters: [timestamp: number, count: string][];
				}>
		)
		.then((res) => +res.running_canisters[0][1]);
}

export function getBlockRate(): Promise<number> {
	return fetch('https://ic-api.internetcomputer.org/api/metrics/block-rate')
		.then(
			(res) =>
				res.json() as Promise<{
					block_rate: [[timestamp: number, block_rate: string]];
				}>
		)
		.then((res) => +res.block_rate[0][1]);
}

export function getNodeCount(): Promise<number> {
	return fetch('https://ic-api.internetcomputer.org/api/node-list')
		.then(
			(res) =>
				res.json() as Promise<
					{
						dc: string;
						node_id: string;
						status: [timestamp: number, status: string];
					}[]
				>
		)
		.then((res) => res.length);
}

export function getSubnetCount(): Promise<number> {
	return fetch('https://ic-api.internetcomputer.org/api/metrics/ic-subnet-total')
		.then(
			(res) =>
				res.json() as Promise<{
					ic_subnet_total: [timestamp: number, count: string];
				}>
		)
		.then((res) => +res.ic_subnet_total[1]);
}

export function getCpuCoreCount(): Promise<number> {
	return fetch('https://ic-api.internetcomputer.org/api/metrics/ic-cpu-cores')
		.then(
			(res) =>
				res.json() as Promise<{
					ic_cpu_cores: [timestamp: number, count: string][];
				}>
		)
		.then((res) => +res.ic_cpu_cores[0][1]);
}
