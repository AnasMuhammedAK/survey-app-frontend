import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import AdminNavbar from './admin/AdminNavbar'
import PrivateNavbar from './private/PrivateNavbar'
import PublicNavbar from './public/PublicNavbar'

function Navbar() {
  //get user from store
  const { userAuth } = useSelector(state => state.users)
  const isAdmin = userAuth?.isAdmin
 useEffect(() => {
 }, [userAuth])
 
  return (
    <>
      {isAdmin ? (
        <AdminNavbar />
      ) : userAuth ? (
        <PrivateNavbar />
      ) : (
        <PublicNavbar />
      )}
    </>
  )
}

export default Navbar