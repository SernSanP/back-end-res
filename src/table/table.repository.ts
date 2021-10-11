import { EntityRepository, Repository } from "typeorm";
import { CreateTableDto } from "./dto/createTable.dto";
import { Table } from "./table.entity";

@EntityRepository(Table)
export class TableRepository extends Repository<Table> {
    async createTable(createTableDto: CreateTableDto): Promise<Table> {
        const { name } = createTableDto
        const table = this.create({
            name,
        })
        await this.save(table)
        return table
    }
}
