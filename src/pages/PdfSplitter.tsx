import { useState } from "react"
import { splitPdf, downloadBlob } from "../api/pdf"

export default function PdfSplitter() {
	const [file, setFile] = useState<File | null>(null)
	const [startPage, setStartPage] = useState(1)
	const [endPage, setEndPage] = useState(1)
	const [loading, setLoading] = useState(false)

	const handleSubmit = async () => {
		if (!file) return
			setLoading(true)
		try {
			const blob = await splitPdf(file, startPage, endPage)
			downloadBlob(blob, `output(${startPage}-${endPage}).pdf`)
		} catch (e) {
			console.error(e)
		} finally {
			setLoading(false)
		}
	}



	return (
	<>
		<div className="flex flex-col min-h-screen md:min-h-screen md:grid lg:grid-cols-3 lg:justify-center items-center p-5 lg:p-20 m-20 gap-5">

			<input type='file' accept='application/pdf' onChange={e => setFile(e.target.files?.[0] ?? null)} className="cursor-pointer rounded-2xl p-5 bg-white/40 lg:col-span-2 w-full h-full">
			</input>
			<div className="flex flex-col lg:flex-col flex-wrap gap-10">
				<input type='number' value={startPage} onChange={e => setStartPage(Number(e.target.value))} placeholder="Start page" className="text-center" />
				<input type='number' value={endPage} onChange={e => setEndPage(Number(e.target.value))} placeholder="End page" className="text-center"/>
			<button onClick={handleSubmit} disabled={!file || loading} className="cursor-pointer rounded-xl border-white border p-2 hover:bg-white/40 w-full">
			{loading ? 'Splitting...' : 'Split PDF'}
			</button>
			</div>
		</div>
	</>
	)
}
