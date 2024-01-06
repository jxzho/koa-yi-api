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
exports.apiYandex = void 0;
const querystring_1 = __importDefault(require("querystring"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const YANDEX_AUTH_KEY = process.env.YANDEX_AUTH_KEY;
const apiYandex = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?' + querystring_1.default.stringify({
        key: YANDEX_AUTH_KEY,
        text: reqBody.text,
        lang: reqBody.from + '-' + reqBody.to
    }), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
    if (res.ok) {
        return yield res.json();
    }
    else {
        return Promise.reject({
            statusText: res.statusText,
            status: res.status
        });
    }
});
exports.apiYandex = apiYandex;
