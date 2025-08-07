/*
 * ProfileTabs component. Manages the tabbed interface for the profile page.
 * Personal Info and Vision tabs contain simple forms; others are placeholders.
 */

'use client';

import { useState } from 'react';

interface ProfileTabsProps {
  // Optionally accept initial data when integrating with Supabase.
}

export default function ProfileTabs(_props: ProfileTabsProps) {
  const tabs = [
    'Personal Info',
    'Vision',
    'Values',
    'Inner Boardroom',
    'Advisors',
    'Knowledge',
  ];
  const [activeTab, setActiveTab] = useState('Personal Info');

  return (
    <div>
      <div className="flex space-x-4 border-b border-accent-3 mb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 whitespace-nowrap ${
              activeTab === tab
                ? 'border-b-2 border-accent-3 text-foreground font-semibold'
                : 'text-accent-4'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {activeTab === 'Personal Info' && <PersonalInfoForm />}
        {activeTab === 'Vision' && <VisionForm />}
        {['Values', 'Inner Boardroom', 'Advisors', 'Knowledge'].includes(
          activeTab
        ) && <Placeholder tab={activeTab} />}
      </div>
    </div>
  );
}

function PersonalInfoForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm mb-1" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full p-3 rounded-lg bg-accent-2 text-foreground focus:outline-none"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className="block text-sm mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-3 rounded-lg bg-accent-2 text-foreground focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <button
        type="submit"
        className="bg-accent-3 text-background px-4 py-2 rounded-lg shadow-md hover:opacity-90"
      >
        Save
      </button>
    </form>
  );
}

function VisionForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm mb-1" htmlFor="vision">
          Vision Statement
        </label>
        <textarea
          id="vision"
          className="w-full p-3 h-32 rounded-lg bg-accent-2 text-foreground focus:outline-none"
          placeholder="Describe your vision..."
        />
      </div>
      <button
        type="submit"
        className="bg-accent-3 text-background px-4 py-2 rounded-lg shadow-md hover:opacity-90"
      >
        Save
      </button>
    </form>
  );
}

function Placeholder({ tab }: { tab: string }) {
  return (
    <div className="p-4 rounded-lg bg-accent-2">
      <p className="text-accent-4">
        The <strong>{tab}</strong> section will be available soon.
      </p>
    </div>
  );
}