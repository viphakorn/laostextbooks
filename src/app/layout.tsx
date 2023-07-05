import { ReactNode } from "react"
import "@/styles/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Providers } from "@/app/providers"

export const metadata = {
  title: "Laos Textbooks",
  description: "Laos Textbooks ປຶ້ມແບບຮຽນ ແລະ ປຶ້ມຄູ່ມືຄູ",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="lo" suppressHydrationWarning>
      <body className="flex h-screen flex-col bg-white font-sans font-extrabold text-slate-700 dark:bg-slate-900 dark:text-white">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
