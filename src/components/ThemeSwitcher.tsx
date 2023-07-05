"use client"

// import SunIcon from "@/assets/svg/sun.svg"
// import MoonIcon from "@/assets/svg/moon.svg"
// import DesktopIcon from "@/assets/svg/desktop.svg"
import { useTheme } from "next-themes"
import { useState, useEffect, Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid"
import { twMerge } from "tailwind-merge"

const settings = [
  {
    value: "light",
    label: "ສະຫວ່າງ",
    icon: SunIcon,
  },
  {
    value: "dark",
    label: "ມືດ",
    icon: MoonIcon,
  },
  {
    value: "system",
    label: "ຕາມລະບົບ",
    icon: ComputerDesktopIcon,
  },
]

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="text-slate-700 transition  hover:text-sky-400 dark:text-white dark:hover:text-sky-400">
        <span className="sr-only">Theme Switcher</span>
        {theme === "light" ? <SunIcon className="h-8 w-8" /> : <MoonIcon className="h-8 w-8" />}
      </button>
    )
  }
  return (
    <Listbox value={theme} onChange={setTheme}>
      <Listbox.Label className="sr-only">Theme Switcher</Listbox.Label>
      <Listbox.Button className="text-slate-700 transition hover:text-sky-400 dark:text-white dark:hover:text-sky-400">
        {theme === "light" ? <SunIcon className="h-8 w-8" /> : <MoonIcon className="h-8 w-8" />}
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Listbox.Options className="absolute right-4 top-full mt-4 rounded-md border-2 border-slate-900/10 bg-white shadow-lg dark:border-sky-400/10 dark:bg-slate-900">
          {settings.map(({ value, label, icon: Icon }) => (
            <Listbox.Option key={value} value={value} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={twMerge(
                    "flex cursor-pointer items-center gap-4 px-8 py-4 text-slate-700 transition hover:bg-slate-100 hover:text-sky-400 dark:text-white dark:hover:bg-slate-800 dark:hover:text-sky-400",
                    selected && "text-sky-400",
                    active && "bg-slate-100 text-sky-400 dark:bg-slate-800 dark:text-sky-400"
                  )}
                >
                  <Icon className="\ h-6 w-6" />
                  {label}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}
