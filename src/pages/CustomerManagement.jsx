import { useContext } from 'react';  
import { CustomerContext } from '../context/CustomerContext';  
import CustomerForm from '../components/CustomerForm';  
import CustomerList from '../components/CustomerList';  

const CustomerManagement = () => {  
  const { customers, addCustomer, deleteCustomer, updateCustomer } = useContext(CustomerContext);  

  return (  
    <div className="p-4">  
      <h1 className="text-2xl font-bold mb-4">Customer Management</h1>  
      <CustomerForm addCustomer={addCustomer} />  
      <CustomerList   
        customers={customers}   
        deleteCustomer={deleteCustomer}   
        updateCustomer={updateCustomer} 
      />  
    </div>  
  );  
};  

export default CustomerManagement;