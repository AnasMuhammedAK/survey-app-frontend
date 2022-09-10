import toast from 'react-hot-toast';
import publicAxios from '../../../utils/publicAxios'
import privateAxios from '../../../utils/privateAxios'

//========================|| Register Service ||========================
const register = async (userData) => {
    const { data } = await publicAxios.post(`/api/users/register`, userData)
    //SAVE USER INTO LOCAL STORAGE
    if (data.isSuccess) {
        toast.success('User registered successfully')
        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('tokens', JSON.stringify({ accessToken: data.accessToken, refreshToken: data.refreshToken }))
        return data
    } else {
        toast.error('Not registered, something wents wrong')
        return null
    }
}
//========================|| Login Service ||========================
const login = async (userData) => {
        const { data } = await publicAxios.post(`/api/users/login`, userData)
        //SAVE USER INTO LOCAL STORAGE
        if (data) {
            localStorage.setItem('userInfo', JSON.stringify(data))
            localStorage.setItem('tokens', JSON.stringify({ accessToken: data.accessToken, refreshToken: data.refreshToken }))
            return data
        }
}
//========================|| Fetch all users Service ||========================
const fetchAll = async() => {
    const { data } = await publicAxios.post(`/api/users/all`, )
    return data
}
//========================|| Logout Service ||========================
const logout = async (refreshToken) => {
    const res = await privateAxios.post(`/api/users/logout`, { refreshToken })
    console.log(res)
    if (res.data.status) {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('tokens')
    }
    return
}


const usersService = {
    register,
    login,
    logout,
    fetchAll
}
export default usersService

