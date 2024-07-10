import { Module } from '@nestjs/common';
import { SentimentAnalysisController } from './sentiment-analysis/sentiment-analysis.controller';

@Module({
  controllers: [SentimentAnalysisController]
})
export class SentimentAnalysisModule {}
