import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate()
	return (
	  <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 mx-auto justify-center items-center'>
	      <div onClick={() => navigate('/pdf')} className='cursor-pointer border p-5 rounded-lg hover:bg-gray-800'>
		<h2 className='text-xl font-bold'>PDF Splitter</h2>
		<p className='text-gray-400'>Split a PDF by page range</p>
	      </div>
	      <div onClick={() => navigate('/letterboxd')} className='cursor-pointer border p-5 rounded-lg hover:bg-gray-800'>
		<h2 className='text-xl font-bold'>Watchlist</h2>
		<p className='text-gray-400'>Get your Letterboxd watchlist</p>

		
	      </div>
		<div className="cursor-pointer border p-5">
		<h2 className='text-xl font-bold'>Dummy script</h2>
		<p className='text-gray-400'>Get your Letterboxd watchlist</p>
		</div>
    </div>

	)
}
