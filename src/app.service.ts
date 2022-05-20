import { Injectable } from '@nestjs/common';
import { Data, data, DataType } from './data';
import { v4 as uuid } from 'uuid';
import { isDataType } from './util';
import { Report } from './ts/interface';

@Injectable()
export class AppService {
  getAllReports(pType: DataType) {
    if (!isDataType(pType)) {
      return { message: '잘못된 타입' };
    }
    return data.report.filter(({ type }) => type === pType);
  }

  getReportById(pType: DataType, pId: string) {
    if (!isDataType(pType)) {
      return { message: '잘못된 타입' };
    }

    const result: Report = data.report
      .filter(({ type }) => type === pType)
      .find(({ id }) => id === pId);

    if (!result) {
      return { message: '존재하지 않는 데이터' };
    }

    return result;
  }

  createReport(pType: DataType, body: Report) {
    if (!isDataType(pType)) {
      return { message: '잘못된 타입' };
    }

    const newReport: Data['report'][number] = {
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date(),
      type: pType,
      ...body,
    };

    data.report.push(newReport);
    return data;
  }

  updateReport(pType: DataType, pId: string, body: Report) {
    if (!isDataType(pType)) {
      return { message: '잘못된 타입' };
    }

    const index = data.report
      .filter(({ type }) => type === pType)
      .findIndex(({ id }) => id === pId);

    if (index === -1) {
      return '존재 하지 않는 데이터';
    }

    const newReport: Data['report'][number] = {
      ...data.report[index],
      ...body,
    };

    data.report[index] = newReport;

    return data.report[index];
  }

  deleteReport(pId: DataType) {
    const index = data.report.findIndex(({ id }) => id === pId);

    if (index === -1) {
      return '해당 데이터를 찾을 수 없습니다.';
    }

    data.report.splice(index, 1);

    return data.report;
  }
}
