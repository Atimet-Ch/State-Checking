    // List / Array example
    let students = ["Alice", "Bob", "Charlie"];
    
    // Add a student
    students.push("David");
    
    // Remove a student
    students.splice(students.indexOf("Bob"), 1);
    
    // Update a student
    students[students.indexOf("Charlie")] = "Eve";
    
    console.log(students); // Output: ["Alice", "Eve", "David"]

    // Dictionary / Object example
    let studentInfo = {
        name: "Tom",
        age: 20,
        grade: "A"
    };
    
    // Update student information
    studentInfo.age = 21;
    studentInfo.grade = "A+";
    
    console.log(studentInfo); // Output: { name: "Tom", age: 21, grade: "A+" }

    // Tuple example (using array as JavaScript does not have native tuple)
    let studentTuple = ["Tom", 21, "A+"];
    console.log(studentTuple); // Output: ["Tom", 21, "A+"]

    // Set example
    let studentSet = new Set(["Alice", "Bob", "Charlie", "Alice"]);
    studentSet.add("David");
    studentSet.delete("Bob");
    console.log(studentSet); // Output: Set { "Alice", "Charlie", "David" }