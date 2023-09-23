import axios from 'axios'


  const createParkingRecord=async(formData) => {
    const response = await axios.post(`${process.env.REACT_APP_PORTSERVER}/parking`, formData);
    return response
  }

 
  const  deleteVehicle= async (vehicleId) => {
      
        const response = await axios.put
        (`${process.env.REACT_APP_PORTSERVER}/parking/delete`,{
          vehicle_id : vehicleId,
        });
        return response;
      
      }

  // const editvehichle = async (formData) =>{
  //   const response = await axios.put
  //       (`${process.env.REACT_APP_PORTSERVER}/parking/update`,{
  //         id:vehicleId,
  //         type:vehicleType,
  //         plate:numberPlate,
  //         starttime:startTime,
  //         endtime:endTime,
  //         parkingfee:parkingFee,
  //       });
  //       return response;
  // }
    
  
  
export default  {
  createParkingRecord,deleteVehicle
}
