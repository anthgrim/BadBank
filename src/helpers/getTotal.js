const getTotal = (targetType, data) => {
  if (data.length === 0) return 0;
  const targetArray = data.filter((record) => record.type === targetType);
  if (targetArray.length === 0) return 0;
  if (targetArray.length === 1) return targetArray[0].amount;
  console.log(targetType);
  console.log(targetArray);
  return targetArray.reduce((acc, obj) => acc + obj.amount, 0);
};

export default getTotal;
