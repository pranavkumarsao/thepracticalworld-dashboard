import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';

interface AuthProps {
  onAuthSuccess: () => void;
}

export function Auth({ onAuthSuccess }: AuthProps) {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth success
    setTimeout(() => {
      onAuthSuccess();
    }, 500);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setResetSent(true);
    setTimeout(() => {
      setResetSent(false);
      setMode('login');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] relative overflow-hidden flex items-center justify-center p-4">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo/Brand */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-white/20 shadow-xl mb-4 lg:mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10">
              <circle cx="12" cy="8" r="2" fill="white"/>
              <path d="M6 12C6 10 8 8 12 8C16 8 18 10 18 12C18 14 16 16 12 16C8 16 6 14 6 12Z" fill="white"/>
            </svg>
          </div>
          <h1 className="text-white text-2xl lg:text-3xl mb-2">The Practical World</h1>
          <p className="text-white/60 text-sm lg:text-base">Premium Learning Portal</p>
        </div>

        {/* Auth Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/10 shadow-2xl">
          {mode === 'forgot' ? (
            // Forgot Password
            <div>
              <div className="text-center mb-6 lg:mb-8">
                <h2 className="text-white text-xl lg:text-2xl mb-2">Reset Password</h2>
                <p className="text-white/60 text-sm lg:text-base">Enter your email to receive reset instructions</p>
              </div>

              {resetSent ? (
                <div className="text-center py-8 lg:py-12">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-emerald-500/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8 lg:w-10 lg:h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-white text-lg lg:text-xl mb-2">Check your email</h3>
                  <p className="text-white/60 text-sm lg:text-base">We've sent password reset instructions to your email</p>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className="space-y-4 lg:space-y-5">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 lg:py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/40 backdrop-blur-sm"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 lg:py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/15 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    Send Reset Link
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="w-full text-white/60 hover:text-white text-sm transition-colors"
                  >
                    Back to Login
                  </button>
                </form>
              )}
            </div>
          ) : (
            // Login/Signup
            <div>
              {/* Toggle Tabs */}
              <div className="flex gap-2 p-1 bg-white/5 backdrop-blur-sm rounded-xl mb-6 lg:mb-8 border border-white/10">
                <button
                  onClick={() => setMode('login')}
                  className={`flex-1 py-2.5 lg:py-3 rounded-lg text-sm lg:text-base transition-all ${
                    mode === 'login'
                      ? 'bg-white/10 text-white shadow-lg'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setMode('signup')}
                  className={`flex-1 py-2.5 lg:py-3 rounded-lg text-sm lg:text-base transition-all ${
                    mode === 'signup'
                      ? 'bg-white/10 text-white shadow-lg'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                {mode === 'signup' && (
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 lg:py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/40 backdrop-blur-sm"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-white/80 text-sm mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 lg:py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/40 backdrop-blur-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-3 lg:py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/40 backdrop-blur-sm"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {mode === 'login' && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-white" />
                      <span className="text-white/60">Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setMode('forgot')}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                {mode === 'signup' && (
                  <label className="flex items-start gap-2.5 cursor-pointer text-sm">
                    <input type="checkbox" className="w-4 h-4 mt-0.5 accent-white flex-shrink-0" required />
                    <span className="text-white/60">
                      I agree to the <a href="#" className="text-white hover:underline">Terms of Service</a> and <a href="#" className="text-white hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                )}

                <button
                  type="submit"
                  className="w-full py-3 lg:py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/15 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  {mode === 'login' ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6 lg:my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/5 text-white/60 backdrop-blur-sm">or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <button className="py-3 lg:py-3.5 px-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2 text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button className="py-3 lg:py-3.5 px-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2 text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="mt-6 lg:mt-8 text-center text-sm text-white/60">
          <p>
            Need help? <a href="#" className="text-white hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}
