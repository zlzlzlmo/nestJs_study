import { Injectable } from '@nestjs/common';
import { Reports, data, ReportType } from 'src/data';
import { v4 as uuid } from 'uuid';
import { isDataType } from 'src/util';
import { Report } from 'src/ts/interface';
import { ReportResponseDto } from 'src/dto/report.dto';

@Injectable()
export class ReportService {
  getAllReports(pType: ReportType) {
    if (!isDataType(pType)) {
      return { message: '잘못된 타입' };
    }

    return data.reports.filter(({ type }) => type === pType);
  }

  getReportById(pType: ReportType, pId: string): ReportResponseDto {
    const result = data.reports
      .filter(({ type }) => type === pType)
      .find(({ id }) => id === pId);

    return new ReportResponseDto(result);
  }

  createReport(pType: ReportType, body: Report) {
    if (!isDataType(pType)) {
      return { message: '잘못된 타입' };
    }

    const newReport: Reports['reports'][number] = {
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date(),
      type: pType,
      ...body,
    };

    data.reports.push(newReport);
    return data;
  }

  updateReport(pType: ReportType, pId: string, body: Report) {
    if (!isDataType(pType)) {
      return { message: '잘못된 타입' };
    }

    const index = data.reports
      .filter(({ type }) => type === pType)
      .findIndex(({ id }) => id === pId);

    if (index === -1) {
      return '존재 하지 않는 데이터';
    }

    const newReport: Reports['reports'][number] = {
      ...data.reports[index],
      ...body,
    };

    data.reports[index] = newReport;

    return data.reports[index];
  }

  deleteReport(pId: ReportType) {
    const index = data.reports.findIndex(({ id }) => id === pId);

    if (index === -1) {
      return '해당 데이터를 찾을 수 없습니다.';
    }

    data.reports.splice(index, 1);

    return data.reports;
  }
}
