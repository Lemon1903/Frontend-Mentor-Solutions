import { useEffect, useState } from "react";

export default function usePageDimensions(): [number, number] {
	const [dimensions, setDimensions] = useState({
		width: innerWidth,
		height: innerHeight,
	})

	useEffect(() => {
		const handleResize = () => {
			setDimensions({
				width: innerWidth,
				height: innerHeight,
			})
		}
		window.addEventListener("resize", handleResize);
	}, [])

	return [dimensions.width, dimensions.height]
}
