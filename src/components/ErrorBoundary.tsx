import { Component } from 'react';
import type React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error('Error en componente 3D:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#00ffff" wireframe opacity={0.5} transparent />
          </mesh>
        )
      );
    }

    return this.props.children;
  }
}

