import { PartialType } from '@nestjs/mapped-types';
import { CreateTripreservationDto } from './create-tripreservation.dto';

export class UpdateTripreservationDto extends PartialType(
  CreateTripreservationDto,
) {}
