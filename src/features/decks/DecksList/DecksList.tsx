import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { fetchDecksTC } from '../decks-thunks.ts'


export const DecksList = () => {

  const decks = useAppSelector(state => state.decksReducer.decks)
  const dispatch = useAppDispatch()
  console.log(decks)
  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])


  return <ul className={s.list}>
    {decks?.map((deck) => (
      <DeckItem deck={deck} key={deck.id}/>
    ))}
  </ul>
}

// Ошибка с редаксом, как правильно использовать его
