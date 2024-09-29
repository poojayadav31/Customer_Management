import { useContext } from 'react';
import { CustomerContext } from '../context/CustomerContext';
import { useEffect, useState } from 'react';

const CustomerStats = () => {
  const { customers } = useContext(CustomerContext);
  const [recentCustomers, setRecentCustomers] = useState([]);

  useEffect(() => {
    const now = new Date();
    const last30Days = new Date(now.setDate(now.getDate() - 30));
    const recent = customers.filter(customer => new Date(customer.joinedDate) >= last30Days);
    setRecentCustomers(recent);
  }, [customers]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4" style={{ textAlign: "center" }}>Customer Stats</h1>
      <div className="flex justify-around p-4">
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-3xl font-bold">{customers.length}</h2>
          <p className="text-gray-600">Total Customers</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-3xl font-bold">{recentCustomers.length}</h2>
          <p className="text-gray-600">Recent Additions (Last 30 Days)</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerStats;
