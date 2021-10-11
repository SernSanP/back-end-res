import { Body, Controller, Post } from '@nestjs/common';
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
}
