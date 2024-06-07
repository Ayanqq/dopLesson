import { decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const fetchDecksTC = () => async (dispatch: AppDispatch) => {
  try {
    const res = await decksApi.getDecks()
    dispatch(setDecksAC(res.data.items))
  } catch (e) {
    console.log(e)
  }
}

// export const postDecksTC = () => async (dispatch:AppDispatch) => {
//   try {
//     const res = await decksApi.postDecks()
//     dispatch(addDeckAC(res))
//   }
// }