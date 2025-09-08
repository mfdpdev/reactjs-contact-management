import { Link } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function UserSignUp(){
  return(
    <>
      <div
        className="animate-fade-in bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-custom border border-gray-700 backdrop-blur-sm w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient rounded-full mb-4">
            <i className="fas fa-user-plus text-3xl text-white"></i>
          </div>
          <h1 className="text-3xl font-bold text-white">Contact Management</h1>
          <p className="text-gray-300 mt-2">Create a new account</p>
        </div>

        <Formik
          initialValues={{username: '', fullname: "", password: '', confirmPassword: ""}}
          validationSchema={
            Yup.object({
              username: Yup.string().min(4, "Username must be at least 4 characters").max(15, "Username must be 15 characters or less").required('Username is required'),
              fullname: Yup.string().min(3, 'Full name must be at least 3 characters').max(50, 'Full name must be less than 50 characters').required('Full name is required'),
              password: Yup.string().min(8, "Password must be at least 8 characters").matches(/^(?=.*[A-Z])(?=.*\d).{6,}$/, 'Password must contain at least one uppercase letter and one number').required('Password is required'),
              confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
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
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-300 text-sm font-medium mb-2">Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user text-gray-500"></i>
                  </div>
                  <Field type="text" id="username" name="username"
                         className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                         placeholder="Choose a username"
                         autoComplete="off"/>
                </div>
                <ErrorMessage name="username">
                  {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-id-card text-gray-500"></i>
                  </div>
                  <Field type="text" id="fullname" name="fullname"
                         className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                         placeholder="Enter your full name" 
                         autoComplete="off"/>
                </div>
                <ErrorMessage name="fullname">
                  {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-gray-500"></i>
                  </div>
                  <Field type="password" id="password" name="password"
                         className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                         placeholder="Create a password"
                         autoComplete="off"/>
                </div>
                <ErrorMessage name="password">
                  {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-300 text-sm font-medium mb-2">Confirm
                  Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-check-double text-gray-500"></i>
                  </div>
                  <Field type="password" id="confirmPassword" name="confirmPassword"
                         className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                         placeholder="Confirm your password"
                         autoComplete="off"/>
                </div>
                <ErrorMessage name="confirmPassword">
                  {(msg) => <div className="text-red-500 text-sm mt-2">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="mb-6">
                <button type="submit" disabled={isSubmitting}
                        className="w-full bg-gradient text-white py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5">
                  <i className="fas fa-user-plus mr-2"></i> Register
                </button>
              </div>

              <div className="text-center text-sm text-gray-400">
                Already have an account?
                <Link to="/auth/signin" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">Sign
                  in</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}
