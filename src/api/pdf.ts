export const splitPdf = async (file: File, startPage: Number, endPage: Number): Promise<Blob> => {
	const formData = new FormData()
	formData.append('file', file)
	const endPoint = `http://localhost:8000/pdf_handler`

	const res = await fetch(
		`${endPoint}/split?start_page=${startPage}&end_page=${endPage}`,
			{ method: 'POST', body: formData }
	)

	if (!res.ok) throw new Error('Failed to split PDF')
	return res.blob()
}

export const downloadBlob = (blob: Blob, filename: string) => {
	const url = URL.createObjectURL(blob)
	const a = document.createElement('a')
	a.href = url
	a.download = filename
	a.click()
	URL.revokeObjectURL(url)
}
