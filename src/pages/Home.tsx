import { useNavigate } from "react-router-dom";
import { scripts } from "../lib/constants";

export default function Home() {
	const navigate = useNavigate()

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 mx-auto justify-center items-center'>
		{scripts.map(script => (
			<div key={script.route} onClick={() => navigate(`${script.route}`)} className='cursor-pointer border p-5 rounded-lg hover:bg-gray-800'>
			<h2 className='text-2xl font-bold font-display'>{script.title}</h2>
			<p className='font-header text-gray-400'>{script.description}</p>
			</div>
		))}
		</div>

	)
}
