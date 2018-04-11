import { Entity } from "unimapperjs/src/Entity";
import { Teacher } from "./Teacher";
export declare class Student extends Entity<Student> {
    /**
     * Student Id
     */
    id: number;
    /**
     * Student name
     */
    name: string;
    /**
     * Student's teacher id
     */
    teacherId: number;
    /**
     * Navigation property to Teacher
     */
    teacher: Promise<Teacher>;
    static map(map: Student): void;
}
