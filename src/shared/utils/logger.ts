export default (...args: any[]): void => {
  const toStr = (data: any) => JSON.stringify(data, null, 2);

  console.log(
    `
      \n====================================
      \n${args.map((v) => toStr(v)).join('\n')}
      \n====================================
    `
  );
};
