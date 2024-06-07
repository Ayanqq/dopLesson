import { GetDecksItemType } from './decks-api.ts'


const initialState = {
  decks: [] as GetDecksItemType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS': {
      return { ...state, decks: action.decks }
    }
    case 'ADD-DECK': {
      const newDeck = {...state.decks, name:action.title }
      return state
      // todo:не работает типизация...............
    }
    default:
      return state
  }
}

type DecksActions = setDecksTypeAC | addDeckAC

type setDecksTypeAC = ReturnType<typeof setDecksAC>
type addDeckAC = ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: GetDecksItemType[]) => {
  return {
    type: 'SET_DECKS',
    decks,
  } as const
}

export const addDeckAC = (title: string) => {
  return {
    type: 'ADD-DECK',
    title,
  } as const
}

