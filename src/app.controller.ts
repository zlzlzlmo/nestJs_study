import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { data, DataType } from './data';
import { isDataType } from './util';

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
  getReportReportById() {
    return ['하잉'];
  }

  @Post()
  createReport() {
    return 'Created';
  }

  @Put(':id')
  updateReport() {
    return 'Updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'delete';
  }
}
