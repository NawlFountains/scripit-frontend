import { Outlet } from "react-router-dom"

export default function Layout(){
	return (
		<div className="min-h-screen text-white">
		<div className="fixed inset-0 -z-10">
		<div className='absolute inset-0 bg-black'></div>
		<div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(168,85,247,0.35)_1px,_transparent_1px)] bg-[size:24px_24px]" />
		<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_black_100%)]" />
		</div>
		<main>
		<Outlet/>
		</main>
		</div>
	)
}
