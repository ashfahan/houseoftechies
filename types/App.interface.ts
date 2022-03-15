export interface ICard {
  first_name: string
  last_name: string
  membership_tier: Tier
  card_number?: string
  description?: string
}

export type Tier = "gold" | "silver" | "bronze"
