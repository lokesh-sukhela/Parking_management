import React, { useEffect, useState } from 'react';
import VehicleService from '../../services/VehicleService';
import VehicleServices from '../../services/VehicleService copy';

function Dashboard() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch the list of registered vehicles from your backend API
    async function fetchVehicles() {
      try {
        const response = await VehicleServices.getRegisteredVehicles(); // Implement this service function
        setVehicles(response.data); // Assuming the response is an array of vehicle objects
      } catch (error) {
        console.error('Error fetching registered vehicles:', error);
      }
    }

    fetchVehicles();
  }, []);
  

  return (
    <div>
      <h1>Registered Vehicles</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Vehicle Type</th>
            <th>Number Plate</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Parking Fee (Rs)</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.vehicleType}</td>
              <td>{vehicle.numberPlate}</td>
              <td>{vehicle.startTime}</td>
              <td>{vehicle.endTime}</td>
              <td>{vehicle.parkingFee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
