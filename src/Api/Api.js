import axios from 'axios';
import API_BASE_URL from './config';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCustomers = async () => {
  try {
    const response = await api.get('/customers');
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

export const addCustomer = async (customer) => {
  try {
    const response = await api.post('/customers', customer);
    return response.data;
  } catch (error) {
    console.error("Error adding customer:", error);
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  try {
    await api.delete(`/customers/${id}`);
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw error;
  }
};
