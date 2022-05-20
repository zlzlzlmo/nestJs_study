/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { data, DataType } from './data';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getAllReports(@Param('type') pType: DataType) {
    return this.appService.getAllReports(pType);
  }

  @Get(':id')
  getReportById(@Param('type') pType: DataType, @Param('id') pId: string) {
    return this.appService.getReportById(pType, pId);
  }

  @Post()
  createReport(@Body() body: { amount: number; source: string }) {
    return this.appService.createReport(body);
  }

  @Put(':id')
  updateReport(
    @Param('type') pType: DataType,
    @Param('id') pId: string,
    @Body() body: { amount: number; source: string },
  ) {
    return this.appService.updateReport(pType, pId, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id') pId: DataType) {
    return this.appService.deleteReport(pId);
  }
}
