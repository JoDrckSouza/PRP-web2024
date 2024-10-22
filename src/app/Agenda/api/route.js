export async function GET() {
  const events = [
    { date: '2024-10-24', type: 'vacina', description: 'Gripe canina', color: 'red', tomou: true },
    { date: '2024-10-17', type: 'vermifugacao', description: 'Vermifugação 3kg', color: 'green', tomou:true },
    { date: '2024-01-19', type: 'vermifugacao', description: 'Vermifugação 4kg', color: 'blue' },
    { date: '2024-01-31', type: 'visita', description: 'Visita', color: 'yellow' },
  ];

  return Response.json(events);  // Retorna a lista de eventos como JSON
}
