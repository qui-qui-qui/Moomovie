import React, { Component, ReactNode } from "react";
import { NotFoundPage } from "../pages/NotFoundPage";

interface MyErrorBoundaryProps {
    children: ReactNode;
}

interface MyErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<
    MyErrorBoundaryProps,
    MyErrorBoundaryState
> {
    constructor(props: MyErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error(error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <NotFoundPage />;
        }

        return children;
    }
}

export { ErrorBoundary };
