import { useState } from "react";
import { Link, useParams } from "react-router";

export default function ContactDetail(){
  const { id } = useParams()
  const [ contact, setContact ] = useState({
    firstname: "user",
    lastname: "user",
    email: "user@example.com",
    phone: "081234345456",
  })
  const [ addresses, setAddresses ] = useState<{
    id: string,
    street: string,
    city: string,
    province: string,
    country: string,
    postalCode: string,
  }[]>([{
    id: "123",
    street: "123",
    city: "123",
    province: "123",
    country: "123",
    postalCode: "123",
  }])

  function handleDeleteAddress(id: string) {}

  return (
    <>
      <div className="flex items-center mb-6">
        <Link to="/dashboard/contacts"
              className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
          <i className="fas fa-arrow-left mr-2"></i> Back to Contacts
        </Link>
        <h1 className="text-2xl font-bold text-white flex items-center">
          <i className="fas fa-id-card text-blue-400 mr-3"></i> Contact Details
        </h1>
      </div>

      <div
        className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
        <div className="p-8">
          <div className="mb-8 text-center">
            <div className="w-20 h-20 bg-gradient rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
              <i className="fas fa-user text-3xl text-white"></i>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{contact.firstname} {contact.lastname}</h2>
            <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
          </div>

          <div className="space-y-5 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div
                className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                <div className="flex items-center mb-2">
                  <i className="fas fa-user-tag text-blue-400 mr-2"></i>
                  <h3 className="text-gray-300 text-sm font-medium">First Name</h3>
                </div>
                <p className="text-white text-lg ml-6">{contact.firstname}</p>
              </div>
              <div
                className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                <div className="flex items-center mb-2">
                  <i className="fas fa-user-tag text-blue-400 mr-2"></i>
                  <h3 className="text-gray-300 text-sm font-medium">Last Name</h3>
                </div>
                <p className="text-white text-lg ml-6">{contact.lastname}</p>
              </div>
            </div>

            <div
              className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
              <div className="flex items-center mb-2">
                <i className="fas fa-envelope text-blue-400 mr-2"></i>
                <h3 className="text-gray-300 text-sm font-medium">Email</h3>
              </div>
              <p className="text-white text-lg ml-6">{contact.email}</p>
            </div>

            <div
              className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
              <div className="flex items-center mb-2">
                <i className="fas fa-phone text-blue-400 mr-2"></i>
                <h3 className="text-gray-300 text-sm font-medium">Phone</h3>
              </div>
              <p className="text-white text-lg ml-6">{contact.phone}</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-5">
              <i className="fas fa-map-marker-alt text-blue-400 mr-3"></i>
              <h3 className="text-xl font-semibold text-white">Addresses</h3>
            </div>
            <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 p-6 mb-8 animate-fade-in">
              <div
                className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom overflow-hidden border-2 border-dashed border-gray-700 card-hover animate-fade-in">
                <Link to={`/dashboard/contacts/${id}/addresses/create`} className="block p-6 h-full">
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div
                      className="w-20 h-20 bg-gradient rounded-full flex items-center justify-center mb-5 shadow-lg transform transition-transform duration-300 hover:scale-110">
                      <i className="fas fa-plus text-2xl text-white"></i>
                    </div>
                    <p className="text-gray-300">Add Address</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {addresses.map(address => (
                <div key={address.id}
                     className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 card-hover">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                      <i className="fas fa-home text-white"></i>
                    </div>
                    <h4 className="text-lg font-semibold text-white">Home Address</h4>
                  </div>
                  <div className="space-y-3 text-gray-300 ml-2 mb-4">
                    <p className="flex items-center">
                      <i className="fas fa-road text-gray-500 w-6"></i>
                      <span className="font-medium w-24">Street:</span>
                      <span>{address.street}</span>
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-city text-gray-500 w-6"></i>
                      <span className="font-medium w-24">City:</span>
                      <span>{address.city}</span>
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-map text-gray-500 w-6"></i>
                      <span className="font-medium w-24">Province:</span>
                      <span>{address.province}</span>
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-flag text-gray-500 w-6"></i>
                      <span className="font-medium w-24">Country:</span>
                      <span>{address.country}</span>
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-mailbox text-gray-500 w-6"></i>
                      <span className="font-medium w-24">Postal Code:</span>
                      <span>{address.postalCode}</span>
                    </p>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <Link to={`/dashboard/contacts/${id}/addresses/${address.id}/edit`}
                          className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center">
                      <i className="fas fa-edit mr-2"></i> Edit
                    </Link>
                    <button onClick={() => handleDeleteAddress(address.id)}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center">
                      <i className="fas fa-trash-alt mr-2"></i> Delete
                    </button>
                  </div>
                </div>
              ))}


            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Link to="/dashboard/contacts"
                  className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md">
              <i className="fas fa-arrow-left mr-2"></i> Back
            </Link>
            <Link to={`/dashboard/contacts/${id}/edit`}
                  className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md">
              <i className="fas fa-user-edit mr-2"></i> Edit Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
