import Link from 'next/link';

function Alphabet() {
  return (
    <>
      <Link href={'/alphabet/consonants'}>Consonants</Link><br></br>
      <Link href={'/alphabet/vowels'}>Vowels</Link><br></br>
      <Link href={'/alphabet/diphthongs'}>Diphthongs</Link><br></br>
      <Link href={'/alphabet/tones'}>Tones</Link>


      {/* <Link href={'/other'}>Other</Link> */}
    </>
  )
}

export default Alphabet;