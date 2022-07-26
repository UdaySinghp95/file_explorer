function generateId() {
	let count = 0;

	return () => count++ + "";
}

export default generateId();
