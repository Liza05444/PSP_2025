import { Injectable } from '@nestjs/common';
import { CreateSlothDto } from './dto/create-sloth.dto';
import { UpdateSlothDto } from './dto/update-sloth.dto';
import { FileService } from 'src/file.service';
import { Sloth } from './entities/sloth.entity';
import { SlothNotFoundException } from './exceptions/sloth-not-found.exception';

@Injectable()
export class SlothsService {
  constructor(private fileService: FileService<Sloth[]>) {}

  findAll(name?: string): Sloth[] {
    const sloths = this.fileService.read();

    return name
      ? sloths.filter((sloth) =>
          sloth.name.toLowerCase().includes(name.toLowerCase()),
        )
      : sloths;
  }

  create(createSlothDto: CreateSlothDto) {
    const sloths = this.fileService.read();

    // для простоты новый id = текущее количество карточек + 1
    const sloth = { ...createSlothDto, id: sloths.length + 1 };

    this.fileService.add(sloth);
  }

  findOne(id: number): Sloth | null {
    const sloths = this.fileService.read();
    const sloth = sloths.find(s => s.id === id);
    if (!sloth) {
      throw new SlothNotFoundException(id);
    }
    return sloth;
  }

  update(id: number, updateSlothDto: UpdateSlothDto): void {
    const sloths = this.fileService.read();

    const updatedSloths = sloths.map((sloth) =>
      sloth.id === id ? { ...sloth, ...updateSlothDto } : sloth,
    );

    this.fileService.write(updatedSloths);
  }

  remove(id: number): void {
    const filteredSloths = this.fileService
      .read()
      .filter((sloth) => sloth.id !== id);

    this.fileService.write(filteredSloths);
  }
}
