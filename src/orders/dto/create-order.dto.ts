import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
