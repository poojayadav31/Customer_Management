import { useState } from 'react';  

const CustomerForm = ({ addCustomer }) => {  
  const [customer, setCustomer] = useState({ name: '', email: '', address: '' });  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (customer.name && customer.email && customer.address) {  
      addCustomer(customer);  
      setCustomer({ name: '', email: '', address: '' });  
    }  
  };  

  return (  
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">  
      <h2 className="text-xl font-semibold mb-4 text-center">Add New Customer</h2>  
      
      <div className="mb-4">  
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Customer Name</label>  
        <input  
          id="name"  
          type="text"  
          placeholder="Enter Name"  
          value={customer.name}  
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}  
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
        />  
      </div>  

      <div className="mb-4">  
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Customer Email</label>  
        <input  
          id="email"  
          type="email"  
          placeholder="Enter Email"  
          value={customer.email}  
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}  
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
        />  
      </div>  

      <div className="mb-4">  
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Customer Address</label>  
        <input  
          id="address"  
          type="text"  
          placeholder="Enter Address"  
          value={customer.address}  
          onChange={(e) => setCustomer({ ...customer, address: e.target.value })}  
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"  
        />  
      </div>  

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200">Add Customer</button>  
    </form>  
  );  
};  

export default CustomerForm;