/*
 * ProfileTabs component. Manages the tabbed interface for the profile page.
 * Personal Info and Vision tabs contain simple forms; others are placeholders.
 */

'use client';

import { useState, useEffect } from 'react';

import { useEffect } from 'react';
import { supabase } from '../../lib/supabase';

interface ProfileTabsProps {
  user: any;
}

export default function ProfileTabs({ user }: ProfileTabsProps) {
  const tabs = [
    'Personal Info',
    'Vision',
    'Values',
    'Inner Boardroom',
    'Advisors',
    'Knowledge',
  ];
  const [activeTab, setActiveTab] = useState('Personal Info');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [vision, setVision] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      if (!user) return;
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      if (!error && data) {
        setName(data.name || '');
        setEmail(data.email || '');
        setVision(data.vision || '');
      }
      setLoading(false);
    };
    loadProfile();
  }, [user]);

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
        {loading && <p>Loading profile...</p>}
        {!loading && activeTab === 'Personal Info' && (
          <PersonalInfoForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            user={user}
          />
        )}
        {!loading && activeTab === 'Vision' && (
          <VisionForm
            vision={vision}
            setVision={setVision}
            user={user}
          />
        )}
        {!loading &&
          ['Values', 'Inner Boardroom', 'Advisors', 'Knowledge'].includes(
            activeTab
          ) && <Placeholder tab={activeTab} />}
      </div>
    </div>
  );
}

function PersonalInfoForm({
  name,
  setName,
  email,
  setEmail,
  user,
}: {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  user: any;
}) {
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    await supabase
      .from('profiles')
      .upsert({ id: user.id, name, email }, { onConflict: 'id' });
    alert('Profile saved');
  };
  return (
    <form onSubmit={handleSave} className="space-y-4">
      <div>
        <label className="block text-sm mb-1" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full p-3 rounded-lg bg-accent-2 text-foreground focus:outline-none"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

function VisionForm({
  vision,
  setVision,
  user,
}: {
  vision: string;
  setVision: (val: string) => void;
  user: any;
}) {
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    await supabase
      .from('profiles')
      .upsert({ id: user.id, vision }, { onConflict: 'id' });
    alert('Vision saved');
  };
  return (
    <form onSubmit={handleSave} className="space-y-4">
      <div>
        <label className="block text-sm mb-1" htmlFor="vision">
          Vision Statement
        </label>
        <textarea
          id="vision"
          className="w-full p-3 h-32 rounded-lg bg-accent-2 text-foreground focus:outline-none"
          placeholder="Describe your vision..."
          value={vision}
          onChange={(e) => setVision(e.target.value)}
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