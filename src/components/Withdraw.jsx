import { useState, useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import createTransaction from "../helpers/createTransaction";

import { Button, TextField, Box } from "@mui/material";
const Withdraw = () => {
  const { user, setUser, loggedInUser } = useUserContext();
  const [balance, setBalance] = useState();

  const validationSchema = yup.object({
    withdrawAmount: yup
      .number()
      .min(1, "Must be greater or equal than $1")
      .max(loggedInUser.balance, "Insufficient Funds")
      .required("Withdraw Amount is required"),
  });

  const formik = useFormik({
    initialValues: {
      withdrawAmount: "",
    },

    validationSchema: validationSchema,

    onSubmit: () => {
      //Verify if there's logged in user
      if (!loggedInUser) {
        toast.error("Please login to make a successful transaction");
        return;
      }

      const witAmount = parseFloat(formik.values.withdrawAmount);

      if (witAmount > loggedInUser.balance) {
        toast.warn("Insufficient Funds");
        return;
      }

      const newData = user.map((u) => {
        if (u.email === loggedInUser.email) {
          u.balance -= witAmount;
          const newTransaction = createTransaction("Withdraw", witAmount);
          u.transactionHistory.push(newTransaction);
          setBalance(u.balance);
        }
        return u;
      });

      setUser(newData);
      formik.resetForm();
      toast.success("Withdraw succesful");
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
      <h3>Withdraw</h3>
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
                  id="withdrawAmount"
                  name="withdrawAmount"
                  label="Withdraw Amount"
                  value={formik.values.withdrawAmount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.withdrawAmount &&
                    Boolean(formik.errors.withdrawAmount)
                  }
                  helperText={
                    formik.touched.withdrawAmount &&
                    formik.errors.withdrawAmount
                  }
                />
              </Box>
              <Box m={2}>
                <Button variant="contained" onClick={formik.handleSubmit}>
                  Withdraw
                </Button>
              </Box>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Withdraw;
