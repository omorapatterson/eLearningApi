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
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const APIInfo_1 = require("../models/APIInfo");
let APIInfoController = class APIInfoController {
    /**
     * @api {get} /api/ Request API info
     * @apiName GetDependencies
     * @apiGroup API
     *
     * @apiSuccess {String} status API status.
     *
     * @apiSuccessExample {json} Success-Response:
     *     {
     *         "status": "up"
     *     }
     */
    getDependencies() {
        return new APIInfo_1.APIInfo('up');
    }
};
__decorate([
    routing_controllers_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], APIInfoController.prototype, "getDependencies", null);
APIInfoController = __decorate([
    routing_controllers_1.JsonController('/')
], APIInfoController);
exports.APIInfoController = APIInfoController;

//# sourceMappingURL=APIInfoController.js.map
