//라우팅. 여기서 바로 'hello'를 리턴해도 되지만 service에서 하는 것을 권장
//controller의 함수와 service의 함수명은 똑같이 하는 것을 권장
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('')
  getAll() :Movie[] {
    return this.moviesService.getAll();
  }

  // @Get('/search')
  // search(@Query('year') searchingYear:string) {
  //   return 'we are searching for a movie with title';
  // }

  @Get('/:id')
  getOne(@Param('id') movieId: string) :Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId:string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId:string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}

