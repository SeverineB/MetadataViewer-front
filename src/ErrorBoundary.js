/* eslint-disable no-console */
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: '',
    };
  }

  // update state to render fallback UI if error
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <p>Une erreur est survenue</p>
          <button
            type="button"
            onClick={() => {
              window.location.reload();
            }}
          >Recharger la page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
