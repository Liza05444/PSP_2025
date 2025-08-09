import { Module } from '@nestjs/common';
import { SlothsService } from './sloths.service';
import { SlothsController } from './sloths.controller';
import { FileService } from 'src/file.service';
import { Sloth } from './entities/sloth.entity';

@Module({
  controllers: [SlothsController],
  providers: [
    SlothsService,
    {
      provide: FileService,
      useFactory: () => new FileService<Sloth[]>('assets/sloths.json'),
    },
  ],
})
export class SlothsModule {}
