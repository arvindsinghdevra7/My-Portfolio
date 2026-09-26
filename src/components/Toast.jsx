import React from 'react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          <i
            className={`fa-solid ${toast.icon || 'fa-circle-check'}`}
            style={{ color: 'var(--accent-cyan)' }}
          ></i>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
