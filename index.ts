import {Teacher} from "./entities/Teacher";
import {Student} from "./entities/Student";
import {Subject} from "./entities/Subject";

// Because this script is in same event loop iteration as entity declaration, we must setImmediate
// More info in wiki - Entities
setImmediate(async function () {

	// Prepare test data
	await require("test-data").insertTestData();

	// Teachers their first name contains "u"
	let teachers = await Teacher.getAll()
		.filter(t => t.firstName.includes("u"))
		.sort(t => t.firstName)
		.exec();

	// Students their name starts with 'P' or ends with 's'
	let startsWith = "P";
	let students = await Student.getAll()
		.filter(s => s.name.startsWith($) || s.name.endsWith("s"), startsWith)
		.sortDesc(s => s.name)
		.slice(3, 8) // limit 5, skip 3
		.exec();

	let onlyActive = true;
	let activeSubjectsCount = await Subject.getAll()
		.filterIf(s => s.active === true, onlyActive) // if (onlyActive) { .filter(s => s.active === true) }
		.count()
		.exec();

	let subjectNames = await Subject.getAll()
		.sort(s => s.name)
		.map(s => s.name) // select only names ; in SQL SELECT name FROM Subject
		.exec();

	let subjectMap = await Subject.getAll()
		.sort(s => s.name)
		.map(s => ({
			id: s.id,
			name: s.name
		}))
		.exec();
});