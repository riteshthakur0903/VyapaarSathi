import { clsx } from 'clsx'

// clsx not installed so use simple join
function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props
}) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    danger: 'btn-danger',
  }
  const sizes = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  }

  return (
    <button
      type={type}
      className={cn(variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  )
}

export function Card({ children, className = '', onClick }) {
  const base = 'card'
  if (onClick) {
    return (
      <div className={cn(base, 'cursor-pointer hover:shadow-card-md transition-shadow', className)} onClick={onClick}>
        {children}
      </div>
    )
  }
  return <div className={cn(base, className)}>{children}</div>
}

export function Badge({ children, variant = 'gray', className = '' }) {
  const variants = {
    green: 'badge-green',
    teal: 'badge-teal',
    yellow: 'badge-yellow',
    red: 'badge-red',
    gray: 'badge-gray',
    sample: 'badge-sample',
  }
  return (
    <span className={cn(variants[variant] || 'badge-gray', className)}>
      {children}
    </span>
  )
}

export function Input({
  label,
  error,
  hint,
  className = '',
  containerClassName = '',
  id,
  required,
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s/g, '-')
  return (
    <div className={cn('mb-4', containerClassName)}>
      {label && (
        <label htmlFor={inputId} className="label">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={cn('input', error && 'input-error', className)}
        {...props}
      />
      {hint && !error && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

export function Select({
  label,
  error,
  hint,
  options = [],
  containerClassName = '',
  id,
  required,
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s/g, '-')
  return (
    <div className={cn('mb-4', containerClassName)}>
      {label && (
        <label htmlFor={inputId} className="label">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        id={inputId}
        className={cn('input', error && 'input-error')}
        {...props}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {hint && !error && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

export function Textarea({
  label,
  error,
  hint,
  containerClassName = '',
  id,
  required,
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s/g, '-')
  return (
    <div className={cn('mb-4', containerClassName)}>
      {label && (
        <label htmlFor={inputId} className="label">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        rows={3}
        className={cn('input resize-none', error && 'input-error')}
        {...props}
      />
      {hint && !error && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

export function Toggle({ checked, onChange, label, description }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <div className="relative mt-0.5 flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={cn(
            'w-10 h-6 rounded-full transition-colors duration-200',
            checked ? 'bg-teal-600' : 'bg-gray-300'
          )}
        />
        <div
          className={cn(
            'absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200',
            checked ? 'translate-x-5' : 'translate-x-1'
          )}
        />
      </div>
      {(label || description) && (
        <div>
          {label && <p className="text-sm font-medium text-gray-700">{label}</p>}
          {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
        </div>
      )}
    </label>
  )
}

export function Modal({ open, onClose, title, children, size = 'md' }) {
  if (!open) return null
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={cn('relative w-full bg-white rounded-2xl shadow-2xl', sizes[size])}>
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-5 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

export function Alert({ type = 'info', children, className = '' }) {
  const types = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    sample: 'bg-amber-50 border-amber-200 text-amber-800',
  }
  const icons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌',
    sample: '📊',
  }
  return (
    <div className={cn('flex gap-3 p-4 rounded-xl border text-sm', types[type], className)}>
      <span className="flex-shrink-0">{icons[type]}</span>
      <div>{children}</div>
    </div>
  )
}

export function EmptyState({ icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="text-5xl mb-4">{icon || '📭'}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-500 mb-6 max-w-sm">{description}</p>}
      {action && action}
    </div>
  )
}

export function Skeleton({ className = '', ...props }) {
  return <div className={cn('skeleton', className)} {...props} />
}

export function ProgressBar({ value, max = 100, color = 'teal', className = '' }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  const colors = {
    teal: 'bg-teal-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    orange: 'bg-orange-500',
  }
  return (
    <div className={cn('w-full bg-gray-200 rounded-full h-2', className)}>
      <div
        className={cn('h-2 rounded-full transition-all duration-500', colors[color])}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex gap-1 p-1 bg-gray-100 rounded-xl w-full overflow-x-auto scrollbar-hide">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            activeTab === tab.id
              ? 'bg-white text-teal-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
          )}
        >
          {tab.icon && <span className="mr-2">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export function StatCard({ label, value, sub, color = 'teal', icon }) {
  const colors = {
    teal: 'text-teal-600 bg-teal-50',
    green: 'text-green-600 bg-green-50',
    red: 'text-red-600 bg-red-50',
    orange: 'text-orange-600 bg-orange-50',
    purple: 'text-purple-600 bg-purple-50',
    blue: 'text-blue-600 bg-blue-50',
  }
  return (
    <div className="card flex flex-col gap-1">
      {icon && (
        <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-2', colors[color])}>
          {icon}
        </div>
      )}
      <p className="text-xs text-gray-500 font-medium">{label}</p>
      <p className={cn('text-2xl font-bold', colors[color]?.split(' ')[0])}>{value}</p>
      {sub && <p className="text-xs text-gray-400">{sub}</p>}
    </div>
  )
}

export function RangeInput({ label, value, min, max, step = 1000, onChange, formatFn, className = '' }) {
  return (
    <div className={cn('mb-4', className)}>
      <div className="flex justify-between items-center mb-2">
        <label className="label mb-0">{label}</label>
        <span className="text-sm font-semibold text-teal-700">
          {formatFn ? formatFn(value) : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-teal-600"
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{formatFn ? formatFn(min) : min}</span>
        <span>{formatFn ? formatFn(max) : max}</span>
      </div>
    </div>
  )
}

export function SampleDataBadge({ note, lang = 'en' }) {
  const labels = {
    en: '📊 Sample Data',
    hi: '📊 नमूना डेटा',
    mr: '📊 नमुना डेटा',
  }
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-lg">
      <span className="text-xs font-medium text-amber-700">{labels[lang] || labels.en}</span>
      {note && (
        <div className="group relative">
          <button className="text-amber-500 hover:text-amber-700">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-60 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
            {note}
          </div>
        </div>
      )}
    </div>
  )
}
