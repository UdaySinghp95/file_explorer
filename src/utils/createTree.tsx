import HashMap from "../types/HashMap";
import TreeFolder from "../common/TreeFolder";

function createTree(
	hash: HashMap,
	path: string[],
	dir: string[]
): React.ReactNode {
	const curr = path[0];
	const newPath = path.slice(1, path.length);

	const newDir = [...dir, curr];

	return (
		<TreeFolder title={path[0]} key={curr} dir={newDir}>
			{hash[curr].map((folder) =>
				folder === newPath[0] ? (
					createTree(hash, newPath, newDir)
				) : (
					<TreeFolder
						title={folder}
						key={folder}
						dir={[...newDir, folder]}
					></TreeFolder>
				)
			)}
		</TreeFolder>
	);
}

export default createTree;
