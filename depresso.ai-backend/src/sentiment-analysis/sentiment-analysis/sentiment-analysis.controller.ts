// src/sentiment-analysis/sentiment-analysis.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs-node';
const use = require('@tensorflow-models/universal-sentence-encoder');

interface AnalyzeRequestBody {
  text: string;
}

@Controller('analyze')
export class SentimentAnalysisController {

  @Post()
  async analyzeEmotions(@Body() body: AnalyzeRequestBody): Promise<any> {
    const { text } = body;

    // Load the Universal Sentence Encoder model
    const model = await use.load();
    const embeddings = await model.embed([text]);
    const result = await embeddings.array();

    const [positive, negative, neutral] = [0.7, 0.2, 0.1]; // Dummy values for illustration

    return { positive, negative, neutral };
  }
}
