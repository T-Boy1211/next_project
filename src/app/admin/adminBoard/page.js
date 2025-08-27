import axios from 'axios'
import React from 'react'

const adminBoard = () => {
  const res = axios.get('http://localhost:5773/admin/adminBoard')
  const token = res.data.token
  localStorage.getItem(token)
  token ? '' : ''

  return (
    <div>
      <table>
        
      </table>
    </div>
  )
}

export default adminBoard