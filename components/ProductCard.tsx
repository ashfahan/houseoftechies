import Link from "next/link"
import React from "react"
import { ICard, Tier } from "../types/App.interface"
import { Tiers } from "../utils/contants"

const bgcolor: Record<Tier, string> = {
  gold: "bg-yellow-600",
  silver: "bg-gray-500",
  bronze: "bg-yellow-800",
}

export const ProductCard: React.FC<ICard> = (props) => {
  const { card_number, membership_tier, last_name, first_name, description } =
    props

  const name = first_name + " " + last_name

  return (
    <div className="p-6 bg-white flex-grid items-center gap-2 rounded-lg hover:shadow-md hover:-translate-y-2 relative border-2 transition-all duration-300 h-full pt-10 break-words">
      <div className="text-right mt-2 mr-2 absolute top-0 right-0">
        <div
          className={`font-bold inline-block py-1 px-2 text-white rounded-lg ${bgcolor[membership_tier]}`}
        >
          {Tiers[membership_tier]}
        </div>
      </div>

      <div className="column flex items-center justify-center h-24 w-24 bg-orange-500 text-white rounded-lg text-3xl font-bold">
        {first_name[0].toUpperCase()}
      </div>

      <div className="column break-all">
        <div className="text-sm text-neutral-400">{card_number}</div>
        <div className="text-2xl font-bold">
          {name.length > 28 ? (
            <>
              {name.slice(0, 28)} <span>...</span>
            </>
          ) : (
            name
          )}
        </div>
        {description && (
          <div>
            {description.length > 40 ? (
              <>
                {description.slice(0, 40)} <span>...</span>
              </>
            ) : (
              description
            )}
          </div>
        )}
      </div>
      <Link passHref href={`/${card_number}`}>
        <a className="absolute inset-0" />
      </Link>
    </div>
  )
}
