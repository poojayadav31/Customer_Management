import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerManagement from './pages/CustomerManagement';
import CustomerStats from './pages/CustomerStats';
import CustomerProvider from './context/CustomerContext';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <CustomerProvider>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <Routes>
              <Route path="/management" element={<CustomerManagement />} />
              <Route path="/stats" element={<CustomerStats />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CustomerProvider>
  );
};

export default App;
