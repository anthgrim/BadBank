import getCurrentDate from "./getCurrentDate";

const createTransaction = (type, amount) => {
  return {
    type: type,
    amount: amount,
    date: getCurrentDate(),
  };
};

export default createTransaction;
