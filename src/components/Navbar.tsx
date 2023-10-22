import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-8 py-3 font-bold '>
      <Link className='hover:border-b-2 border-indigo-200' href={"/"}>
        Home
      </Link>
      <Link href={"/alphabet"}>Alphabet</Link>
      <Link href={"/numbers"}>Numbers</Link>
      <Link href={"/phrases"}>Phrases</Link>
    </nav>
  );
}
