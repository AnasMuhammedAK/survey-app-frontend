import toast from 'react-hot-toast';
import privateAxios from '../../../utils/privateAxios'

//========================|| Create Question Service ||========================
const create = async (Data) => {
    const { data } = await privateAxios.post(`/api/questions/create`, Data)
    if (data) {
        toast.success('Question created successfully')
        return data
    } else {
        toast.error('Not Created, something wents wrong')
        return null
    }
}
//========================|| Fetch all Question Service ||========================
const fetchAll = async () => {
    const { data } = await privateAxios.get('/api/questions/all')
    return data
}


const questionsServiece = {
    create,
    fetchAll
}
export default questionsServiece