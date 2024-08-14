import React from 'react';

const Table = () => {
  return (
    <div className="overflow-x-hidden h-screen w-screen px-8 ">
      <table className="min-w-full divide-y divide-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Supplied</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Alice Johnson</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V001</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">alice.johnson@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(555) 123-4567</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Female</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Electronics</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Bob Smith</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V002</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">bob.smith@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(555) 234-5678</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Male</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Furniture</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Carol Lee</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V003</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">carol.lee@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(555) 345-6789</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Female</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Office Supplies</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">David Wilson</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V004</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">david.wilson@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(555) 456-7890</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Male</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cleaning Supplies</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Eve Davis</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V005</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">eve.davis@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(555) 567-8901</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Female</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tools</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Frank Miller</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V006</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">frank.miller@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(555) 678-9012</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Male</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Garden Supplies</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Grace Taylor</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V007</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">grace.taylor@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(555) 789-0123</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Female</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pet Supplies</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Henry Moore</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V008</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">henry.moore@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(555) 890-1234</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Male</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automotive Parts</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ivy Green</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V009</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ivy.green@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(555) 901-2345</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Female</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Office Furniture</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Black</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V010</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john.black@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(555) 012-3456</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Male</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Medical Supplies</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
