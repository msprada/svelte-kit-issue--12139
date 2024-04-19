import { ConfigurationPropertyDto } from './configuration-property.dto';

export class OrderDto {
  id: number;

  orderTotal: number;

  userId: string;

  configurationPropertyList: ConfigurationPropertyDto[];
}
