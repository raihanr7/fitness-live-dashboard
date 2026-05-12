import './globals.css'
import { Providers } from "./providers";

export const metadata = { 
  title: 'Fitness Live Dashboard',
  description: 'Tracking my running progress' 
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
