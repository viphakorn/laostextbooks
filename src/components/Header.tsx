"use client"

import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"

import Logo from "@/assets/svg/logo.svg"

import ThemeSwitcher from "./ThemeSwitcher"
import NavigationMenu from "./NavigationMenu"

export default function Header() {
  return (
    <header className="header sticky top-0 bg-white shadow shadow-sky-400/10 dark:bg-slate-900">
      <div className="container relative flex h-16 items-center justify-between">
        <NavigationMenu />
        <Link href="/" className="logo flex items-center gap-2">
          <ExportedImage src={Logo} alt="" className="w-16" />
          <h2 className="bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text text-2xl font-black text-sky-400 text-transparent">Laos TextBooks</h2>
          <span className="sr-only">ປຶ້ມແບບຮຽນ ປຶ້ມຄູ່ມືຄູ</span>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
