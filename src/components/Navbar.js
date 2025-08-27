import axios from 'axios'
import Link from 'next/link'

const Navbar = () => {
  // const ref = async () =>  {
  //   const res = await axios.get('http://localhost:5773')
  //   const token = await res.data.token
  //   localStorage.getItem(token)
  //   if (!token) {
  //     ref = '/'
  //   } else {
  //     ref = '/product'
  //   }
  // }

  const search = async () => {
    const res = await axios.get('http://localhost:5773/product')
    
  }
  return (
    <nav className='bg-red-400'>
      <div className='flex items-center justify-between mx-auto p-4'>
      <Link href='/'>Smart Accesseries</Link>

      <input type='search' placeholder='Search' className='focus:outline-orange-400' />

      <Link href='/:username'>Profile</Link>
      </div>

    </nav>
  )
}

export default Navbar