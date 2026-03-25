import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Profile</h1>

        <img
          src={session.user?.image}
          alt="Profile"
          width="100"
          height="100"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />

        <p><strong>Name:</strong> {session.user?.name}</p>
        <p><strong>Email:</strong> {session.user?.email}</p>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button type="submit" style={styles.button}>
            Logout
          </button>
        </form>
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
    width: "400px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "crimson",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
};