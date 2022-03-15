import { useRouter } from "next/router"
import React from "react"
import { useForm } from "react-hook-form"
import { addCard } from "../store/card"
import { ICard } from "../types/App.interface"
import { Tiers } from "../utils/contants"

interface FormState extends ICard {}

const Add: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {},
  })
  const router = useRouter()

  const onSubmit = (value: FormState) => {
    addCard(value).then(() => {
      router.push("/")
    })
  }

  return (
    <div className="container md:w-5/12 mx-auto p-6">
      <div className="md:text-4xl text-2xl mt-5 text-center">Add Card</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="mt-5 block">
          <input
            className="input w-full"
            type="first_name"
            placeholder="First Name"
            {...register("first_name", {
              required: { value: true, message: "Required Field" },
            })}
          />
          {errors && errors.first_name && (
            <div className="text-red-500 text-sm">
              {errors.first_name.message}
            </div>
          )}
        </label>
        <label className="mt-5 block">
          <input
            className="input w-full"
            type="text"
            placeholder="Last Name"
            {...register("last_name", {
              required: { value: true, message: "Required Field" },
            })}
          />
          {errors && errors.last_name && (
            <div className="text-red-500 text-sm">
              {errors.last_name.message}
            </div>
          )}
        </label>
        <label className="mt-5 block">
          <select
            className="input w-full"
            placeholder="Tier"
            {...register("membership_tier", {
              required: { value: true, message: "Required Field" },
            })}
          >
            <option value="" className="hidden">
              Please Select
            </option>
            {Object.entries(Tiers).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>

          {errors && errors.membership_tier && (
            <div className="text-red-500 text-sm">
              {errors.membership_tier.message}
            </div>
          )}
        </label>
        <label className="mt-5 block">
          <textarea
            rows={3}
            className="input w-full"
            placeholder="Description"
            {...register("description", {
              required: { value: true, message: "Required Field" },
              minLength: {
                value: 10,
                message: "Description should be greater than 10 characters",
              },
            })}
          />
          {errors && errors.description && (
            <div className="text-red-500 text-sm">
              {errors.description.message}
            </div>
          )}
        </label>

        <button className="mt-3 button-fill button-primary w-full">
          Continue
        </button>
      </form>
    </div>
  )
}

export default Add
