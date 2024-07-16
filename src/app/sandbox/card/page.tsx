import Card from "@/components/Card";
import Typography from "@/components/Typography";

export default function CardPage() {
    return (
        <div
            className="p-12"
        >
            <Card
                className="rounded-xl px-12"
                mtContent="What is this What is this What is this What is this"
                mtPosition="horizontal"
                movingText={true}
            >
                <Typography>
                    Hello! My Name is...
                </Typography>
                <Typography
                    variant="h2"
                    weight="bold"
                >
                    Rifqi Akhmad Maulana
                </Typography>
            </Card>
        </div>
    )
}