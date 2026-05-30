import type { Movie } from "../lib/definitions"

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export const getWatchlist = async (username: string): Promise<Movie[]> => {
	const res = await fetch(
		`${BASE_URL}/letterboxd_handler/${username}`
	)
	if (!res.ok) throw new Error('Failed to retrieve watchlist')
	return res.json()
}
