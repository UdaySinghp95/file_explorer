type Photo = {
	id: number;
	width: number;
	height: number;
	urls: {
		large: string;
		regular: string;
		raw: string;
		small: string;
		thumb: string;
		color: string | null;
		user: {
			username: string;
			name: string;
		};
	};
};

export default Photo;
