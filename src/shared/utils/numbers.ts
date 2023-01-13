import numeral from 'numeral';

// TODO: Change to accounting lib

interface ToCurrecyOptions {
  isShowSign?: boolean;
  pattern?: string;
}

export const toCurrency = (
  num: number,
  { isShowSign = false, pattern = '0,000[.]00' }: ToCurrecyOptions = {}
) => {
  return numeral(num).format(`${pattern}${isShowSign ? ' $' : ''}`);
};
