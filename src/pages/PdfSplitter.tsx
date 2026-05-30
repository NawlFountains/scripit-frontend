import { useState, useRef } from "react"
import { splitPdf, downloadBlob } from "../api/pdf"
import { useNavigate } from "react-router-dom"

export default function PdfSplitter() {
	const [file, setFile] = useState<File | null>(null)
	const [startPage, setStartPage] = useState(1)
	const [endPage, setEndPage] = useState(1)
	const [loading, setLoading] = useState(false)
	const fileInputRef = useRef<HTMLInputElement>(null)
	const navigate = useNavigate()

	const handleSubmit = async () => {
		if (!file) return
			setLoading(true)
		try {
			const blob = await splitPdf(file, startPage, endPage)
			const baseName = file.name.replace('.pdf', '')
			downloadBlob(blob, `${baseName}(${startPage}-${endPage}).pdf`)
		} catch (e) {
			console.error(e)
		} finally {
			setLoading(false)
		}
	}



	return (
	<>

			<div onClick={() => navigate(`/`)} className='absolute top-0 left-0 cursor-pointer text-2xl font-display p-5 rounded-lg hover:bg-gray-800'> {'>'} Home</div>
		<div className="flex flex-col h-[67vh] md:grid lg:grid-cols-3 lg:justify-center items-center p-5 lg:p-20 m-20 gap-5">

			<div 
			onClick={() => fileInputRef.current?.click()}
			className="flex flex-col rounded-2xl lg:col-span-2 w-full h-full bg-gray-200/20 justify-center items-center">
			{file ? (
			    <>
			      <span className="text-4xl">📄</span>
			      <p className="font-bold">{file.name}</p>
			    </>
			  ) : (
			    <>
			      <span className="text-2xl font-bold">Click to upload PDF</span>
			      <p className="text-gray-400 text-lg">or drag and drop</p>
			    </>
			  )}
			<input 
				ref={fileInputRef}
				type='file' 
				accept='application/pdf' 
				onChange={e => setFile(e.target.files?.[0] ?? null)} 
				className="hidden">
			</input>

			</div>
			<div className="flex flex-col flex-wrap gap-10 w-full h-full justify-center p-5">
				<div className="flex flex-row flex-wrap justify-center border broder-gray-500 rounded-2xl divide-x p-5">
					<p className="flex-2 font-display uppercase">
						Start page
					</p>
					<input 
						type='number' 
						value={startPage} 
						onChange={e => setStartPage(Number(e.target.value))} placeholder="Start page" className="text-center flex-1" />
				</div>
				<div className="flex flex-row flex-wrap justify-center border broder-gray-500 rounded-2xl divide-x p-5">
					<p className="flex-2 font-display uppercase">
					End page
					</p>
					<input 
						type='number' 
						value={endPage} 
						onChange={e => setEndPage(Number(e.target.value))} placeholder="End page" className="text-center"/>
				</div>
				<button 
					onClick={handleSubmit} 
					disabled={!file || loading} 
					className="cursor-pointer rounded-xl border-white border p-4  w-full font-display uppercase hover:bg-white/40">
					{loading ? 'Splitting...' : 'Split PDF'}
				</button>
			</div>
		</div>
	</>
	)
}
