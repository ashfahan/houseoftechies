import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { Children, useEffect, useState } from "react"

interface Props extends LinkProps {
  activeClassName: string
  href: string
  as?: string
}

export const NavLink: React.FC<Props> = (props) => {
  const { activeClassName, children } = props
  const { asPath, isReady } = useRouter()

  const child = Children.only(children) as React.ReactElement
  const childClassName = child?.props.className || ""
  const [className, setClassName] = useState(childClassName)

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(props.as || props.href, location.href)
        .pathname

      const activePathname = new URL(asPath, location.href).pathname

      const newClassName =
        linkPathname === activePathname
          ? `${childClassName} ${activeClassName}`.trim()
          : childClassName

      if (newClassName !== className) {
        setClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    childClassName,
    activeClassName,
    setClassName,
    className,
  ])

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}
