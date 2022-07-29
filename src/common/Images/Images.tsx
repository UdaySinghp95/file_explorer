import { useCallback, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "react-content-loader";
import axios from "axios";

import State from "../../store/types/State";
import { setImageVisile } from "../../store/action";

import getName from "../../utils/getName";

import Photo from "../../types/Photos";

import "./images.css";

function Images({ children }: PropsType) {
	const [list, setList] = useState<string[]>([]);
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(0);
	const observer = useRef<IntersectionObserver>();
	const curr = useSelector(({ path }: State) => path[path.length - 1]);

	useEffect(() => {
		setList([]);
		setLoading(0);
		setPage(0);
	}, [curr]);

	const fetchImages = useCallback(async () => {
		try {
			setLoading(1);

			console.log("fetching", curr);

			const {
				data: { results },
			} = await axios.get(
				`https://api.unsplash.com/search/photos/?query=${getName(
					curr
				)}&page=${page}&per_page=20&orientation=landscape&client_id=H8VJv2yEWzXwlRYpjUT_dx88geTwpCYnyRUcUZvQgM4`
			);

			let newList: string[] = [];

			console.log(curr, list[0]?.includes(getName(curr)));

			if (list.length !== 0 && list[0].includes(getName(curr)))
				newList = [...list];

			results.map((img: Photo) => newList.push(img.urls.small as string));

			setPage(page + 1);

			setList(newList);

			setLoading(0);

			if (results.length === 0) setLoading(2);
		} catch (e) {
			setLoading(2);
			console.log(e);
		}
	}, [curr, list, page]);

	const lastElementRef = useCallback(
		(node: HTMLImageElement) => {
			if (loading) return;

			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].intersectionRatio) fetchImages();
			});

			if (node && loading === 0) observer.current.observe(node);
		},
		[loading, fetchImages]
	);

	const dispatch = useDispatch();

	const handleClick = (img: string) =>
		dispatch(setImageVisile(img.replace("w=400", "w=1080")));

	return (
		<div className="im26ctn">
			<div className="im26sc">
				{children}

				{list.map((url, index) => (
					<img
						src={url}
						key={index}
						className="im26im animate__animated  animate__fadeInUp"
						onClick={() => handleClick(url)}
						alt="related to folder name"
					/>
				))}

				{loading !== 2 && (
					<>
						<div ref={lastElementRef} />
						{[...Array(20)].map((d, index) => (
							<ContentLoader
								key={index}
								width="18rem"
								height="13rem"
								className="im26ld"
							>
								<rect width="100%" height="100%" />
							</ContentLoader>
						))}
					</>
				)}
			</div>

			<div className="im26st">
				{loading === 2 && (
					<img
						src={process.env.PUBLIC_URL + "/error.gif"}
						alt="error state"
						className="im26er"
					/>
				)}
			</div>
		</div>
	);
}

type PropsType = {
	children?: React.ReactNode;
};

export default Images;
