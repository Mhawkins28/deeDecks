import Link from 'next/link';

export default function Alphabet() {
  return (
    <>
    <h1>Alphabet Page</h1>

    <Link href={'/consonants'}>Consonants</Link>
    <Link href={'/vowels'}>Vowels</Link>
    {/* <Link href={'/other'}>Other</Link> */}
    </>
  )
}