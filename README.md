**User Story**

As an administrator, I want to add, edit, and delete student records so that the student database is always up to date.

**Acceptance Criteria**

**Add Student Record:**

- Form Fields: The add student form should include fields for the student's first name, last name, date of birth, email and grade

- Validation: All required fields must be completed before the form can be submitted. The form should display an error message for any missing or incorrectly formatted fields.

- Confirmation: Upon successful addition, the system should display a confirmation message and update the student database.

- Database Update: The new student record should be saved in the database and be retrievable by the student ID.


**Edit Student Record:**

- Search Functionality: The system should allow administrators to edit a student record by student ID.

- Edit Form: The edit form should pre-populate with the existing details of the selected student.

- Validation: All required fields must be validated before the form can be submitted.

- Confirmation: Upon successful editing, the system should display a confirmation message and update the student database.

- Database Update: The edited student record should be saved in the database.

**Delete Student Record:**

- Search Functionality: The system should allow administrators to delete a student record by student ID

- Deletion Confirmation: Upon confirmation, the system should display a message indicating that the student record has been successfully deleted.

- Database Update: The student record should be removed from the database and no longer retrievable.