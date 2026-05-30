import { useNavigate } from "react-router-dom"

export default function HomeButton() {
	const navigate = useNavigate()
	return (
		<>
			<div onClick={() => navigate(`/`)} className='absolute top-0 left-0 cursor-pointer text-2xl font-display p-5 rounded-lg hover:bg-gray-800'>
			{'>'} Home
			</div>
		</>
	)
}
