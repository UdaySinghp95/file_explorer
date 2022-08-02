function getName(name: string): string {
	return name.split("-")[0];
}

function generateID() {
	let count = 0;

	return count++ + "";
}

export { getName, generateID };
