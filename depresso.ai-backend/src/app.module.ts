import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SentimentAnalysisModule } from './sentiment-analysis/sentiment-analysis.module';

@Module({
  imports: [SentimentAnalysisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
