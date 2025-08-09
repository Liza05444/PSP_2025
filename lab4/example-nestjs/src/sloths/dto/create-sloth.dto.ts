import { IsString, IsArray, ArrayMinSize, Length, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSlothDto {
  @IsString()
  @Length(5, 40, { message: 'Название должно быть от 5 до 40 символов' })
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  image?: string;
  
  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  @Length(4, 50, { message: 'Среда обитания должна быть от 4 до 50 символов' })
  @IsNotEmpty()
  habitat: string;

  @IsOptional()
  @IsString()
  diet?: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'Должен быть хотя бы один факт' })
  @IsString({ each: true })
  facts: string[];
}