import Link from "next/link"

const Home = () => {
  return (
    <div className='bg-cover bg-gradient-to-tr from-20% from-blue-800 via-60% via-cyan-400 to-95% to-purple-900 min-h-screen flex items-center justify-center'>
      <h1 className='text-7xl font-extrabold font-mono capitalize'>welcome to the smart store</h1>
      <Link href={'/signup'}></Link>
      <Link href={'/login'}></Link>
    </div>
  )
}

export default Home