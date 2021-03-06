"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const unimapperjs_1 = require("unimapperjs");
const Entity_1 = require("unimapperjs/src/Entity");
const domain_1 = require("../domain");
let Student = class Student extends Entity_1.Entity {
    static map(map) {
        const { Teacher } = require("./Teacher");
        map.id = unimapperjs_1.type.uuid;
        map.name = unimapperjs_1.type.string.length(100);
        map.teacherId = unimapperjs_1.type.number;
        map.teacher = unimapperjs_1.type.foreign(Teacher.name)
            .withForeign(s => s.teacherId);
    }
};
Student = __decorate([
    domain_1.domain.entity()
], Student);
exports.Student = Student;
//# sourceMappingURL=Student.js.map