"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const router_1 = __importDefault(require("@koa/router"));
const koa_body_1 = __importDefault(require("koa-body"));
const yandex_1 = require("./yandex");
const app = new koa_1.default();
const router = new router_1.default();
router.post('/api/yi', (0, koa_body_1.default)(), (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = ctx.request.body;
    try {
        const result = yield (0, yandex_1.apiYandex)(reqBody);
        ctx.body = {
            code: 0,
            result: result.text
        };
    }
    catch (error) {
        ctx.body = Object.assign({ code: 1 }, error);
    }
}));
app.use(router.routes())
    .use(router.allowedMethods());
const port = 5200;
app.listen(port, () => {
    console.log(`Server is running on : ${port}`);
});
