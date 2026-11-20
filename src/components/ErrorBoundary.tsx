import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error en la aplicación:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F9F8F6] text-[#171614] flex items-center justify-center px-6">
          <div className="max-w-md w-full border border-[#E2DFD8] bg-white p-8 text-center">
            <h1 className="font-serif text-2xl font-medium text-[#171614] mb-3">
              No se pudo mostrar esta vista
            </h1>
            <p className="text-sm text-[#5C5A55] leading-relaxed mb-6">
              Ocurrió un inconveniente inesperado al cargar el archivo visual.
              Puede recargar la página para continuar explorando la obra de Nilda Marsili.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 text-sm font-medium bg-[#1D4E89] text-white hover:bg-[#163B68] transition-colors cursor-pointer"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
