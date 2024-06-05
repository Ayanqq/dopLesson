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
    default:
      return state
  }
}

type DecksActions = setDecksTypeAC

type setDecksTypeAC = ReturnType<typeof setDecksAC>

export const setDecksAC = (decks: GetDecksItemType[]) => {
  return {
    type: 'SET_DECKS',
    decks
  } as const
}
