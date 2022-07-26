import HashMap from "../types/HashMap";

function deleteNode(hash: HashMap, root: string): HashMap {
	for (let folder of hash[root]) {
		deleteNode(hash, folder);

		delete hash[folder];
	}

	return hash;
}

export default deleteNode;
