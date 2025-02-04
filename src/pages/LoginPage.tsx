import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
}

export default function LoginPage() {
  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("This field is required").trim(),
      password: yup
        .string()
        .required("This field is required")
        .min(8, "Password must be at least 8 characters long")
        .trim(),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), undefined], "Passwords must match")
        .required("This field is required"),
    }),
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);

      try {
        const response = await axios.post(
          "http://localhost:5000/user/login",
          values
        );
        console.log("Response received:", response);
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });
  return (
    <div className="bg-[#171821] h-screen px-20 text-[#fdffff] grid grid-cols-2 ">
      <div className="flex flex-col justify-center">
        <h5 className="text-sans">
          Welcome! <span>Get started today and unlock your potential!</span>
        </h5>
      </div>
      <div className="border-gray-500 border rounded-4xl shadow-2xl w-full p-5 ">
        <form
          action=""
          className="flex flex-col gap-3"
          onSubmit={formik.handleSubmit}
        >
          <input
            className="border border-white outline-none text-white py-3 ps-10 rounded-2xl"
            type="text"
            onChange={formik.handleChange}
            name="username"
            value={formik.values.username}
          />
          <input
            className="border border-white outline-none text-white py-3 ps-10 rounded-2xl"
            type="password"
            onChange={formik.handleChange}
            name="password"
            value={formik.values.password}
          />
          <input
            className="border border-white outline-none text-white py-3 ps-10 rounded-2xl"
            type="password"
            onChange={formik.handleChange}
            name="confirmPassword"
            value={formik.values.confirmPassword}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
