import { useFormik } from "formik";
import useUserContext from "../../hooks/useUserContext";
import usersData from "../../data/user";
import { toast } from "react-toastify";

import * as yup from "yup";
import { ref } from "yup";
import { Button, TextField, Box } from "@mui/material";
import Avatar from "../Avatar";

const RegisterPopUp = ({ handleClose }) => {
  //Users context
  const { setUser } = useUserContext();

  //Registration validation schema using yup
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(5, "Password should be at least 5 chars long")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([ref("password")], "Passwords do not match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: validationSchema,

    onSubmit: () => {
      const isDuplicate = usersData.find(
        (user) => user.email === formik.values.email
      );

      if (isDuplicate) {
        toast.error("Email already in use");
        return;
      }

      const newUser = {
        userPic: "/images/Avatar0.png",
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
        balance: 0,
        transactionHistory: [],
      };

      usersData.push(newUser);

      setUser(usersData);
      formik.resetForm();
      handleClose();
      toast.success("Successful user registration");
      return;
    },
  });

  const cancelButtonStyles = {
    backgroundColor: "#495057",
  };

  return (
    <>
      <div className="popup-box">
        <div className="box">
          <span className="">Register</span>
          <hr />
          <div>
            <Box m={2}>
              <Avatar image={"/images/Avatar0.png"} />
            </Box>
            <Box m={2}>
              <TextField
                className="text-box custom-input-box"
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Box>

            <Box m={2}>
              <TextField
                className="text-box custom-input-box"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>

            <Box m={2}>
              <TextField
                className="text-box custom-input-box"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>

            <Box m={2}>
              <TextField
                className="text-box custom-input-box"
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </Box>

            <Box m={2} className="custom-btn-group">
              <Button
                variant="contained"
                style={cancelButtonStyles}
                type="submit"
                onClick={handleClose}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                type="submit"
                onClick={formik.handleSubmit}
              >
                Register
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPopUp;
