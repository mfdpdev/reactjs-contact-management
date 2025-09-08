import { useState } from "react"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function UserProfile(){

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function handleSubmitPassword(){

  }

  return (
    <>
      <div className="flex items-center mb-6">
        <i className="fas fa-user-cog text-blue-400 text-2xl mr-3"></i>
        <h1 className="text-2xl font-bold text-white">My Profile</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden card-hover animate-fade-in">
          <Formik
            initialValues={{fullname: '', file: null}}
            validationSchema={
              Yup.object({
                fullname: Yup.string().min(3, 'Full name must be at least 3 characters').max(50, 'Full name must be less than 50 characters').required('Full name is required'),
                file: Yup.mixed().required("File is required").test('fileSize', 'File too large', value => {
                  if (value && value instanceof File){
                    return value.size <= 5 * 1024 * 1024;
                  }

                  return false;
                }).test("fileType", "Unsuported file format", value => {
                  if (value && value instanceof File){
                    return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
                  }

                  return false;
                })
              })
            }
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ setFieldValue }) => (
              <Form className="flex flex-col justify-between p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-3 shadow-md">
                    <i className="fas fa-user-edit text-white"></i>
                  </div>
                  <h2 className="text-xl font-semibold text-white">Edit Profile</h2>
                </div>
                <div>
                  <div className="mb-5 flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12 bg-gray-700">
                    <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                      <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl text-gray-300">Leroy Jenkins</h2>
                        <p className="px-5 text-xs sm:text-base text-gray-400">Full-stack developer</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="relative">
                      <input onChange={ event => {
                        setFieldValue('file', event.currentTarget.files[0]);
                      }} type="file" id="file" name="file" className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"/>
                    </div>
                    <ErrorMessage name="file">
                      {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="fullname" className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-user text-gray-500"></i>
                      </div>
                      <Field type="text" id="fullname" name="fullname"
                             className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                             placeholder="Enter your full name"/>
                    </div>
                    <ErrorMessage name="fullname">
                      {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="mt-6">
                  <button type="submit"
                          className="w-full bg-gradient text-white py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
                    <i className="fas fa-save mr-2"></i> Update Profile
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div
          className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden card-hover animate-fade-in">
          <form className="p-6 h-full flex flex-col justify-between" onSubmit={handleSubmitPassword}>
            <div className="">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-3 shadow-md">
                  <i className="fas fa-key text-white"></i>
                </div>
                <h2 className="text-xl font-semibold text-white">Change Password</h2>
              </div>

              <div className="mb-5">
                <label htmlFor="new_password" className="block text-gray-300 text-sm font-medium mb-2">New
                  Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-gray-500"></i>
                  </div>
                  <input type="password" id="new_password" name="new_password"
                         className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                         placeholder="Enter your new password" required
                         value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="confirm_password" className="block text-gray-300 text-sm font-medium mb-2">Confirm New
                  Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-check-double text-gray-500"></i>
                  </div>
                  <input type="password" id="confirm_password" name="confirm_password"
                         className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                         placeholder="Confirm your new password" required
                         value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button type="submit"
                      className="w-full bg-gradient text-white py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
                <i className="fas fa-key mr-2"></i> Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
