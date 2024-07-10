"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentimentAnalysisController = void 0;
const common_1 = require("@nestjs/common");
const use = require('@tensorflow-models/universal-sentence-encoder');
let SentimentAnalysisController = class SentimentAnalysisController {
    async analyzeEmotions(body) {
        const { text } = body;
        const model = await use.load();
        const embeddings = await model.embed([text]);
        const result = await embeddings.array();
        const [positive, negative, neutral] = [0.7, 0.2, 0.1];
        return { positive, negative, neutral };
    }
};
exports.SentimentAnalysisController = SentimentAnalysisController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SentimentAnalysisController.prototype, "analyzeEmotions", null);
exports.SentimentAnalysisController = SentimentAnalysisController = __decorate([
    (0, common_1.Controller)('analyze')
], SentimentAnalysisController);
//# sourceMappingURL=sentiment-analysis.controller.js.map