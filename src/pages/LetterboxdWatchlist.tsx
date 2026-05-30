import {useState} from "react"
import type { Movie } from "../lib/definitions"
import {getWatchlist} from "../api/letterboxd"
import HomeButton from "../components/HomeButton"

export default function LetterboxdWatchlist() {
	const [movies, setMovies] = useState<Movie[]>([])
	const [username, setUsername] = useState('')
	const [loading, setLoading] = useState(false)
	const [status, setStatus] = useState<'idle'|'success'|'error'>('idle')

	const handleSubmit = async () => {
		setLoading(true)
		try {
			const data = await getWatchlist(username)
			setMovies(data)
			setStatus('success')
		} catch (e) {
			setStatus('error')
			console.log(e)
		}
		setLoading(false)
	}
	return (
		<>
		<HomeButton/>
		<div className="flex flex-col justify-center items-center gap-5 p-20">
		<h1 className="font-display text-4xl">Retrieve a Letterboxd user Watchlist</h1>
		<div className="flex flex-row border border-gray-300/20 rounded-2xl p-4 gap-4">
		<input
			type='text'
			value={username}
			placeholder="username"
			className="ml-4 px-2 rounded-xl"
			onChange={e => setUsername(e.target.value)}/>
		<button
			disabled={loading}
			className="cursor-pointer border border-gray-300/40 p-2 rounded-2xl hover:bg-white/40"
			onClick={handleSubmit}>
			{loading ? 'Retriving watchlist...' : "Retrieve watchlist"}
			</button>
		</div>

			<div className="flex flex-col">
			{status === 'error' && ( <div>User not found </div>)}
			{loading && (
				<p className="text-2xl font-display">
					Retriving watchlist...
				</p>
			)}
			{status === 'success' && (
				<>
				<h2 className="font-display text-2xl text-center">Watchlist</h2>
				{movies.map((movie, i) => (	
				<div key={i}>
					<p>{movie.Name} ({movie.Year})</p>
				</div>
							  ))}
				</>)}
				
			    </div>
		</div>
		</>
	)
}
