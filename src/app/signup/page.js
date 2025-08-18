"use client";

import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email"),
      password: Yup.string()
        .required("Required")
        .min(10, "Minimum 10 characters"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          {["userName", "email", "password", "confirmPassword"].map((field) => (
            <div key={field}>
              <input
                type={field}
                name={field}
                placeholder={
                  field === "password" ? "Password must be 10" : field
                }
                value={formik.values[field]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched[field] && formik.errors[field]
                  ? "error border-red-500 focus:ring-red-500"
                  : "focus:ring-indigo-500"
                }
              />
              {formik.touched[field] && formik.errors[field] && (
                <span className="error text-red-500 mt-1 text-sm font-extralight">
                  {formik.errors[field]}
                </span>
              )}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup