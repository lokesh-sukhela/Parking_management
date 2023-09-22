import axios from 'axios'


  const createParkingRecord=async(formData) => {
    const response = await axios.post(`${process.env.REACT_APP_PORTSERVER}/parking`, formData);
    return response
  }


export default  {createParkingRecord}
