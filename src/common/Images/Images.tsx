import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import "./images.css";
import { useDispatch, useSelector } from "react-redux";
import { setImageVisile } from "../../store/action";
import Photo from "../../types/Photos";
import State from "../../store/types/State";
import getName from "../../utils/getName";

type PropsType = {
	children?: React.ReactNode;
};

function Images({ children }: PropsType) {
	const [list, setList] = useState<string[]>([]);
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(0);
	const observer = useRef<IntersectionObserver>();
	const curr = useSelector(({ path }: State) => path[path.length - 1]);

	useEffect(() => {
		console.log("changes images", curr);

		setList([]);
	}, [curr]);

	console.log(curr);

	const fetchImages = async () => {
		console.log("fetching " + curr);

		try {
			setLoading(1);

			const {
				data: { results },
			} = await axios.get(
				`https://api.unsplash.com/search/photos/?query=${getName(
					curr
				)}&page=${page}&per_page=21&orientation=landscape&client_id=H8VJv2yEWzXwlRYpjUT_dx88geTwpCYnyRUcUZvQgM4`
			);

			const newList = [...list];

			results.map((img: Photo) => newList.push(img.urls.thumb as string));

			setPage(page + 1);

			setList(newList);

			setLoading(0);

			if (results.length === 0) setLoading(2);
		} catch (e) {
			setLoading(2);
			console.log(e);
		}
	};

	const lastElementRef = useCallback(
		(node: HTMLImageElement) => {
			if (loading) return;

			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].intersectionRatio) fetchImages();
			});

			if (node && loading === 0) observer.current.observe(node);
		},
		[loading]
	);

	const dispatch = useDispatch();

	const handleClick = (img: string) =>
		dispatch(setImageVisile(img.replace("w=200", "w=1080")));

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

				{loading === 0 && <div ref={lastElementRef} />}
			</div>

			{loading !== 0 && (
				<div className="im26st">
					{loading === 1 && <img src="/loading.svg" alt="loading state" />}
					{loading === 2 && (
						<img src="/error.gif" alt="error state" className="im26er" />
					)}
				</div>
			)}
		</div>
	);
}

export default Images;
