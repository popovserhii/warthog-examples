import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Model, IDType, StringField } from 'warthog';

@Model()
@ObjectType()
export class Role {
  @Field(type => ID)
  @PrimaryGeneratedColumn({ type: "integer" })
  id!: IDType;

  @StringField()
  @Column({ nullable: false })
  mnemo?: string;
}