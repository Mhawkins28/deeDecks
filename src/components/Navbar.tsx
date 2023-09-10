import Link from "next/link"

export default function Navbar() {
  return (
  <nav className="flex justify-between items-center px-8 py-3 font-bold border border-slate-300">
    <Link href={'/'}>Home</Link>
    <Link href={'/alphabet'}>Alphabet</Link>
    <Link href={'/numbers'}>Numbers</Link>
    <Link href={'/phrases'}>Phrases</Link>
  </nav>
)}