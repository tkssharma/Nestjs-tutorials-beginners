import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDTO {

  @ApiProperty()
  title: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  description: string;
  
  @ApiProperty()
  price: number;
}

export type UpdateProductDTO = Partial<CreateProductDTO>;
