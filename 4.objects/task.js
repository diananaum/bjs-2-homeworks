function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    return this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if ("marks" in this) {
        return this.marks.push(...marks);
    }

    return 0;
}

Student.prototype.getAverage = function () {
    if (!("marks" in this) || this.marks.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let mark of this.marks) {
        sum += mark;
    }

    let avrg = sum / this.marks.length;

    return avrg;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;

    return this.excluded = reason;
}