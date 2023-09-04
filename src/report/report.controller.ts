import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, ParseUUIDPipe, ParseEnumPipe} from '@nestjs/common';
import { data, ReportType,} from 'src/data'
import { CreateReportDto, ReportResponseDto, UpdateReportDto } from 'src/dtos/report.dto'
import { ReportService } from './report.service'

@Controller('report/:type')
export class ReportController {

  constructor(private readonly reportService:ReportService) {
    
  }

  @Get()
  getAllIncomeReport(@Param('type', new ParseEnumPipe(ReportType)) type:string):ReportResponseDto[]{
    const reportType = type === "income"?ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getAllIncomeReport(reportType)
  }

  @Get(':id')
  getIncomeReportById(@Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string):ReportResponseDto{
    const reportType = type === "income"?ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getIncomeReportById(reportType,id)
  }

  @Post()
  createIncomeReport(@Body() {source, amount}:CreateReportDto, @Param('type', new ParseEnumPipe(ReportType)) type:string):ReportResponseDto{
    const reportType = type === "income"?ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createIncomeReport(reportType,{source, amount})
  }

  @Put(':id')
  updateIncomeReportById(@Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string, @Body() body:UpdateReportDto):ReportResponseDto{
    const reportType = type === "income"?ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.updateIncomeReportById(reportType, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteIncomeReportById(@Param('id', ParseUUIDPipe) id: string){
    return this.reportService.deleteIncomeReportById(id)
  }
}
