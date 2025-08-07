import { RocketIcon, UsersIcon, MessageSquareIcon } from 'lucide-react';

export default function DashboardPage() {
  const cards = [
    {
      title: 'Overview',
      description: 'See a snapshot of your tasks and progress.',
      icon: <RocketIcon className="w-6 h-6" />,
    },
    {
      title: 'Chat History',
      description: 'Review your recent conversations.',
      icon: <MessageSquareIcon className="w-6 h-6" />,
    },
    {
      title: 'Profile Completion',
      description: 'Update your personal information and vision.',
      icon: <UsersIcon className="w-6 h-6" />,
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-accent-2 rounded-xl p-6 text-foreground shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="bg-accent-3 rounded-md p-2 mr-3 text-background">
                {card.icon}
              </div>
              <h2 className="text-xl font-bold">{card.title}</h2>
            </div>
            <p className="text-sm text-accent-4">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}