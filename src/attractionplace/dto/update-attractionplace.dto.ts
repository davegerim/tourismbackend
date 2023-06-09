import { PartialType } from '@nestjs/mapped-types';
import { CreateAttractionplaceDto } from './create-attractionplace.dto';

export class UpdateAttractionplaceDto extends PartialType(CreateAttractionplaceDto) {}
