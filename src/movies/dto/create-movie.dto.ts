//DTO: 데이터 전송 객체
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDTO{
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}