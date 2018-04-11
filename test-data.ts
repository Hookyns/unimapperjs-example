import {Teacher} from "./entities/Teacher";
import {Student} from "./entities/Student";
import {Subject} from "./entities/Subject";

function createTeacher(n)
{
	let [f, l] = n.split(" ");
	return new Teacher({
		firstName: f,
		lastName: l
	});
}

function createStudent(n, t)
{
	return new Student({
		name: n,
		teacherId: t
	});
}

function createSubject(n, a)
{
	return new Subject({
		name: n,
		active: a
	});
}

export async function insertTestData()
{
	// Delete all teachers and students
	await Student.removeWhere(e => e.id);
	await Teacher.removeWhere(e => e.id);
	await Subject.removeWhere(e => e.id);

	let promises = [];

	// Insert some subjects
	promises.push(Subject.insert(createSubject("Math", true)));
	promises.push(Subject.insert(createSubject("English", true)));
	promises.push(Subject.insert(createSubject("Physics", false)));

	await Promise.all(promises);
	promises = [];

	// Insert some teachers
	let t1 = createTeacher("Ubiquitous Teacher");
	promises.push(Teacher.insert(t1));
	let t2 = createTeacher("Spasmodic Teacher");
	promises.push(Teacher.insert(t2));
	let t3 = createTeacher("Ubiquitous Ukulele");
	promises.push(Teacher.insert(t3));
	let t4 = createTeacher("Sartorial Potato");
	promises.push(Teacher.insert(t4));
	let t5 = createTeacher("Luminous Chair");
	promises.push(Teacher.insert(t5));

	await Promise.all(promises);
	promises = [];

	// Insert some students
	promises.push(Student.insert(createStudent("Recalcitant Ukulele", t1.id)));
	promises.push(Student.insert(createStudent("Mannered Bushes", t1.id)));
	promises.push(Student.insert(createStudent("Withering Locomotive", t1.id)));
	promises.push(Student.insert(createStudent("Platitudinous Cookies", t1.id)));
	promises.push(Student.insert(createStudent("Petulant Designer", t2.id)));
	promises.push(Student.insert(createStudent("Concomitant Apples", t2.id)));
	promises.push(Student.insert(createStudent("Lachrymose Soaper", t2.id)));
	promises.push(Student.insert(createStudent("Inveterate Flatter", t2.id)));
	promises.push(Student.insert(createStudent("Contumacious Beets", t2.id)));
	promises.push(Student.insert(createStudent("Jocular Rainbows", t2.id)));
	promises.push(Student.insert(createStudent("Noxious Bushes", t3.id)));
	promises.push(Student.insert(createStudent("Animistic Inker", t3.id)));
	promises.push(Student.insert(createStudent("Tremulous Model", t3.id)));
	promises.push(Student.insert(createStudent("Voluble Carrot", t4.id)));
	promises.push(Student.insert(createStudent("Minatory Circus", t4.id)));
	promises.push(Student.insert(createStudent("Pendulous Producer", t4.id)));
	promises.push(Student.insert(createStudent("Pervasive Shop foreman", t4.id)));
	promises.push(Student.insert(createStudent("Defamatory Circus", t4.id)));

	await Promise.all(promises);
}