import type { AppProps } from "next/app"
import React from "react"
import { Layout } from "../containers/Layout"
import "../styles/index.scss"

const App = (props: AppProps) => {
  return <Layout {...props} />
}

export default App
