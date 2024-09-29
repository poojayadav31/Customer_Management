import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-800 h-screen p-4 text-white">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <nav>
        <ul>
        <li className="mb-2">
            <Link to="/stats">Customer Stats</Link>
          </li>
          <li className="mb-2">
            <Link to="/management">Customer Management</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
