import Link from 'next/link'

function Phrases() {
  return (
    <>
    <h1>Phrases Page</h1>
    
{/* will loop through categories Links here */}
    <Link href={'/basics'}>Basics</Link> 
    </>
  )
}

export default Phrases;