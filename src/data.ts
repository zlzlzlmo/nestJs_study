export type ReportType = 'income' | 'expense';

export interface Reports {
  reports: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export const data: Reports = {
  reports: [
    {
      id: 'uuid',
      source: 'Salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
    {
      id: 'uuid232',
      source: 'Salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
    {
      id: 'uuid2',
      source: 'Youtube',
      amount: 300,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'expense',
    },
    {
      id: 'uuid3',
      source: 'Facebook',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'expense',
    },
  ],
};
