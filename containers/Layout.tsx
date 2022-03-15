import { AppProps } from "next/app"
import React from "react"
import { Header } from "./Header"

export const Layout = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="bg-neutral-100 column p-0">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
