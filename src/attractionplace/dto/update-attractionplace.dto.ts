import { PartialType } from '@nestjs/swagger';
import { CreateAttractionplaceDto } from './create-attractionplace.dto';

export class UpdateAttractionplaceDto extends PartialType(CreateAttractionplaceDto) {}
