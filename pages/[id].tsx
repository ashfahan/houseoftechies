import { useRouter } from "next/router"
import React, { useState } from "react"
import ReactLoading from "react-loading"
import { getCard } from "../store/card"
import { ICard, Tier } from "../types/App.interface"
import { Tiers } from "../utils/contants"

const bgcolor: Record<Tier, string> = {
  gold: "text-yellow-600",
  silver: "text-gray-500",
  bronze: "text-yellow-600",
}

const Product: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [card, setCard] = useState<ICard>()

  if (!card) {
    getCard(id as string).then((data) => setCard(data))

    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <ReactLoading type="spin" color="#000" width={75} />
      </div>
    )
  }

  const { card_number, membership_tier, last_name, first_name, description } =
    card

  return (
    <div className="p-6 items-center">
      <div className="text-3xl mb-4">Card Detail</div>
      <div>
        <span className="font-bold">Card Number : </span>
        <span>{card_number}</span>
      </div>
      <div>
        <span className="font-bold">Full Name</span> : {first_name} {last_name}
      </div>
      <div>
        <span className="font-bold">Membership Tier : </span>
        <span className={`${bgcolor[membership_tier as Tier]}`}>
          {Tiers[membership_tier as Tier]}
        </span>
      </div>
      {description && (
        <div>
          <span className="font-bold">Description</span> : {description}
        </div>
      )}
    </div>
  )
}

export default Product
