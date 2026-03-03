import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: unknown }
> {
  state = { error: null as unknown };
  static getDerivedStateFromError(error: unknown) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: "2rem",
            fontFamily: "system-ui, sans-serif",
            maxWidth: "600px",
            margin: "2rem auto",
            background: "#1a1a1a",
            color: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ color: "#f87171" }}>Something went wrong</h2>
          <pre style={{ overflow: "auto", fontSize: "12px" }}>
            {this.state.error instanceof Error
              ? this.state.error.message
              : String(this.state.error)}
          </pre>
          <p style={{ marginTop: "1rem", fontSize: "14px" }}>
            If the page was blank before this, check: repo <strong>Settings →
            Pages</strong> and set <strong>Source</strong> to{" "}
            <strong>GitHub Actions</strong>, then re-run the workflow.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");
createRoot(root).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
