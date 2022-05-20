export type DataType = 'income' | 'expense';

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: DataType;
  }[];
}

export const data: Data = {
  report: [
    {
      id: 'uuid',
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
