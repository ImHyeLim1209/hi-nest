import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

//데코레이터: 클래스에 함수 기능 추가
//AppModule의 진짜 핵심 내용을 아래 데코레이터 내용이다!
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
