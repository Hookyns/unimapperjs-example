
/**
 * Migration script
 */

module.exports = {
	up: async function up(adapter) {
		await adapter.createEntity("Subject", {
			  "id": {
				  "type": "Number"
				, "length": 11
				, "primary": true
				, "autoIncrement": true
			}
			, "name": {
				  "type": "String"
				, "length": 100
			}
			, "active": {
				  "type": "Boolean"
			}
		});

		await adapter.createEntity("Student", {
			  "id": {
				  "type": "String"
				, "length": 37
				, "primary": true
			}
			, "name": {
				  "type": "String"
				, "length": 100
			}
			, "teacherId": {
				  "type": "Number"
				, "length": 11
			}
		});

		await adapter.createEntity("Teacher", {
			  "id": {
				  "type": "Number"
				, "length": 11
				, "primary": true
				, "autoIncrement": true
			}
			, "firstName": {
				  "type": "String"
				, "length": 50
			}
			, "lastName": {
				  "type": "String"
				, "length": 50
			}
		});

		await adapter.addForeignKey("Student", "teacherId", "Teacher", "fk_Student_teacherId_Teacher_id");
	}
};