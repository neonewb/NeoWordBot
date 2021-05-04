import { MigrationInterface, QueryRunner } from 'typeorm'

export class words1620119214996 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "word" RENAME TO "words"`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "words" RENAME TO "word"`)
  }
  
}
