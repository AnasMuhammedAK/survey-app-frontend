import toast from 'react-hot-toast';
import privateAxios from '../../../utils/privateAxios'
import publicAxios from '../../../utils/publicAxios'
//========================|| Create Question Service ||========================
const createSurvey = async (Data) => {
 
    const res = await privateAxios.post(`/api/questions/create-survey`, Data)
    console.log(res)
    if (res.data) {
        toast.success('Survey created successfully')
        return res.data
    } else {
        toast.error('Not Created, something wents wrong')
        return null
    }
  
}
//========================|| Fetch all Survey Service ||========================
const fetchAll = async () => {
    const { data } = await privateAxios.get('/api/questions/all-survey')
    return data
}
//========================|| Fetch Survey Service ||========================
const fetch = async (id) => {
  const { data } = await privateAxios.post('/api/questions/single-survey',{id})
  return data
}

const serveyServiece = {
  createSurvey,
  fetchAll,
  fetch
}
export default serveyServiece