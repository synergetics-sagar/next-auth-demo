"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Login</h1>
        <p>Sign in to continue</p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
          style={styles.button}
        >
          Continue with Google
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/profile" })}
          style={styles.button}
        >
          Continue with GitHub
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  button: {
    display: "block",
    width: "100%",
    marginTop: "15px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#111",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
};