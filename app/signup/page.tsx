'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Account created! Check your email to verify.');
      router.push('/login');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <form onSubmit={handleSignup} className="space-y-6 bg-accent-2 p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>

        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="password">Password</label>
          <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Creating Account...' : 'Create Account'}
        </Button>

        <div className="text-sm text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="underline hover:text-primary">
            Sign in here
          </a>
        </div>
      </form>
    </main>
  );
}
