import { useEffect, useState } from "react";

export const useFetch = (searchQuery) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState("");

	useEffect(() => {
		const getData = async (searchQuery) => {
			try {
				setLoading(true);
				const res = await fetch(
					`https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`,
				);
				if (!res.ok) throw new Error("No Recipe Found");
				const data = await res.json();
				console.log(searchQuery);
				setData(data.recipes);
				setLoading(false);
			} catch (err) {
				setError(err.message);
			}
		};
		getData();
	}, [searchQuery]);

	return { data, loading, error };
};
