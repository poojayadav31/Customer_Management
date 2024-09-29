import React, { useState } from 'react';  

const CustomerList = ({ customers, deleteCustomer, updateCustomer }) => {  
  const [isEditing, setIsEditing] = useState(null);  
  const [editedCustomer, setEditedCustomer] = useState({ name: '', email: '', address: '' });  

  const handleEditClick = (customer) => {  
    setIsEditing(customer.id);  
    setEditedCustomer(customer);  
  };  

  const handleUpdate = () => {  
    updateCustomer(editedCustomer);  
    setIsEditing(null);  
  };  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setEditedCustomer({ ...editedCustomer, [name]: value });  
  };  

  if (customers.length === 0) {  
    return <p>No customers available.</p>;  
  }  

  return (  
    <div>
      <h1 className="text-2xl font-bold mb-4">Customer List</h1>  
    <div className="overflow-auto">  
      <table className="min-w-full bg-white border border-gray-200">  
        <thead>  
          <tr>  
            <th className="border border-gray-300 p-2">Name</th>  
            <th className="border border-gray-300 p-2">Email</th>  
            <th className="border border-gray-300 p-2">Address</th>  
            <th className="border border-gray-300 p-2">Actions</th>  
          </tr>  
        </thead>  
        <tbody>  
          {customers.map((customer) => (  
            <tr key={customer.id}>  
              <td className="border border-gray-300 p-2">  
                {isEditing === customer.id ? (  
                  <input  
                    type="text"  
                    name="name"  
                    value={editedCustomer.name}  
                    onChange={handleChange}  
                    className="border rounded p-1 w-full"  
                  />  
                ) : (  
                  customer.name  
                )}  
              </td>  
              <td className="border border-gray-300 p-2">  
                {isEditing === customer.id ? (  
                  <input  
                    type="email"  
                    name="email"  
                    value={editedCustomer.email}  
                    onChange={handleChange}  
                    className="border rounded p-1 w-full"  
                  />  
                ) : (  
                  customer.email  
                )}  
              </td>  
              <td className="border border-gray-300 p-2">  
                {isEditing === customer.id ? (  
                  <input  
                    type="text"  
                    name="address"  
                    value={editedCustomer.address}  
                    onChange={handleChange}  
                    className="border rounded p-1 w-full"  
                  />  
                ) : (  
                  customer.address  
                )}  
              </td>  
              <td className="border border-gray-300 p-2">  
                {isEditing === customer.id ? (  
                  <button onClick={handleUpdate} className="bg-green-500 text-white p-1 mr-2">  
                    Save  
                  </button>  
                ) : (  
                  <button onClick={() => handleEditClick(customer)} className="bg-blue-500 text-white p-1 mr-2">  
                    Edit  
                  </button>  
                )}  
                <button  
                  onClick={() => deleteCustomer(customer.id)}  
                  className="bg-red-500 text-white p-1"  
                >  
                  Delete  
                </button>  
              </td>  
            </tr>  
          ))}  
        </tbody>  
      </table>  
    </div>  
    </div>
  );  
};  

export default CustomerList;