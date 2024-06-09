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

export const postDecksTC = (title:string) => async (dispatch:AppDispatch) => {
  try {
    const res = await decksApi.postDecks(title)
    console.log(res)
    dispatch(addDeckAC(title, res.data))
  } catch (e) {
    console.log(e)
  }
}