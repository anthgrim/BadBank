import { Button, TextField, Box } from "@mui/material";
const Withdraw = () => {
  const customStyles = {
    width: "fit-content",
  };
  return (
    <>
      <h3>Withdraw</h3>
      <div className="card" style={customStyles}>
        <div className="card-body">
          <div className="row">
            <h5 className="card-title">Balance</h5>
            <span>$10.99</span>
          </div>
          <div>
            <Box m={2}>
              <TextField
                className="text-box custom-input-box"
                id="withdraw"
                name="withdraw"
                label="Withdraw Amount"
              />
            </Box>
            <Box m={2}>
              <Button variant="contained">Withdraw</Button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
