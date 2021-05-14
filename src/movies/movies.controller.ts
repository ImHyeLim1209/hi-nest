//라우팅. 여기서 바로 'hello'를 리턴해도 되지만 service에서 하는 것을 권장
//controller의 함수와 service의 함수명은 똑같이 하는 것을 권장
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get('')
  getAll() {
    return 'This will return all movies';
  }

  @Get('/search')
  search(@Query('year') searchingYear:string) {
    return 'we are searching for a movie with title';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return 'This will create movie';
  }

  @Delete('/:id')
  delete(@Param('id') movieId:string) {
    return `This will remove a movie ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId:string, @Body() updateData) {
    return `This will patch a movie ${movieId}`;
  }
}

