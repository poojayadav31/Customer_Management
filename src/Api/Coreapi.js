import { getCustomers, addCustomer, deleteCustomer } from './api';

export const fetchCustomers = async () => {
  return await getCustomers();
};

export const createCustomer = async (customer) => {
  return await addCustomer(customer);
};

export const removeCustomer = async (id) => {
  return await deleteCustomer(id);
};
