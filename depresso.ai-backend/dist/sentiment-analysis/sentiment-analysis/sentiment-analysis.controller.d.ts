interface AnalyzeRequestBody {
    text: string;
}
export declare class SentimentAnalysisController {
    analyzeEmotions(body: AnalyzeRequestBody): Promise<any>;
}
export {};
