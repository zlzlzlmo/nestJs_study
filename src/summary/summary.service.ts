import { Injectable } from '@nestjs/common';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  caculateSummary() {
    const totalIncome = this.reportService
      .getAllReports('income')
      .reduce((acc, { amount }) => acc + amount, 0);

    const totalExpense = this.reportService
      .getAllReports('expense')
      .reduce((acc, { amount }) => acc + amount, 0);
    return {
      totalIncome,
      totalExpense,
      netIncome: totalIncome - totalExpense,
    };
  }
}
