import { MigrationInterface, QueryRunner } from "typeorm";
import * as bcrypt from "bcrypt";

export class AddAdminUser1611471976318 implements MigrationInterface {
  name = "AddAdminUser1611471976318";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash("admin@123", salt);
    await queryRunner.query(
      `INSERT INTO "visitor-services"."admin" ("firstName", "lastName", username, phonenumber, "password") VALUES('admin', 'admin', 'admin', '1234567890', '${hash}');`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "visitor-services"."admin" WHERE username="admin"`
    );
  }
}
