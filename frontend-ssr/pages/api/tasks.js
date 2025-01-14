export default function handler(req, res) {
  const tasks = [
    {
      id: 1,
      title: "Sample Task 1",
      description: "Description 1",
      examples: "Examples 1",
      difficulty: "Easy",
      tags: "tag1",
    },
    {
      id: 2,
      title: "Sample Task 2",
      description: "Description 2",
      examples: "Examples 2",
      difficulty: "Medium",
      tags: "tag2",
    },
  ];
  res.status(200).json(tasks);
}
