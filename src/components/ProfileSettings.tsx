import { Mail, Calendar, CreditCard, Bell, User, Shield, Key, Globe, LogOut } from 'lucide-react';
import { useState } from 'react';

export function ProfileSettings() {
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-white mb-2 text-2xl lg:text-3xl">Profile Settings</h2>
        <p className="text-white/60 text-base lg:text-lg">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-4 lg:space-y-6">
          {/* Account Information */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-5 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-2.5 lg:gap-3 mb-5 lg:mb-6">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                <User className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <h3 className="text-white text-lg lg:text-xl">Account Information</h3>
            </div>
            
            <div className="space-y-4 lg:space-y-5">
              <div>
                <label className="block text-sm text-white/60 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Alex Johnson"
                  className="w-full px-4 py-3 lg:py-3.5 border border-white/10 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent bg-white/5 text-white backdrop-blur-sm text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm text-white/60 mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue="alex.johnson@email.com"
                  className="w-full px-4 py-3 lg:py-3.5 border border-white/10 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent bg-white/5 text-white backdrop-blur-sm text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-3 lg:py-3.5 border border-white/10 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent bg-white/5 text-white backdrop-blur-sm text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Time Zone</label>
                  <select className="w-full px-4 py-3 lg:py-3.5 border border-white/10 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent bg-white/5 text-white backdrop-blur-sm text-sm">
                    <option>EST (UTC-5)</option>
                    <option>PST (UTC-8)</option>
                    <option>CST (UTC-6)</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="mt-5 lg:mt-6 w-full sm:w-auto px-6 py-3 lg:py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15 hover:shadow-lg rounded-lg lg:rounded-xl transition-all text-sm active:scale-95">
              Save Changes
            </button>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-5 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-2.5 lg:gap-3 mb-5 lg:mb-6">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg">
                <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
              </div>
              <h3 className="text-white text-lg lg:text-xl">Notification Preferences</h3>
            </div>
            
            <div className="space-y-2.5 lg:space-y-3">
              <label className="flex items-center justify-between p-4 lg:p-5 border border-white/10 rounded-lg lg:rounded-xl cursor-pointer hover:bg-white/5 transition-all active:scale-[0.98] group">
                <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white mb-0.5 text-sm lg:text-base">Email Reminders</div>
                    <div className="text-xs lg:text-sm text-white/50">Get notified 24 hours before webinars</div>
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-white flex-shrink-0 ml-2" />
              </label>

              <label className="flex items-center justify-between p-4 lg:p-5 border border-white/10 rounded-lg lg:rounded-xl cursor-pointer hover:bg-white/5 transition-all active:scale-[0.98] group">
                <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                    <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white mb-0.5 text-sm lg:text-base">New Recordings Available</div>
                    <div className="text-xs lg:text-sm text-white/50">Notify when webinar recordings are posted</div>
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-white flex-shrink-0 ml-2" />
              </label>

              <label className="flex items-center justify-between p-4 lg:p-5 border border-white/10 rounded-lg lg:rounded-xl cursor-pointer hover:bg-white/5 transition-all active:scale-[0.98] group">
                <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                    <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white mb-0.5 text-sm lg:text-base">Weekly Newsletter</div>
                    <div className="text-xs lg:text-sm text-white/50">Receive curated learning resources</div>
                  </div>
                </div>
                <input type="checkbox" className="w-5 h-5 accent-white flex-shrink-0 ml-2" />
              </label>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-5 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-2.5 lg:gap-3 mb-5 lg:mb-6">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-rose-500/10 border border-rose-500/30 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-rose-400" />
              </div>
              <h3 className="text-white text-lg lg:text-xl">Security</h3>
            </div>
            
            <div className="space-y-3 lg:space-y-4">
              <button className="w-full flex items-center justify-between p-4 lg:p-5 border border-white/10 rounded-lg lg:rounded-xl hover:bg-white/5 transition-all text-left active:scale-[0.98] group">
                <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                    <Key className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white mb-0.5 text-sm lg:text-base">Change Password</div>
                    <div className="text-xs lg:text-sm text-white/50">Last changed 3 months ago</div>
                  </div>
                </div>
                <span className="text-white/40 flex-shrink-0 ml-2">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 lg:p-5 border border-white/10 rounded-lg lg:rounded-xl hover:bg-white/5 transition-all text-left active:scale-[0.98] group">
                <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                    <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white mb-0.5 text-sm lg:text-base">Two-Factor Authentication</div>
                    <div className="text-xs lg:text-sm text-white/50">Add an extra layer of security</div>
                  </div>
                </div>
                <span className="px-2.5 lg:px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-xs lg:text-sm rounded-lg flex-shrink-0 ml-2">Disabled</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 lg:space-y-6">
          {/* Profile Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-6 lg:p-8 text-white shadow-xl border border-white/10">
            <div className="text-center mb-5 lg:mb-6">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 border-4 border-white/20">
                <span className="text-2xl lg:text-3xl">AJ</span>
              </div>
              <h3 className="text-lg lg:text-xl mb-1">Alex Johnson</h3>
              <p className="text-white/70 text-sm">Premium Member</p>
            </div>
            <div className="space-y-2.5 lg:space-y-3 pt-5 lg:pt-6 border-t border-white/20">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Member since</span>
                <span>Jan 2024</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Total webinars</span>
                <span>47</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Hours watched</span>
                <span>85.5h</span>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-5 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-2.5 lg:gap-3 mb-5 lg:mb-6">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-amber-500/10 border border-amber-500/30 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg">
                <CreditCard className="w-4 h-4 lg:w-5 lg:h-5 text-amber-400" />
              </div>
              <h3 className="text-white text-base lg:text-lg">Subscription</h3>
            </div>

            <div className="p-4 lg:p-5 bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl mb-3 lg:mb-4 border border-white/10">
              <div className="flex items-center justify-between mb-2 lg:mb-3">
                <div>
                  <div className="text-white mb-0.5 text-sm lg:text-base">Premium Plan</div>
                  <div className="text-xs lg:text-sm text-white/60">Unlimited access</div>
                </div>
                <div className="text-right">
                  <div className="text-xl lg:text-2xl text-white">$49</div>
                  <div className="text-xs text-white/50">per month</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs lg:text-sm text-white/60 mb-3 lg:mb-4">
              <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              <span>Renews Feb 5, 2026</span>
            </div>

            <button className="w-full px-4 py-2.5 lg:py-3 border border-white/20 text-white/70 hover:text-white hover:bg-white/5 rounded-lg lg:rounded-xl transition-all text-sm active:scale-95">
              Manage Subscription
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-5 lg:p-6 border border-white/10">
            <h4 className="text-white mb-3 lg:mb-4 text-base lg:text-lg">Quick Actions</h4>
            <div className="space-y-2">
              <button className="w-full px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm text-left active:scale-95">
                Download My Data
              </button>
              <button className="w-full px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm text-left active:scale-95">
                Privacy Settings
              </button>
              <button className="w-full px-4 py-2.5 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all text-sm text-left active:scale-95">
                Delete Account
              </button>
            </div>
          </div>

          {/* Sign Out on Mobile - only visible on mobile in profile section */}
          <div className="lg:hidden bg-rose-500/10 backdrop-blur-xl rounded-xl p-5 border border-rose-500/30">
            <button 
              onClick={() => setShowSignOutModal(true)}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 rounded-lg transition-all active:scale-95"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sign Out Confirmation Modal */}
      {showSignOutModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 max-w-sm w-full shadow-2xl">
            <h3 className="text-white text-xl mb-2">Sign Out</h3>
            <p className="text-white/60 text-sm mb-6">Are you sure you want to sign out of your account?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowSignOutModal(false)}
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all active:scale-95"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowSignOutModal(false);
                  window.location.reload(); // This will trigger sign out
                }}
                className="flex-1 px-4 py-2.5 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg hover:bg-rose-500/30 transition-all active:scale-95"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}