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
exports.UserDataSource = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("../../interfaces/data-sources/database");
let UserDataSource = class UserDataSource {
    constructor(userDataSource) {
        this.userDataSource = userDataSource;
    }
    async get(params) {
        const user = await this.userDataSource.get(params.id);
        const result = {
            user: user
        };
        return result;
    }
    ;
    async set(params) {
        const user = {
            id: params.id,
            name: params.name,
            age: params.age
        };
        return await this.userDataSource.set(user.id, user);
    }
    ;
};
exports.UserDataSource = UserDataSource;
exports.UserDataSource = UserDataSource = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_1.DatabaseDataSource])
], UserDataSource);
//# sourceMappingURL=user-data-source.js.map