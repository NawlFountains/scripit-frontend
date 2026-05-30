import type { ScriptInfo } from "./definitions"

export const scripts : ScriptInfo[] = [
		{
			title:'PDF Splitter',
			description:'Split pdfs by page range',
			route:'/PdfSplitter'
		},
		{
			title:'Letterboxd watchlist',
			description:'Get your letterboxd watchlist',
			route:'/LetterboxdWatchlist'
		},
		{
			title:'Letterboxd watchlist intersecter',
			description:'Intersect two or more users letterboxd watchlists',
			route:'/LetterboxdIntersect'
		},
		{
			title:'Dummy script',
			description:'Dummy description',
			route:'/dummy',
		}
	]
