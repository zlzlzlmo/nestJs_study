import { ReportType } from 'src/data';

export function isDataType(value: string): value is ReportType {
  return ['income', 'expense'].includes(value as ReportType);
}
