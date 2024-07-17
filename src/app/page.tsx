import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Typography from "@/components/Typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <Navbar />
      <div
        className="main-content container"
      >
        <Card
          className="rounded-xl px-12"
          mtContent="What is this What is this What is this What is this"
          mtPosition="horizontal"
          movingText={true}
          >
            <Typography>
              Hello! I go by...
            </Typography>
            <Typography
              variant="h2"
              weight="bold"
              >
              Rifqi Akhmad Maulana
            </Typography>
            <Typography
              variant="bt"
              weight="semibold"
            >
              and I'm a software engineer, Welcome aboard to my website!
            </Typography>
        </Card>
      </div>
    </main>
  );
}
