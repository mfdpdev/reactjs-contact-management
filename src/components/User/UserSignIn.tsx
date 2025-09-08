import { Link } from "react-router";

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function UsersignIn(){

  return (
    <>
      <div
        className="animate-fade-in bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-custom border border-gray-700 backdrop-blur-sm w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient rounded-full mb-4">
            <i className="fas fa-address-book text-3xl text-white"></i>
          </div>
          <h1 className="text-3xl font-bold text-white">Contact Management</h1>
          <p className="text-gray-300 mt-2">Sign in to your account</p>
        </div>

        <Formik
          initialValues={{username: '', password: ''}}
          validationSchema={
            Yup.object({
              username: Yup.string().min(4, "Username must be at least 4 characters").max(15, "Username must be 15 characters or less").required('Username is required'),
              password: Yup.string().min(8, "Password must be at least 8 characters").matches(/^(?=.*[A-Z])(?=.*\d).{6,}$/, 'Password must contain at least one uppercase letter and one number').required('Password is required'),
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-5">
              <label htmlFor="username" className="block text-gray-300 text-sm font-medium mb-2">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-500"></i>
                </div>
                <Field type="text" id="username" name="username"
                       autocomplete="off"
                       className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                       placeholder="Enter your username"/>
              </div>
              <ErrorMessage name="username">
                {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-500"></i>
                </div>
                <Field type="password" id="password" name="password"
                       autocomplete="off"
                       className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                       placeholder="Enter your password" required />
              </div>
              <ErrorMessage name="password">
                {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="mb-6">
              <button type="submit" disabled={isSubmitting} className="w-full text-gray-900 border focus:outline-none focus:ring-4 font-medium rounded-lg px-4 py-3 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-700">
                <i className="fas fa-sign-in-alt mr-2"></i> Sign In
              </button>
            </div>

            <div className="text-center text-sm text-gray-400">
              Don't have an account?
              <Link to="/auth/signup"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"> Sign up</Link>
            </div>
          </Form>
        )}
        </Formik>
      </div>
    </>
  )
}
