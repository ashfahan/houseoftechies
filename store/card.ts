import create from "zustand"
import { ICard } from "../types/App.interface"
import { api } from "../utils/api"

interface State {
  cards: ICard[]
}

export const useStore = create<State>(() => ({
  cards: [],
}))

export async function getCard(card_number: string) {
  if (useStore.getState().cards.length === 0) await fetchCards()

  return useStore
    .getState()
    .cards.find((card) => card.card_number === card_number)
}

export async function fetchCards() {
  return await api.get<ICard[]>("").then((response) => {
    useStore.setState({ cards: response.data })
    return response.data
  })
}

export async function addCard(card: ICard) {
  useStore.setState((prev) => ({
    cards: [
      ...prev.cards,
      { ...card, card_number: prev.cards.length.toString() },
    ],
  }))
}
