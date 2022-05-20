/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Data, data, DataType } from './data';
import { isDataType } from './util';
import { v4 as uuid } from 'uuid';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') pType: DataType) {
    console.log(pType);

    if (!isDataType(pType)) {
      return { message: '잘못된 타입' };
    }

    return data.report.filter(({ type }) => type === pType);
  }

  @Get(':id')
  getReportReportById(@Param('type') pType: string, @Param('id') pId: string) {
    if (!isDataType(pType)) {
      return { message: '잘못된 타입' };
    }

    return data.report
      .filter(({ type }) => type === pType)
      .find(({ id }) => id === pId);
  }

  @Post()
  createReport(@Body() body: { amount: number; source: string }) {
    const newReport: Data['report'][number] = {
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
      ...body,
    };

    data.report.push(newReport);
    return data;
  }

  @Put(':id')
  updateReport(
    @Param('type') pType: string,
    @Param('id') pId: string,
    @Body() body: { amount: number; source: string },
  ) {
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

  @Delete(':id')
  deleteReport() {
    return 'delete';
  }
}
