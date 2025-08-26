"use client";

import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

const Signup = () => {
  const validationSchema = Yup.object({
    userName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string()
      .required("Required")
      .min(10, "Minimum 10 characters"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post("http://localhost:5773/user/signup", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(res.data.message);
      const token = res.data.token;
      const decoded = jwtDecode(token);
      localStorage.setItem("token", JSON.stringify(decoded));
      resetForm();
    } catch (error) {
      toast.error(error.response.data.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="bg-cover bg-conic/oklab from-28% from-blue-500 via-53% via-sky-600 to-96% to-purple-400 min-h-screen flex justify-center items-center">
      <div className="bg-conic/decreasing from-15% from-green-600 to-75% to-lime-400 rounded-4xl w-150">
        <h1 className="text-5xl font-bold text-center text-white p-6">Signup</h1>
        <Formik
          initialValues={{ userName: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
            {["userName", "email", "password", "confirmPassword"].map((field) => (
            <div key={field} className="w-full">
              <Field
                type={field}
                name={field}
                placeholder={
                  field === "password" ? "Password must be 10" : field
                }
                className={`w-full px-4 py-2 m-5 text-center border rounded-2xl focus:ring-2 ${
                  touched[field] && errors[field]
                    ? "error border-red-500 focus:ring-red-500"
                    : "focus:ring-indigo-500"
                }`}
              />
              <ErrorMessage
                name={field}
                component="span"
                className="text-red-500 mt-2 font-extralight text-sm italic"
              />
            </div>
          ))}
          <button
            type="submit"
            className='w-full px-4 py-2 mt-8 text-center bg-green-500 rounded-2xl text-white hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none'>
              Submit
          </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup