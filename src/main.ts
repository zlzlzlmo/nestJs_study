import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //dto를 전역에서 쓸 수 있게 선언해줘야함
  // whitelist의 기본값은 false
  // true로 주게되면 dto에서 설정한 키밸류 값만 들어옴
  // 즉, 그 외의 키밸류값은 알아서 필터링 돼서 들어온다
  // 버그와 안전성에 있어서 true로 하는게 좋다
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
