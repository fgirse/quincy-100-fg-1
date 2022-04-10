/* eslint-disable prettier/prettier */
import { signIn } from "next-auth/react"
import LayoutWrapper from "./LayoutWrapper"

export default function AccessDenied() {
  return (
    <>
      <h1>Zugang nicht möglich</h1>
      <p>
        <a
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          Du musst angemeldet sein um diese Seite sehen zu können!!!
        </a>
      </p>
    </>
  )
}
