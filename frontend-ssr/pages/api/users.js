export default function handler(req, res) {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", rating: 5 },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", rating: 4 },
  ];
  res.status(200).json(users);
}
