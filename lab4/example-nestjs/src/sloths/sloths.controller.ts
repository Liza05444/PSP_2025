import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SlothsService } from './sloths.service';
import { CreateSlothDto } from './dto/create-sloth.dto';
import { UpdateSlothDto } from './dto/update-sloth.dto';
import { Sloth } from './entities/sloth.entity';

@Controller('sloths')
export class SlothsController {
  constructor(private readonly slothsService: SlothsService) {}

  @Post()
  create(@Body() createSlothDto: CreateSlothDto) {
    return this.slothsService.create(createSlothDto);
  }

  @Get()
  findAll(@Query('name') name?: string): Sloth[] {
    return this.slothsService.findAll(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slothsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlothDto: UpdateSlothDto) {
    return this.slothsService.update(+id, updateSlothDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slothsService.remove(+id);
  }
}
