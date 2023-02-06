import * as React from "react";

interface Props {
  children?: React.ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public state: State = {
    hasError: true
  };

  public static getDerivedStateFromError (error: Error): State {
    console.error(error);
    return { hasError: true };
  }

  public componentDidCatch (error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render (): React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
