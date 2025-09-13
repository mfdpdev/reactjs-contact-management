import { Formik, Form, Field, ErrorMessage } from "formik"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import * as Yup from "yup"

export default function AddressEdit(){

  const [ data, setData ] = useState<{
    street: string,
    city: string,
    province: string,
    country: string,
    postalCode: string,
  }>({
    street: "",
    city: "",
    province: "",
    country: "",
    postalCode: "",
  })

  const { id } = useParams()
  const contact: any = {
    id: "1",
    first_name: "hei",
    last_name: "hei",
    email: "hei",
    phone: "hei",
  }

  useEffect(() => {
    setTimeout(() => {
      setData({
        street: "hehe",
        city: "hehe",
        province: "hehe",
        country: "hehe",
        postalCode: "hehe",
      })
    }, 200)
  }, [])

  return (
    <>
      <div className="flex items-center mb-6">
        <Link to={`/dashboard/contacts/${id}`}
              className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
          <i className="fas fa-arrow-left mr-2"></i> Back to Contact Details
        </Link>
        <h1 className="text-2xl font-bold text-white flex items-center">
          <i className="fas fa-map-marker-alt text-blue-400 mr-3"></i> Edit Address
        </h1>
      </div>

      <div
        className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
        <div className="p-8">
          <div className="mb-6 pb-6 border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4 shadow-md">
                <i className="fas fa-user text-white"></i>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">{contact.first_name} {contact.last_name}</h2>
                <p className="text-gray-300 text-sm">{contact.email} • {contact.phone}</p>
              </div>
            </div>
          </div>

          <Formik
            initialValues={data}
            enableReinitialize={true}
            validationSchema={
              Yup.object({
                street: Yup.string()
                  .required('Street is required'),
                city: Yup.string()
                  .required('City is required'),
                province: Yup.string()
                  .required('Province is required'),
                country: Yup.string()
                  .required('Country is required'),
                postalCode: Yup.string()
                  .matches(/^\d{5}$/, 'Postal code must be 5 digits')
                  .required('Postal code is required'),
              })
            }
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
          {() => (
            <Form >
              <div className="mb-5">
                <label htmlFor="street" className="block text-gray-300 text-sm font-medium mb-2">Street</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-road text-gray-500"></i>
                  </div>
                  <Field type="text" id="street" name="street"
                         className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                         placeholder="Enter street address" />
                </div>
                <ErrorMessage name="street">
                  {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="city" className="block text-gray-300 text-sm font-medium mb-2">City</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-city text-gray-500"></i>
                    </div>
                    <Field type="text" id="city" name="city"
                           className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                           placeholder="Enter city" />
                  </div>
                  <ErrorMessage name="city">
                    {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div>
                  <label htmlFor="province" className="block text-gray-300 text-sm font-medium mb-2">Province/State</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-map text-gray-500"></i>
                    </div>
                    <Field type="text" id="province" name="province"
                           className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                           placeholder="Enter province or state" />
                  </div>
                  <ErrorMessage name="province">
                    {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label htmlFor="country" className="block text-gray-300 text-sm font-medium mb-2">Country</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-flag text-gray-500"></i>
                    </div>
                    <Field type="text" id="country" name="country"
                           className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                           placeholder="Enter country" />
                  </div>
                  <ErrorMessage name="country">
                    {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-gray-300 text-sm font-medium mb-2">Postal Code</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-mail-bulk text-gray-500"></i>
                    </div>
                    <Field type="text" id="postalCode" name="postalCode"
                           className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                           placeholder="Enter postal code" />
                  </div>
                  <ErrorMessage name="postalCode">
                    {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Link to={`/dashboard/contacts/${id}`}
                      className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md">
                  <i className="fas fa-times mr-2"></i> Cancel
                </Link>
                <button type="submit"
                      className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md">
                  <i className="fas fa-save mr-2"></i> Save Changes
                </button>
              </div>
            </Form>
          )}
          </Formik>
        </div>
      </div>
    </>
  )
}
