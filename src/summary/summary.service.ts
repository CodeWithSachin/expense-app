import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
    
    constructor(private readonly reportService:ReportService){}

    getSummary(){
        const totalExpanse = this.reportService.getAllIncomeReport(ReportType.EXPENSE).reduce((sum, report)=> sum + report.amount, 0)
        const totalIncome = this.reportService.getAllIncomeReport(ReportType.INCOME).reduce((sum, report)=> sum + report.amount, 0)

        return {
            totalIncome,
            totalExpanse,
            netIncome:totalIncome - totalExpanse,
        }
    }
}
