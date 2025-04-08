import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier',
    required: true,
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Email address',
    required: true,
    format: 'email',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'Password',
    required: true,
    format: 'password',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: false,
    description: 'Is the banned or not',
    required: false,
    default: false,
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({
    example: 'Violation of rules',
    description: 'Reason for ban',
    required: false,
    default: null,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banreason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
