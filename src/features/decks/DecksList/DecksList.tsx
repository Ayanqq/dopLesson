import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'
import { useDispatch, useSelector } from 'react-redux'
import {AppRootState, useAppSelector} from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'


export const DecksList = () => {

  const decks = useAppSelector(state => state.decksReducer.decks)
  const dispatch = useDispatch()

  useEffect(() => {
    decksApi.getDecks()
      .then(res => {
        dispatch(setDecksAC(res.data.items))
      })
  }, [dispatch])

  return <ul className={s.list}>
    {decks?.map(el => <li>
      {el.id}
    </li>)}
  </ul>
}

// Ошибка с редаксом, как правильно использовать его
