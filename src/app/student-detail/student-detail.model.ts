import { StudentContact } from "./student-contact.model";

export class StudentDetail {
    constructor(
        public name: string,
        public dob: string,
        public yoa: string,
        public contact: StudentContact) {
    }
}