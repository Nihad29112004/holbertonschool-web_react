import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  // Komponentin adını təyin edirik (həm funksiya, həm sinif üçün)
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class WithLogging extends Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // HOC-un adını testin gözlədiyi formatda təyin edirik
  WithLogging.displayName = `WithLogging(${name})`;

  return WithLogging;
};

export default WithLogging;