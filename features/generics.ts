type CurrencySign = '₽' | '€' | '£';

const currencySigns: ReadonlyArray<CurrencySign> = ['₽', '€', '£'];

// keyof
type Payment = {
  amount: number;
  currency: string;
  currencySign?: string;
}

type ObjectKey<Obj> = keyof Obj;

type PaymentKeys = ObjectKey<Payment>; //  'amount' | 'currency' | 'currencySign'

// <T>
type PaymentInfo<T> = { // T — параметр дженерика (нейминг любой)
  id: string;
  amount: number;
  currency: T; // «настраиваем» тип поля currency
}

const paymentInfo: PaymentInfo<string> = {
  id: '2',
  amount: 1,
  currency: '2'
}

// functions 
function identity<T>(arg: T): T {
  return arg;
}

// Constraints
interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

// Type Guards 
const account = {
  amount: 1_000_000,
  currency: 'RUB',
  currencySign: '₽',
  locked: false,
};

type Account = typeof account;


// Example
type Test = '2'

const str: Test = '2'
