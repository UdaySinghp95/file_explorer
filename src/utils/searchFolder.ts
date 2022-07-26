import HashMap from "../types/HashMap";

let res: string[][] = [];

function helper(hash: HashMap, src: string, target: string, path: string[]) {
	for (let folder of hash[src]) {
		const newPath = [...path, folder];

		if (folder.toLowerCase().includes(target)) res.push(newPath);

		helper(hash, folder, target, newPath);
	}
}

function searchFolder(
	hash: HashMap,
	src: string,
	target: string,
	path: string[]
): string[][] {
	res = [];

	helper(hash, src, target.toLocaleLowerCase(), path);

	return res;
}

export default searchFolder;
