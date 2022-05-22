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
import { data, ReportType } from './data';
import { AppService } from './app.service';
import { Report } from './ts/interface';
import { CreateReportDto, UpdateReportDto } from './dto/report.dto';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getAllReports(@Param('type') pType: ReportType) {
    return this.appService.getAllReports(pType);
  }

  @Get(':id')
  getReportById(@Param('type') pType: ReportType, @Param('id') pId: string) {
    return this.appService.getReportById(pType, pId);
  }

  @Post()
  createReport(
    @Param('type') pType: ReportType,
    @Body() body: CreateReportDto,
  ) {
    return this.appService.createReport(pType, body);
  }

  @Put(':id')
  updateReport(
    @Param('type') pType: ReportType,
    @Param('id') pId: string,
    @Body() body: UpdateReportDto,
  ) {
    console.log('body: ', body);
    return this.appService.updateReport(pType, pId, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id') pId: ReportType) {
    return this.appService.deleteReport(pId);
  }
}
