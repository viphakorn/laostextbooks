import { ReactNode } from "react"
import "@/styles/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Providers } from "@/app/providers"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Laos Textbooks",
  description: "Laos Textbooks ປຶ້ມແບບຮຽນ ແລະ ປຶ້ມຄູ່ມືຄູ",
  authors: {
    name: "James Viphakorn",
    url: "https://twitter.com/jameyplay",
  },
  openGraph: {
    title: "Laos Textbooks",
    description: "Laos Textbooks ປຶ້ມແບບຮຽນ ແລະ ປຶ້ມຄູ່ມືຄູ",
    images: "/og-image.jpg",
    siteName: "Laos Textbooks",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="lo" suppressHydrationWarning className="dark">
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
