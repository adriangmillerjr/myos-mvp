'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface Profile {
  user_name: string;
  role: string;
  industry: string;
  tone: string;
  bio: string;
  mount_everest: {
    vision_statement: string;
    why_it_matters: string;
    purpose_statement: string;
  };
  non_negotiables: string[];
  inner_boardroom: {
    guide: string;
    operator: string;
    coach: string;
    editor: string;
    enforcer: string;
    archetype: string;
  };
  advisors_guides: {
    leadership: string;
    empowerment: string;
    offers: string;
    operations: string;
    marketing: string;
    mindset: string;
    systems: string;
  };
  knowledge_base: {
    drive_folder_url: string;
    workspace_notes: string;
  };
}

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [profile, setProfile] = useState<Profile>({
    user_name: '',
    role: '',
    industry: '',
    tone: '',
    bio: '',
    mount_everest: { vision_statement: '', why_it_matters: '', purpose_statement: '' },
    non_negotiables: [],
    inner_boardroom: { guide: '', operator: '', coach: '', editor: '', enforcer: '', archetype: '' },
    advisors_guides: { leadership: '', empowerment: '', offers: '', operations: '', marketing: '', mindset: '', systems: '' },
    knowledge_base: { drive_folder_url: '', workspace_notes: '' },
  });

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        const { data, error } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();
        if (!error && data) {
          setProfile({
            user_name: data.user_name || '',
            role: data.role || '',
            industry: data.industry || '',
            tone: data.tone || '',
            bio: data.bio || '',
            mount_everest: data.mount_everest || { vision_statement: '', why_it_matters: '', purpose_statement: '' },
            non_negotiables: data.non_negotiables || [],
            inner_boardroom: data.inner_boardroom || { guide: '', operator: '', coach: '', editor: '', enforcer: '', archetype: '' },
            advisors_guides: data.advisors_guides || { leadership: '', empowerment: '', offers: '', operations: '', marketing: '', mindset: '', systems: '' },
            knowledge_base: data.knowledge_base || { drive_folder_url: '', workspace_notes: '' },
          });
        }
      }
      setIsLoading(false);
    };
    load();
  }, []);

  const handleSave = async () => {
    if (!user) return;
    setIsSaving(true);
    const { error } = await supabase.from('user_profiles').upsert({
      user_id: user.id,
      user_name: profile.user_name,
      role: profile.role,
      industry: profile.industry,
      tone: profile.tone,
      bio: profile.bio,
      mount_everest: profile.mount_everest,
      non_negotiables: profile.non_negotiables,
      inner_boardroom: profile.inner_boardroom,
      advisors_guides: profile.advisors_guides,
      knowledge_base: profile.knowledge_base,
      updated_at: new Date().toISOString(),
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Profile updated successfully');
    }
    setIsSaving(false);
  };

  if (isLoading) {
    return <div className="p-6">Loading profile...</div>;
  }

  const renderTabPanel = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                  value={profile.user_name}
                  onChange={(e) => setProfile({ ...profile, user_name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Role</label>
                <input
                  className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                  value={profile.role}
                  onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Industry</label>
                <input
                  className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                  value={profile.industry}
                  onChange={(e) => setProfile({ ...profile, industry: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Tone</label>
                <input
                  className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                  value={profile.tone}
                  onChange={(e) => setProfile({ ...profile, tone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Bio</label>
              <textarea
                className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                rows={4}
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              />
            </div>
          </div>
        );
      case 'vision':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Vision Statement</label>
              <textarea
                className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                rows={3}
                value={profile.mount_everest.vision_statement}
                onChange={(e) => setProfile({ ...profile, mount_everest: { ...profile.mount_everest, vision_statement: e.target.value } })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Why It Matters</label>
              <textarea
                className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                rows={3}
                value={profile.mount_everest.why_it_matters}
                onChange={(e) => setProfile({ ...profile, mount_everest: { ...profile.mount_everest, why_it_matters: e.target.value } })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Purpose Statement</label>
              <textarea
                className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                rows={3}
                value={profile.mount_everest.purpose_statement}
                onChange={(e) => setProfile({ ...profile, mount_everest: { ...profile.mount_everest, purpose_statement: e.target.value } })}
              />
            </div>
          </div>
        );
      case 'values':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Non Negotiable Values (comma-separated)</label>
              <input
                className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                value={profile.non_negotiables.join(', ')}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    non_negotiables: e.target.value.split(',').map((v) => v.trim()).filter(Boolean),
                  })
                }
              />
            </div>
          </div>
        );
      case 'boardroom':
        return (
          <div className="space-y-4">
            {Object.entries(profile.inner_boardroom).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium capitalize">{key}</label>
                <input
                  className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                  value={value as string}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      inner_boardroom: {
                        ...profile.inner_boardroom,
                        [key]: e.target.value,
                      },
                    })
                  }
                />
              </div>
            ))}
          </div>
        );
      case 'advisors':
        return (
          <div className="space-y-4">
            {Object.entries(profile.advisors_guides).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium capitalize">{key.replace('_', ' ')}</label>
                <textarea
                  className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                  rows={2}
                  value={value as string}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      advisors_guides: {
                        ...profile.advisors_guides,
                        [key]: e.target.value,
                      },
                    })
                  }
                />
              </div>
            ))}
          </div>
        );
      case 'knowledge':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Drive Folder URL</label>
              <input
                className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                value={profile.knowledge_base.drive_folder_url}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    knowledge_base: {
                      ...profile.knowledge_base,
                      drive_folder_url: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Workspace Notes</label>
              <textarea
                className="mt-1 w-full rounded bg-background-light border border-gray-700 p-2"
                rows={3}
                value={profile.knowledge_base.workspace_notes}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    knowledge_base: {
                      ...profile.knowledge_base,
                      workspace_notes: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'vision', label: 'Vision' },
    { id: 'values', label: 'Values' },
    { id: 'boardroom', label: 'Boardroom' },
    { id: 'advisors', label: 'Advisors' },
    { id: 'knowledge', label: 'Knowledge' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Profile</h1>
      {/* Tab navigation */}
      <div className="flex overflow-x-auto border-b border-white/10 pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mr-6 pb-2 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-primary-500 text-primary-500'
                : 'border-b-2 border-transparent text-white/70 hover:text-primary-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {/* Panel container with subtle card styling */}
        <div className="bg-background-light/60 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
          {renderTabPanel()}
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}