const students = [
  { id: 1, name: "Khoa Nguyen" },
  { id: 2, name: "My Tran" },
  { id: 3, name: "Phong Le" },
  { id: 4, name: "Yen Vo" },
  { id: 5, name: "Bao Pham" },
];

const answerKey = [
  { question: 1, correctAnswer: "A", point: 2 },
  { question: 2, correctAnswer: "C", point: 1 },
  { question: 3, correctAnswer: "B", point: 3 },
  { question: 4, correctAnswer: "D", point: 2 },
  { question: 5, correctAnswer: "A", point: 2 },
];

const submissions = [
  {
    studentId: 1,
    submittedAt: "2026-07-10T08:00:00",
    answers: [
      { question: 1, answer: "A" },
      { question: 2, answer: "C" },
      { question: 3, answer: "B" },
      { question: 4, answer: "A" },
      { question: 5, answer: "A" },
    ],
  },
  {
    studentId: 2,
    submittedAt: "2026-07-10T08:05:00",
    answers: [
      { question: 1, answer: "A" },
      { question: 2, answer: "B" },
      { question: 3, answer: "B" },
      { question: 4, answer: "D" },
      { question: 5, answer: "C" },
    ],
  },
  {
    studentId: 3,
    submittedAt: "2026-07-10T07:58:00",
    answers: [
      { question: 1, answer: "A" },
      { question: 2, answer: "C" },
      { question: 3, answer: "B" },
      { question: 4, answer: "D" },
      { question: 5, answer: "A" },
    ],
  },
  {
    studentId: 4,
    submittedAt: "2026-07-10T08:02:00",
    answers: [
      { question: 1, answer: "B" },
      { question: 2, answer: "C" },
    ],
  },
  {
    studentId: 5,
    submittedAt: "2026-07-10T08:01:00",
    answers: [
      { question: 1, answer: "A" },
      { question: 2, answer: "C" },
      { question: 3, answer: "B" },
      { question: 4, answer: "D" },
      { question: 5, answer: "A" },
    ],
  },
];

function gradeExam(students, answerKey, submissions) {
  const result = submissions.map((submission) => {
    const student = students.find(
      (student) => student.id === submission.studentId);
    let score = 0;
    let correctCount = 0;
    const wrongQuestion = [];

    answerKey.forEach((key) => {
      const studentAnswer = submission.answers.find((item) => {
        return item.question === key.question;
      });

      if (studentAnswer?.answer === key.correctAnswer) {
        score += key.point;
        correctCount += 1;
      } else {
        wrongQuestion.push(key.question);
      }
    });

    return {
      id: student.id,
      name: student.name,
      score: score,
      correctCount: correctCount,
      wrongQuestion: wrongQuestion,
      submittedAt: submission.submittedAt,
    };
  });

  result.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    return new Date(a.submittedAt) - new Date(b.submittedAt);
  });

  return finalResult = result.map((student, index) => ({
    id: student.id,
    name: student.name,
    score: student.score,
    correctCount: student.correctCount,
    wrongQuestion: student.wrongQuestion,
    rank: index + 1,
  }));
}

const result = gradeExam(students, answerKey, submissions)

console.log(result);
