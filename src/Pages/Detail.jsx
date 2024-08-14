// Sample data for the vendor
import React from 'react';

const vendor = {
  name: 'Acme Corporation',
  id: 'V001',
  email: 'contact@acmecorp.com',
  contact: '(555) 123-4567',
  gender: 'N/A',
  description: 'Acme Corporation is a leading supplier of high-quality electronics and home appliances. Established in 1995, we pride ourselves on exceptional customer service and innovative products.',
  address: '1234 Market Street, Suite 100, Delhi, CA 94103',
  products: [
    {
      name: 'Smartphone X',
      category: 'Electronics',
      description: 'A cutting-edge smartphone with a high-resolution display and fast processing power.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Smart TV 4K',
      category: 'Electronics',
      description: 'A 55-inch 4K Ultra HD Smart TV with advanced features and a sleek design.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      description: 'Portable Bluetooth speaker with high-quality sound and long battery life.',
      imageUrl: 'https://via.placeholder.com/150'
    },
  ]
};

const Detail = () => {
  return (
    <div className="bg-gray-100 min-h-screen  p-6 h-screen ">
      {/* Vendor Overview Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{vendor.name}</h1>
        <p className="text-lg text-gray-700 mb-4">{vendor.description}</p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
          <p className="text-gray-600">Email: <a href={`mailto:${vendor.email}`} className="text-blue-500">{vendor.email}</a></p>
          <p className="text-gray-600">Contact: {vendor.contact}</p>
          <p className="text-gray-600">Address: {vendor.address}</p>
        </div>
      </section>

      {/* Vendor Products Section */}
      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Products Supplied</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendor.products.map((product, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Detail;
