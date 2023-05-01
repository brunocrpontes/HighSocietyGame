"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var koa_1 = __importDefault(require("koa"));
var router_1 = __importDefault(require("@koa/router"));
var router = new router_1["default"]();
var App = new koa_1["default"]();
router.get("/", function (context) {
    context.response.body = JSON.stringify(context, null, 2);
});
router.get("/ping", function (context) {
    context.response.body = "Server is Up!";
    context.response.status = 204;
});
App
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3002, function () { return console.log("Server Listening on port 3002"); });
