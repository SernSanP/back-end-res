import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTableDto } from './dto/createTable.dto';
import { Table } from './table.entity';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
    constructor(private tableService: TableService) { }

    @Post()
    createTable(@Body() createTableDto: CreateTableDto): Promise<Table> {
        return this.tableService.createTable(createTableDto);
    }

    @Get()
    getTableData(): Promise<Table[]> {
        console.log('get table')
        return this.tableService.getTableData()
    }
}
