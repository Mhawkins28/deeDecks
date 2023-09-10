import Link from 'next/link'

export default function Phrases() {
  return (
    <>
    <h1>Phrases Page</h1>
    
{/* will loop through categories Links here */}
    <Link href={'/basics'}>Basics</Link> 
    </>
  )
}