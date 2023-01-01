export default (...args: any[]): void => {
  console.log('====================================');
  console.log(JSON.stringify(args, null, 2));
  console.log('====================================');
};
