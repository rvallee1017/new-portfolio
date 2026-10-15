import Navbar from "../components/NavBar";
import Education from "../components/Education";

export default function EducationPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <Education />
    </div>
  );
}