'use client'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

const initialValues = {
  image: null,
  name: "",
  price: "",
  category: "",
  description: "",
  features: [""],
};

const validationSchema = Yup.object({
  image: Yup.mixed().required("Product image is required"),
  name: Yup.string().required("Product name is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  features: Yup.array().of(Yup.string()).required('features are required'),
  brand: Yup.string().required('brand is required'),
});

const product = [
  "image",
  "name",
  "price",
  "category",
  "description",
  "features",
  'brand'
];

const AddProduct = () => {
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post('http://localhost:5773/admin/add-product', values, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      toast.success(res.data.message)
      const token = res.data.token
      localStorage.getItem(token)
    } catch (error) {
      toast.error(error.response.data.message || 'Product failed')
    } 
  }

  return (
    <div className="p-6 bg-gray-700 shadow-lg bg-cover min-h-screen">
      <h2 className="text-xl font-extrabold mb-4 md:text-center md:text-3xl">Add Product</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, touched, errors }) => (
          <Form>
            {product.map((PF) => (
              <div key={PF} className="mb-4">
                {PF === "image" ? (
                  <>
                    <input
                      type="file"
                      name="image"
                      onChange={(event) =>
                        setFieldValue("image", event.currentTarget.files[0])
                      }
                      className="border p-2 rounded-3xl w-full"
                    />
                    {values.image && (
                      <div className="mt-2">
                        <Image
                          src={URL.createObjectURL(values.image)}
                          alt="Preview"
                          width={100}
                          height={100}
                          className="rounded-xl"
                        />
                      </div>
                    )}
                  </>
                ) : PF === "features" ? (
                  <div>
                    {/* <label className="block font-medium">Features</label> */}
                    {values.features.map((feature, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <Field
                          type="text"
                          name={`features[${index}]`}
                          placeholder={`feature ${index + 1}`}
                          className="border p-2 rounded-3xl w-full"
                        />
                        <button
                          type="button"
                          className="text-red-500 px-2 rounded-4xl"
                          onClick={() => {
                            const newFeatures = [...values.features];
                            newFeatures.splice(index, 1);
                            setFieldValue("features", newFeatures);
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-3 py-1 rounded-3xl"
                      onClick={() =>
                        setFieldValue("features", [...values.features, ""])
                      }
                    >
                      + Add Feature
                    </button>
                  </div>
                ) : (
                  <Field
                    type="text"
                    name={PF}
                    placeholder={PF}
                    className={`border p-2 rounded-3xl w-full ${
                      touched[PF] && errors[PF]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                )}

                <ErrorMessage
                  name={PF}
                  component="span"
                  className="text-red-500 text-sm italic"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded-4xl mt-4"
            >
              Add Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
