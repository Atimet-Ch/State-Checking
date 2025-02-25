const subjects = ["CSI101", "CSI102", "CSI203", "CSI204", "CSI305"];
    const credits = 3;

    const container = document.getElementById("subjects");
    subjects.forEach(sub => {
      container.innerHTML += `<label>${sub}: <input type='number' id='${sub}' min='0' max='100'></label><br>`;
    });

    function calculateGPA() {
      let totalScore = 0;
      subjects.forEach(sub => {
        const score = parseFloat(document.getElementById(sub).value) || 0;
        totalScore += score * credits;
      });
      const gpa = totalScore / (subjects.length * credits);
      document.getElementById("result").textContent = `GPA: ${gpa.toFixed(2)}`;
    }