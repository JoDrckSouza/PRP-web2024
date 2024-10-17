export default function handler(req, res) {
  const events = [
    { date: '2024-01-10', type: 'vacina', description: 'Gripe canina', color: 'red' },
    { date: '2024-01-17', type: 'vermifugacao', description: 'Vermifugação 3kg', color: 'green' },
    { date: '2024-01-19', type: 'vermifugacao', description: 'Vermifugação 4kg', color: 'blue' },
    { date: '2024-01-31', type: 'visita', description: 'Visita', color: 'yellow' },
  ];

  res.status(200).json(events);  // Retorna a lista de eventos como JSON
}
