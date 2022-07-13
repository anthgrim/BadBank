import { useFormik } from "formik";
import useUserContext from "../../hooks/useUserContext";
import { toast } from "react-toastify";

import * as yup from "yup";
import { ref } from "yup";
import { Button, TextField, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "../Avatar";

const UpdateProfilePopUp = ({ handleClose }) => {
  //Users context
  const { loggedInUser, setLoggedInUser, user, setUser } = useUserContext();

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
      userPic: loggedInUser.userPic,
      name: loggedInUser.name,
      email: loggedInUser.email,
      password: loggedInUser.password,
      confirmPassword: loggedInUser.password,
    },

    validationSchema: validationSchema,

    onSubmit: () => {
      if (loggedInUser.email !== formik.values.email) {
        const isDuplicate = user.find(
          (user) => user.email === formik.values.email
        );

        if (isDuplicate) {
          toast.error("Email already in use");
          return;
        }
      }

      const updatedPayload = user.map((user) => {
        if (user.email === loggedInUser.email) {
          user.userPic = formik.values.userPic;
          user.name = formik.values.name;
          user.email = formik.values.email;
          user.password = formik.values.password;
        }
        return user;
      });

      setUser(updatedPayload);

      setLoggedInUser((prevData) => ({
        ...prevData,
        userPic: formik.values.userPic,
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
      }));

      formik.resetForm();
      handleClose();
      toast.success("Profile Updated!");
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
          <div className="card">
            <div className="card-body">
              <span className="">Update User Profile</span>
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
                      <MenuItem value="/images/Avatar1.png">Female 1</MenuItem>
                      <MenuItem value="/images/Avatar5.png">Female 2</MenuItem>
                      <MenuItem value="/images/Avatar6.png">Female 3</MenuItem>
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
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>

                  <Button
                    variant="contained"
                    type="submit"
                    onClick={formik.handleSubmit}
                  >
                    Update
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfilePopUp;
