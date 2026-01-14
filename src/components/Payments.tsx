import { CreditCard, Download, Calendar, CheckCircle, Clock, TrendingUp, DollarSign, FileText } from 'lucide-react';
import { useState } from 'react';

const paymentStats = [
  { label: 'Total Spent', value: '$587', change: '+$49', icon: DollarSign },
  { label: 'This Month', value: '$49', change: '1 payment', icon: Calendar },
  { label: 'Transactions', value: '12', change: '+1', icon: TrendingUp },
];

const paymentHistory = [
  {
    id: 1,
    type: 'Subscription',
    description: 'Premium Plan - Monthly Subscription',
    amount: 49.00,
    date: 'January 5, 2026',
    status: 'Completed',
    method: 'Visa •••• 4242',
    invoice: 'INV-2026-001',
    webinar: null,
  },
  {
    id: 2,
    type: 'Subscription',
    description: 'Premium Plan - Monthly Subscription',
    amount: 49.00,
    date: 'December 5, 2025',
    status: 'Completed',
    method: 'Visa •••• 4242',
    invoice: 'INV-2025-012',
    webinar: null,
  },
  {
    id: 3,
    type: 'Workshop',
    description: 'Advanced React Patterns Workshop',
    amount: 99.00,
    date: 'November 20, 2025',
    status: 'Completed',
    method: 'Visa •••• 4242',
    invoice: 'INV-2025-011',
    webinar: 'Advanced React Patterns & Best Practices',
  },
  {
    id: 4,
    type: 'Subscription',
    description: 'Premium Plan - Monthly Subscription',
    amount: 49.00,
    date: 'November 5, 2025',
    status: 'Completed',
    method: 'Visa •••• 4242',
    invoice: 'INV-2025-010',
    webinar: null,
  },
  {
    id: 5,
    type: 'Workshop',
    description: 'Building Scalable APIs Masterclass',
    amount: 149.00,
    date: 'October 28, 2025',
    status: 'Completed',
    method: 'Visa •••• 4242',
    invoice: 'INV-2025-009',
    webinar: 'Building Scalable APIs with Node.js',
  },
];

const paymentMethods = [
  {
    id: 1,
    type: 'Visa',
    last4: '4242',
    expiry: '12/2027',
    isDefault: true,
  },
  {
    id: 2,
    type: 'Mastercard',
    last4: '5555',
    expiry: '09/2026',
    isDefault: false,
  },
];

export function Payments() {
  const [filter, setFilter] = useState<'all' | 'subscription' | 'workshop'>('all');

  const filteredPayments = paymentHistory.filter((payment) => {
    if (filter === 'all') return true;
    return payment.type.toLowerCase() === filter;
  });

  const handleDownloadInvoice = (invoiceId: string) => {
    console.log('Downloading invoice:', invoiceId);
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-white mb-2 text-2xl lg:text-3xl">Payments & Billing</h2>
        <p className="text-white/60 text-base lg:text-lg">Manage your payments, invoices, and billing information</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 lg:gap-6">
        {paymentStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 active:scale-95"
            >
              <div className="flex items-start justify-between mb-3 lg:mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <span className="text-emerald-400 text-xs lg:text-sm flex items-center gap-0.5 lg:gap-1 bg-emerald-500/10 px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-lg border border-emerald-500/20">
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl lg:text-3xl text-white mb-1">{stat.value}</div>
              <div className="text-xs lg:text-sm text-white/50">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Payment History */}
        <div className="lg:col-span-2 space-y-4 lg:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h3 className="text-white text-lg lg:text-xl">Payment History</h3>
            <div className="flex items-center gap-1.5 lg:gap-2 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl p-1 backdrop-blur-xl w-full sm:w-auto overflow-x-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-md lg:rounded-lg text-xs lg:text-sm transition-all whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-white/10 backdrop-blur-sm text-white shadow-lg border border-white/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('subscription')}
                className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-md lg:rounded-lg text-xs lg:text-sm transition-all whitespace-nowrap ${
                  filter === 'subscription'
                    ? 'bg-white/10 backdrop-blur-sm text-white shadow-lg border border-white/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Subscription
              </button>
              <button
                onClick={() => setFilter('workshop')}
                className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-md lg:rounded-lg text-xs lg:text-sm transition-all whitespace-nowrap ${
                  filter === 'workshop'
                    ? 'bg-white/10 backdrop-blur-sm text-white shadow-lg border border-white/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Workshops
              </button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 overflow-hidden">
            {filteredPayments.map((payment, index) => (
              <div
                key={payment.id}
                className={`p-4 lg:p-6 hover:bg-white/5 transition-all active:bg-white/10 group ${
                  index !== filteredPayments.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-2 lg:mb-3">
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2 flex-wrap">
                      <h4 className="text-white text-sm lg:text-base">{payment.description}</h4>
                      <span className={`px-2 lg:px-2.5 py-0.5 lg:py-1 text-xs rounded-full ${
                        payment.type === 'Subscription'
                          ? 'bg-white/5 border border-white/10 text-white/70'
                          : 'bg-violet-500/20 border border-violet-500/30 text-violet-400'
                      } backdrop-blur-sm`}>
                        {payment.type}
                      </span>
                    </div>
                    {payment.webinar && (
                      <p className="text-xs lg:text-sm text-white/50 mb-1.5 lg:mb-2">Related to: {payment.webinar}</p>
                    )}
                    <div className="flex items-center gap-2 lg:gap-4 text-xs lg:text-sm text-white/50 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                        {payment.date}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="hidden sm:inline">{payment.method}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                        {payment.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto">
                    <div className="text-xl lg:text-2xl text-white mb-1 lg:mb-2">${payment.amount.toFixed(2)}</div>
                    <button
                      onClick={() => handleDownloadInvoice(payment.invoice)}
                      className="flex items-center gap-2 px-3 py-1.5 text-xs lg:text-sm text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all border border-white/10"
                    >
                      <Download className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      {payment.invoice}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 lg:space-y-6">
          {/* Payment Methods */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-5 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <h3 className="text-white text-base lg:text-lg">Payment Methods</h3>
              <button className="text-white/60 hover:text-white text-sm">
                + Add
              </button>
            </div>

            <div className="space-y-2.5 lg:space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="relative p-3 lg:p-4 border border-white/10 rounded-lg lg:rounded-xl hover:border-white/20 transition-all group backdrop-blur-sm active:scale-95"
                >
                  {method.isDefault && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-white/5 border border-white/10 text-white/70 text-xs rounded backdrop-blur-sm">
                      Default
                    </div>
                  )}
                  <div className="flex items-start gap-2.5 lg:gap-3">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white mb-0.5 text-sm lg:text-base">{method.type} •••• {method.last4}</div>
                      <div className="text-xs lg:text-sm text-white/50">Expires {method.expiry}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Payment */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-5 lg:p-6 text-white shadow-xl border border-white/10">
            <div className="flex items-center gap-2.5 lg:gap-3 mb-3 lg:mb-4">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <h3 className="text-base lg:text-lg">Next Payment</h3>
            </div>
            <div className="space-y-2.5 lg:space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Amount</span>
                <span className="text-xl lg:text-2xl">$49.00</span>
              </div>
              <div className="flex items-center justify-between text-xs lg:text-sm">
                <span className="text-white/70">Billing Date</span>
                <span>February 5, 2026</span>
              </div>
              <div className="flex items-center justify-between text-xs lg:text-sm">
                <span className="text-white/70">Plan</span>
                <span>Premium Monthly</span>
              </div>
            </div>
            <button className="w-full mt-4 lg:mt-6 px-4 py-2.5 lg:py-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg lg:rounded-xl transition-all text-sm border border-white/20 active:scale-95">
              Manage Subscription
            </button>
          </div>

          {/* Download Invoices */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-5 lg:p-6 border border-white/10">
            <div className="flex items-center gap-2.5 lg:gap-3 mb-3 lg:mb-4">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
              </div>
              <h3 className="text-white text-base lg:text-lg">Invoices</h3>
            </div>
            <p className="text-xs lg:text-sm text-white/60 mb-3 lg:mb-4">
              Download all your invoices for accounting and tax purposes.
            </p>
            <button className="w-full px-4 py-2.5 lg:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15 hover:shadow-lg rounded-lg lg:rounded-xl transition-all text-sm flex items-center justify-center gap-2 active:scale-95">
              <Download className="w-4 h-4" />
              Download All Invoices
            </button>
          </div>

          {/* Billing Address */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-5 lg:p-6 border border-white/10">
            <h4 className="text-white mb-3 lg:mb-4 text-base lg:text-lg">Billing Address</h4>
            <div className="text-xs lg:text-sm text-white/60 space-y-1 mb-3 lg:mb-4">
              <p>Alex Johnson</p>
              <p>123 Main Street, Apt 4B</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
            <button className="w-full px-4 py-2 lg:py-2.5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg lg:rounded-xl transition-all text-sm active:scale-95">
              Update Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
