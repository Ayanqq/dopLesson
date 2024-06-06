import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'


export const DecksList = () => {

  const decks = useAppSelector(state => state.decksReducer.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    decksApi.getDecks()
      .then(res => {
        dispatch(setDecksAC(res.data.items))
      })
  }, [dispatch])


  return <ul className={s.list}>
    {decks?.map((deck) => (
      <DeckItem deck={deck}/>
    ))}
  </ul>
}

// Ошибка с редаксом, как правильно использовать его
