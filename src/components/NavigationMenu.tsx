"use client"

import Link from "next/link"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import links from "./Links"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

export default function NavigationMenu() {
  const pathname = usePathname()
  return (
    <Menu as="nav" className="flex items-center">
      <Menu.Button className="text-slate-700 transition hover:text-sky-400 dark:text-white dark:hover:text-sky-400">
        <span className="sr-only">Menu Button</span>
        <Bars3Icon className="h-10 w-10" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items as="ul" className="absolute top-full mt-4 rounded-md border-2 border-slate-900/10 bg-white shadow-lg dark:border-sky-400/10 dark:bg-slate-900">
          {links.map(({ link, label, icon: Icon }) => (
            <Menu.Item as="li" key={link}>
              {({ close }) => (
                <Link
                  href={link}
                  onClick={close}
                  className={twMerge(
                    "flex items-center gap-4 px-8 py-4 text-slate-700 transition hover:bg-slate-100 hover:text-sky-400 dark:text-white dark:hover:bg-slate-800 dark:hover:text-sky-400",
                    pathname === link || pathname === "/laostextbooks/" || (pathname?.includes(link) && link !== "/") ? " text-sky-400 dark:text-sky-400" : ""
                  )}
                >
                  <Icon className="h6 w-6" />
                  {label}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
