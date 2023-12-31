
interface Data {
    reports: {
        id : string;
        source:string,
        amount:number,
        created_at: Date,
        updated_at: Date,
        type:ReportType
    }[]
}

export enum ReportType { 
    INCOME  = 'income',
    EXPENSE  = 'expense'
}

export const data:Data = {
    reports : [
        {
            id:"uuid1",
            source:"Salary",
            amount:50000,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.INCOME
        },
        {
            id:"uuid2",
            source:"Stocks",
            amount:23000,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.INCOME
        },
        {
            id:"uuid3",
            source:"Food",
            amount:500,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.EXPENSE
        },
    ]
};


// data.reports.push({
//     id:"uuid",
//     source:"Salary",
//     amount:50000,
//     created_at:new Date(),
//     updated_at:new Date(),
//     type:ReportType.INCOME
// })