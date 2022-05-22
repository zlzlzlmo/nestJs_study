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
import { data, ReportType } from 'src/data';
import { Report } from 'src/ts/interface';
import { CreateReportDto, UpdateReportDto } from 'src/dto/report.dto';
import { ReportService } from './report.service';

@Controller('report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get()
  getAllReports(@Param('type') pType: ReportType) {
    return this.reportService.getAllReports(pType);
  }

  @Get(':id')
  getReportById(@Param('type') pType: ReportType, @Param('id') pId: string) {
    return this.reportService.getReportById(pType, pId);
  }

  @Post()
  createReport(
    @Param('type') pType: ReportType,
    @Body() body: CreateReportDto,
  ) {
    return this.reportService.createReport(pType, body);
  }

  @Put(':id')
  updateReport(
    @Param('type') pType: ReportType,
    @Param('id') pId: string,
    @Body() body: UpdateReportDto,
  ) {
    console.log('body: ', body);
    return this.reportService.updateReport(pType, pId, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id') pId: ReportType) {
    return this.reportService.deleteReport(pId);
  }
}
