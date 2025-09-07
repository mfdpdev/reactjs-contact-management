import { Link } from "react-router";

import { Formik, Form, Field, ErrorMessage } from "formik"

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
          validate={ values => {

            const errors: {
              username?: string,
              password?: string,
            } = {};

            console.log(values.username, "lord");
            if(!values.username){
              errors.username = "Required";
            }else if(values.username !== "lord"){
              errors.username = "Username or Password are wrong!";
            }

            if(values.password != "lord"){
              errors.password = "Username or Password are wrong!";
            }

            return errors;
          }}
          onSubmit={(_, { setSubmitting }) => {
            setTimeout(() => {
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
                       className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                       placeholder="Enter your username"/>
              </div>
              <ErrorMessage name="username" component="div" />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-500"></i>
                </div>
                <Field type="password" id="password" name="password"
                       className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                       placeholder="Enter your password" required />
              </div>
              <ErrorMessage name="password" component="div" />
            </div>

            <div className="mb-6">
              <button type="submit" disabled={isSubmitting}
                      className="w-full bg-gradient text-white py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5">
                <i className="fas fa-sign-in-alt mr-2"></i> Sign In
              </button>
            </div>

            <div className="text-center text-sm text-gray-400">
              Don't have an account?
              <Link to="/auth/signup"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">Sign up</Link>
            </div>
          </Form>
        )}
        </Formik>
      </div>
    </>
  )
}
