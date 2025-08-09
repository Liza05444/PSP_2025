import { HttpException, HttpStatus } from '@nestjs/common';

export class SlothNotFoundException extends HttpException {
  constructor(id: number) {
    super(`Ленивец с ID ${id} не найден`, HttpStatus.NOT_FOUND);
  }
}