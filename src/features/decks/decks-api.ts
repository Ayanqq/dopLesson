import axios from 'axios'

export type GetDecksItemType = {
  isFavorite: boolean,
  author:{
    id:string
    name:string
  }
  id:string
  userId:string
  name:string
  isPrivate:boolean
  cover:string
  created:string
  updated:string
  cardsCount:number
}

type GetDecksType = {
  items:Array<GetDecksItemType>
  pagination:{
    currentPage:number,
    itemsPerPage:number,
    totalPages:number,
    totalItems:number,
  }
}

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks: () => {
    return instance.get<GetDecksType>('/v2/decks')
  },
  postDecks: () => {
    return instance.post('/v1/decks')
  }
}
