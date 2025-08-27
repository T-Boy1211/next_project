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
  features: Yup.array().of(Yup.string()),
});

const product = [
  "image",
  "name",
  "price",
  "features",
  "category",
  "description",
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
      if (!token) {
        
      }
    } catch (error) {
      toast.error(error.response.data.message || 'Product failed')
    } 
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>

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
                      className="border p-2 rounded w-full"
                    />
                    {values.image && (
                      <div className="mt-2">
                        <Image
                          src={URL.createObjectURL(values.image)}
                          alt="Preview"
                          width={100}
                          height={100}
                          className="rounded"
                        />
                      </div>
                    )}
                  </>
                ) : PF === "features" ? (
                  <div>
                    <label className="block font-medium">Features</label>
                    {values.features.map((feature, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <Field
                          type="text"
                          name={`features[${index}]`}
                          placeholder={`Feature ${index + 1}`}
                          className="border p-2 rounded w-full"
                        />
                        <button
                          type="button"
                          className="bg-red-500 text-white px-2 rounded"
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
                      className="bg-blue-500 text-white px-3 py-1 rounded"
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
                    className={`border p-2 rounded w-full ${
                      touched[PF] && errors[PF]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                )}

                <ErrorMessage
                  name={PF}
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded mt-4"
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
