"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post("http://localhost:5773/user/login", values, {
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
      toast.error(
        error.response.data.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="bg-cover min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-linear-to-r from-40% to-80% rounded-3xl p-8 shadow-md w-150">
        <h1 className="text-2xl mb-4 text-center font-poppins font-extrabold">
          Login
        </h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              {["email", "password"].map((field) => (
                <div key={field}>
                  <Field
                    name={field}
                    type={field}
                    placeholder={field}
                    className={`w-full px-4 py-2 m-6 border rounded-2xl focus:ring-2 ${
                      touched[field] && errors[field]
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-indigo-500"
                    }`}
                  />
                  <ErrorMessage
                    name={field}
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
