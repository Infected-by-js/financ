// const groupOperationsByDate = (operations) => {
//   const groupedOperations = operations.reduce((acc, operation) => {
//     const date = new Date(operation.date).toLocaleDateString();

//     if (!acc[date]) {
//       acc[date] = {
//         date,
//         amount: 0,
//         operations: [],
//         _id: `${date}-${Math.random().toString(36).slice(2, 15)}`,
//       };
//     }

//     acc[date].amount += operation.amount;
//     acc[date].operations.push(operation);
//     return acc;
//   }, {});

//   return Object.values(groupedOperations);
// };

// const filterOperationsByPeriod = (operations, from, to) => {
//   return groupOperationsByDate(operations).filter((operationByDay) => {
//     const operationDay = new Date(operationByDay.date);
//     return operationDay >= from && operationDay <= to;
//   });
// };
