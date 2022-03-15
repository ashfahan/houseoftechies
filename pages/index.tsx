import React from "react"
import ReactLoading from "react-loading"
import { ProductCard } from "../components/ProductCard"
import { fetchCards, useStore } from "../store/card"

const ProductList: React.FC = () => {
  const cards = useStore((state) => state.cards)

  if (cards.length === 0) {
    fetchCards()

    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <ReactLoading type="spin" color="#000" width={75} />
      </div>
    )
  }

  return (
    <section className="container">
      <div className="flex-grid mt-4">
        {cards.map((datum) => (
          <div
            key={datum.card_number}
            className="column w-full sm:w-6/12 md:w-4/12 p-2"
          >
            <ProductCard {...datum} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
