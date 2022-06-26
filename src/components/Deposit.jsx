import { useState, useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Box } from "@mui/material";
import { toast } from "react-toastify";

const Deposit = () => {
  const { user, setUser, loggedInUser } = useUserContext();
  const [balance, setBalance] = useState();

  const validationSchema = yup.object({
    depositAmount: yup
      .number()
      .min(1, "Must be greater or equal than $1")
      .required("Deposit Amount is required"),
  });

  const formik = useFormik({
    initialValues: {
      depositAmount: "",
    },

    validationSchema: validationSchema,

    onSubmit: () => {
      //Verify if there's logged in user
      if (!loggedInUser) {
        return alert("Please login to make a successful transaction");
      }

      const depAmount = parseFloat(formik.values.depositAmount);

      const newData = user.map((u) => {
        if (u.email === loggedInUser.email) {
          u.balance += depAmount;
          setBalance(u.balance);
        }
        return u;
      });

      setUser(newData);
      formik.resetForm();
      toast.success("Deposit successful");
      return;
    },
  });

  //Get initial balance
  useEffect(() => {
    if (loggedInUser) {
      setBalance(loggedInUser.balance);
    }
  }, [loggedInUser]);

  const customStyles = {
    width: "fit-content",
  };

  return (
    <>
      <h3>Deposit</h3>
      {!loggedInUser ? (
        <p>Please login to your account</p>
      ) : (
        <div className="card" style={customStyles}>
          <div className="card-body">
            <div className="row">
              <h5 className="card-title">Balance</h5>
              <span>${balance}</span>
            </div>
            <div>
              <Box m={2}>
                <TextField
                  className="text-box custom-input-box"
                  id="depositAmount"
                  name="depositAmount"
                  label="Deposit Amount"
                  value={formik.values.depositAmount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.depositAmount &&
                    Boolean(formik.errors.depositAmount)
                  }
                  helperText={
                    formik.touched.depositAmount && formik.errors.depositAmount
                  }
                />
              </Box>
              <Box m={2}>
                <Button variant="contained" onClick={formik.handleSubmit}>
                  Deposit
                </Button>
              </Box>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Deposit;
