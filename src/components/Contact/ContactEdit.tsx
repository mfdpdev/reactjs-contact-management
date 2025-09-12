import { Link, useParams } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useEffect, useState } from "react";

export default function ContactEdit(){

  const [ data, setData ] = useState<{
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
  }>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  })
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setData({
        firstname: "user",
        lastname: "user",
        email: "user@example.com",
        phone: "081234345456",
      })
    }, 300)
  }, [])

  setTimeout(() => {

  }, 200)

  return (
    <>
      <div className="flex items-center mb-6">
      <Link to="/dashboard/contacts"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
        <i className="fas fa-arrow-left mr-2"></i> Back to Contacts
      </Link>
      <h1 className="text-2xl font-bold text-white flex items-center">
        <i className="fas fa-user-plus text-blue-400 mr-3"></i> Edit Contact
      </h1>
    </div>

    <div
      className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
      <div className="p-8">
        <Formik
          enableReinitialize={true}
          initialValues={data}
          validationSchema={
            Yup.object({
              firstname: Yup.string().min(2, "Firstname must be at least 2 characters").required('Firstname is required'),
              lastname: Yup.string().min(2, "Lastname must be at least 2 characters").required('Lastname is required'),
              email: Yup.string().email().required('Email is required'),
              phone: Yup.string().required('Phone number is required').matches(/^[0-9]+$/, 'Phone number must contain only digits').min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number must be at most 15 digits'),
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
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="firstname" className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user-tag text-gray-500"></i>
                  </div>
                  <Field type="text" id="firstname" name="firstname"
                         autoComplete="off"
                         className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                         placeholder="Enter first name" />
                </div>
                <ErrorMessage name="firstname">
                  {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <label htmlFor="lastname" className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user-tag text-gray-500"></i>
                  </div>
                  <Field type="text" id="lastname" name="lastname"
                         autoComplete="off"
                         className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                         placeholder="Enter last name" />
                </div>
                <ErrorMessage name="lastname">
                  {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-500"></i>
                </div>
                <Field type="email" id="email" name="email"
                       autoComplete="off"
                       className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                       placeholder="Enter email address"/>
              </div>
                <ErrorMessage name="email">
                  {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                </ErrorMessage>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-phone text-gray-500"></i>
                </div>
                <Field type="tel" id="phone" name="phone"
                       autoComplete="off"
                       className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                       placeholder="Enter phone number" />
              </div>
                <ErrorMessage name="phone">
                  {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                </ErrorMessage>
            </div>

            <div className="flex justify-between sm:justify-end space-x-4">
              <Link to="/dashboard/contacts"
                    className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md">
                <i className="fas fa-times mr-2"></i> Cancel
              </Link>
              <button type="submit"
                      className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md">
                <i className="fas fa-plus-circle mr-2"></i> Create Contact
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
