import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTableDto } from './dto/createTable.dto';
import { Table } from './table.entity';
import { TableRepository } from './table.repository';

@Injectable()
export class TableService {
    constructor(
        @InjectRepository(TableRepository)
        private tableRepository: TableRepository,
    ) { }

    createTable(createTableDto: CreateTableDto): Promise<Table> {
        return this.tableRepository.createTable(createTableDto)
    }

    getTableData(): Promise<Table[]> {
        return this.tableRepository.getTableData()
    }
}
