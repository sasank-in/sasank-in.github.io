"use client"

import * as React from "react"

export function FooterYear() {
  const [year, setYear] = React.useState<number | null>(null)

  React.useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return <>{year ?? new Date().getFullYear()}</>
}
