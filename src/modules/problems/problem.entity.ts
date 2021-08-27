import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('t_device')
export class Problem {
  @PrimaryColumn({ name: 'problem_number' })
  public problemNumber: number;

  @Column({ name: 'submitCnt', default: 0 })
  public submitCnt: number;

  @CreateDateColumn({ name: 'created_datetime', type: 'timestamptz' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_datetime', type: 'timestamptz' })
  public updatedAt: Date;

  public submit(rawCode: string) {
    return rawCode;
  }
}
