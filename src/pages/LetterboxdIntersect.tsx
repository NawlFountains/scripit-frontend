import {useState} from "react"
import type { Movie } from "../lib/definitions"
import HomeButton from "../components/HomeButton"
import {getIntersectedWatchlist} from "../api/letterboxd"

export default function LetterboxdIntersect() {
	const [movies, setMovies] = useState<Movie[]>([])
	const [usernames, setUsernames] = useState<string[]>(['',''])
	const [loading, setLoading] = useState(false)
	const [status, setStatus] = useState<'idle'|'success'|'error'>('idle')

	const addUsername = () => setUsernames([... usernames ,''])
	const removeUsername = (i: number) => setUsernames(usernames.filter((_,idx) => idx !== i))
	const updateUsername = (i: number, value: string) => {
		const updated = [...usernames]
		updated[i] = value
		setUsernames(updated)
	}

	const handleSubmit = async () => {
		setLoading(true)
		try {
			const data = await getIntersectedWatchlist(usernames)
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
		<h1 className="font-display text-4xl">Intersect two or more Letterboxd user watchlists</h1>
		<div className="flex flex-col md:flex-row border border-gray-300/20 rounded-2xl p-4 gap-4">
			{usernames.map((username, i) => (
				<div key={i} className='flex gap-2'>
					<input
					type='text'
					value={username}
					onChange={e => updateUsername(i, e.target.value)}
					placeholder={`Username ${i + 1}`}
					className='border p-4 rounded-xl border-gray-300/20 w-full'
					/>
					{usernames.length > 2 && (
						<button onClick={() => removeUsername(i)}>✕</button>
					)}
				</div>
			))}
			<button 
				className="p-2 rounded-xl hover:bg-gray-500/40 border border-dashed border-gray-300/40 font-display"
				onClick={addUsername}>+ Add user</button>
			<button 
				className="p-5 rounded-xl hover:bg-gray-500/40 border border-gray-300/40 font-display"
				disabled={loading}
				onClick={handleSubmit}>
				{loading ? 'Intersecting...' : 'Intersect'}
			</button>
		</div>

			<div className="flex flex-col">
			{status === 'error' && ( <div>No movies in common</div>)}
			{loading && (
				<p className="text-2xl font-display">
					Intersecting watchlists...
				</p>
			)}
			{status === 'success' && !loading  && (
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
