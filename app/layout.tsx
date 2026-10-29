import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'ClinicFlow | Medical Center Operations', description: 'A practical clinic operations workspace for appointments, patients, and care teams.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
