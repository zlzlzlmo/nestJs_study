import { DataType } from 'src/data';

export function isDataType(value: string): value is DataType {
  return ['income', 'expense'].includes(value as DataType);
}
