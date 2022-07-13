import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useUserContext from "../../hooks/useUserContext";
import { toast } from "react-toastify";
import User from "../../models/userModel";

import * as yup from "yup";
import { ref } from "yup";
import { Button, TextField, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "../Avatar";

const RegisterPopUp = ({ handleClose }) => {
  //Users context
  const { user, setUser } = useUserContext();
  const [isDisabled, setIsDisabled] = useState(true);
  const [otherAccount, setOtherAccount] = useState(false);

  //Registration validation schema using yup
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be at least 8 characters long")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([ref("password")], "Passwords do not match"),
  });

  const formik = useFormik({
    initialValues: {
      userPic: "/images/Avatar0.png",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: validationSchema,

    onSubmit: () => {
      const isDuplicate = user.find(
        (user) => user.email === formik.values.email
      );

      if (isDuplicate) {
        toast.error("Email already in use");
        return;
      }

      //Using a custom class as a model / schema
      const persona = new User();
      persona.userPic = formik.values.userPic;
      persona.name = formik.values.name;
      persona.email = formik.values.email;
      persona.password = formik.values.password;
      persona.balance = 0;
      persona.transactionHistory = [];

      setUser((prev) => [...prev, persona]);
      formik.resetForm();
      setOtherAccount((prev) => !prev);
      toast.success("Successful user registration");
      return;
    },
  });

  //Listen for Form inputs
  useEffect(() => {
    const { name, email, password, confirmPassword } = formik.values;

    if (
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      password.trim().length > 0 &&
      confirmPassword.trim().length > 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.values]);

  const handleClosePopUp = () => {
    handleClose();
    setOtherAccount(false);
  };

  const handleClickYes = () => {
    setOtherAccount((prev) => !prev);
  };

  const cancelButtonStyles = {
    backgroundColor: "#495057",
  };

  return (
    <>
      <div className="popup-box">
        <div className="box">
          {otherAccount ? (
            <div className="card">
              <div className="card-body">
                <p>Would you like to add another account?</p>
                <Box m={2} className="custom-btn-group">
                  <Button
                    variant="contained"
                    style={cancelButtonStyles}
                    type="submit"
                    onClick={handleClosePopUp}
                  >
                    No
                  </Button>

                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClickYes}
                  >
                    Yes
                  </Button>
                </Box>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Register</h5>
                <hr />
                <div>
                  <Box m={2}>
                    <Avatar image={formik.values.userPic} />
                  </Box>
                  <Box m={2}>
                    <FormControl className="custom-input-box">
                      <InputLabel id="userPicLabel">Avatar</InputLabel>
                      <Select
                        labelId="userPicLabel"
                        id="userPic"
                        name="userPic"
                        value={formik.values.userPic}
                        onChange={formik.handleChange}
                        label="Avatar"
                      >
                        <MenuItem value="/images/Avatar0.png">Default</MenuItem>
                        <MenuItem value="/images/Avatar1.png">
                          Female 1
                        </MenuItem>
                        <MenuItem value="/images/Avatar5.png">
                          Female 2
                        </MenuItem>
                        <MenuItem value="/images/Avatar6.png">
                          Female 3
                        </MenuItem>
                        <MenuItem value="/images/Avatar2.png">Male 1</MenuItem>
                        <MenuItem value="/images/Avatar4.png">Male 2</MenuItem>
                        <MenuItem value="/images/Avatar3.png">Male 3</MenuItem>
                      </Select>
                    </FormControl>
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
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
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
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
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
                      onClick={handleClosePopUp}
                    >
                      Cancel
                    </Button>

                    <Button
                      variant="contained"
                      type="submit"
                      onClick={formik.handleSubmit}
                      disabled={isDisabled}
                    >
                      Register
                    </Button>
                  </Box>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterPopUp;
