import { ApiProperty } from "@nestjs/swagger";


export class CreateOrderDTO {
    @ApiProperty()
    products: product []
  }

export class product {
    @ApiProperty()
    product: string;

    @ApiProperty()
    quantity: number;
  }