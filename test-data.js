"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Teacher_1 = require("./entities/Teacher");
const Student_1 = require("./entities/Student");
const Subject_1 = require("./entities/Subject");
function createTeacher(n) {
    let [f, l] = n.split(" ");
    return new Teacher_1.Teacher({
        firstName: f,
        lastName: l
    });
}
function createStudent(n, t) {
    return new Student_1.Student({
        name: n,
        teacherId: t
    });
}
function createSubject(n, a) {
    return new Subject_1.Subject({
        name: n,
        active: a
    });
}
async function insertTestData() {
    // Delete all teachers and students
    await Student_1.Student.removeWhere(e => e.id);
    await Teacher_1.Teacher.removeWhere(e => e.id);
    await Subject_1.Subject.removeWhere(e => e.id);
    let promises = [];
    // Insert some subjects
    promises.push(Subject_1.Subject.insert(createSubject("Math", true)));
    promises.push(Subject_1.Subject.insert(createSubject("English", true)));
    promises.push(Subject_1.Subject.insert(createSubject("Physics", false)));
    await Promise.all(promises);
    promises = [];
    // Insert some teachers
    let t1 = createTeacher("Ubiquitous Teacher");
    promises.push(Teacher_1.Teacher.insert(t1));
    let t2 = createTeacher("Spasmodic Teacher");
    promises.push(Teacher_1.Teacher.insert(t2));
    let t3 = createTeacher("Ubiquitous Ukulele");
    promises.push(Teacher_1.Teacher.insert(t3));
    let t4 = createTeacher("Sartorial Potato");
    promises.push(Teacher_1.Teacher.insert(t4));
    let t5 = createTeacher("Luminous Chair");
    promises.push(Teacher_1.Teacher.insert(t5));
    await Promise.all(promises);
    promises = [];
    // Insert some students
    promises.push(Student_1.Student.insert(createStudent("Recalcitant Ukulele", t1.id)));
    promises.push(Student_1.Student.insert(createStudent("Mannered Bushes", t1.id)));
    promises.push(Student_1.Student.insert(createStudent("Withering Locomotive", t1.id)));
    promises.push(Student_1.Student.insert(createStudent("Platitudinous Cookies", t1.id)));
    promises.push(Student_1.Student.insert(createStudent("Petulant Designer", t2.id)));
    promises.push(Student_1.Student.insert(createStudent("Concomitant Apples", t2.id)));
    promises.push(Student_1.Student.insert(createStudent("Lachrymose Soaper", t2.id)));
    promises.push(Student_1.Student.insert(createStudent("Inveterate Flatter", t2.id)));
    promises.push(Student_1.Student.insert(createStudent("Contumacious Beets", t2.id)));
    promises.push(Student_1.Student.insert(createStudent("Jocular Rainbows", t2.id)));
    promises.push(Student_1.Student.insert(createStudent("Noxious Bushes", t3.id)));
    promises.push(Student_1.Student.insert(createStudent("Animistic Inker", t3.id)));
    promises.push(Student_1.Student.insert(createStudent("Tremulous Model", t3.id)));
    promises.push(Student_1.Student.insert(createStudent("Voluble Carrot", t4.id)));
    promises.push(Student_1.Student.insert(createStudent("Minatory Circus", t4.id)));
    promises.push(Student_1.Student.insert(createStudent("Pendulous Producer", t4.id)));
    promises.push(Student_1.Student.insert(createStudent("Pervasive Shop foreman", t4.id)));
    promises.push(Student_1.Student.insert(createStudent("Defamatory Circus", t4.id)));
    await Promise.all(promises);
}
exports.insertTestData = insertTestData;
//# sourceMappingURL=test-data.js.map