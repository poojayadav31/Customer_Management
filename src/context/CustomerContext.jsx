import { createContext, useState, useEffect } from 'react';  
import axios from 'axios';  

export const CustomerContext = createContext();  

const CustomerProvider = ({ children }) => {  
  const [customers, setCustomers] = useState([]);  
  const apiUrl = "http://localhost:3000/customers";  
 
  useEffect(() => {  
    const fetchCustomers = async () => {  
      try {  
        const response = await axios.get(apiUrl);  
        setCustomers(response.data);  
      } catch (error) {  
        console.error('Error fetching customers:', error);  
      }  
    };  
    fetchCustomers();  
  }, []);  

  const addCustomer = async (customer) => {  
    try {  
      const response = await axios.post(apiUrl, customer);  
      setCustomers([...customers, response.data]);  
    } catch (error) {  
      console.error('Error adding customer:', error);  
    }  
  };  

  const deleteCustomer = async (id) => {  
    try {  
      await axios.delete(`${apiUrl}/${id}`);  
      setCustomers(customers.filter((customer) => customer.id !== id));  
    } catch (error) {  
      console.error('Error deleting customer:', error);  
    }  
  };  

  const updateCustomer = async (updatedCustomer) => {  
    try {  
      const response = await axios.put(`${apiUrl}/${updatedCustomer.id}`, updatedCustomer);  
      setCustomers(customers.map((customer) =>   
        customer.id === updatedCustomer.id ? response.data : customer  
      ));  
    } catch (error) {  
      console.error('Error updating customer:', error);  
    }  
  };  

  return (  
    <CustomerContext.Provider value={{ customers, addCustomer, deleteCustomer, updateCustomer }}>  
      {children}  
    </CustomerContext.Provider>  
  );  
};  

export default CustomerProvider;