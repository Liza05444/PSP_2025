import { PartialType } from '@nestjs/mapped-types';
import { CreateSlothDto } from './create-sloth.dto';

export class UpdateSlothDto extends PartialType(CreateSlothDto) {}
