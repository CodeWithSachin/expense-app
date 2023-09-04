import { Injectable } from '@nestjs/common';
import { ReportType, data } from 'src/data';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from 'src/dtos/report.dto';

interface createReport {
  amount: number;
  source: string;
}
interface updateReport {
  amount: number;
  source: string;
}

@Injectable()
export class ReportService {
  getAllIncomeReport(type: ReportType): ReportResponseDto[] {
    return data.reports
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getIncomeReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.reports
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!report) return;

    return new ReportResponseDto(report);
  }

  createIncomeReport(
    type: ReportType,
    { source, amount }: createReport,
  ): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type,
    };
    data.reports.push(newReport);
    return new ReportResponseDto(newReport);
  }

  updateIncomeReportById(
    type: ReportType,
    id: string,
    body: updateReport,
  ): ReportResponseDto {
    const reportToUpdate = data.reports
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!reportToUpdate) return;
    const reportIndex = data.reports.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.reports[reportIndex] = {
      ...data.reports[reportIndex],
      ...body,
    };
    return new ReportResponseDto(data.reports[reportIndex]);
  }

  deleteIncomeReportById(id: string) {
    const reportIndex = data.reports.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.reports.splice(reportIndex, 1);

    return;
  }
}
