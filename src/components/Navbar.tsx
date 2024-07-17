import Link from "next/link";
import Typography from "./Typography";

export default function Navbar() {
    return (
        <div
            className="w-screen bg-slate-500 h-16"
        >
            <div className="container flex justify-between mx-auto">
                <div>
                    <Typography>
                        Hello
                    </Typography>
                </div>
                <div>
                    <Link
                        href={'#'}
                    >
                        This
                    </Link>
                    <Link
                        href={'#'}
                    >
                        This
                    </Link>
                    <Link
                        href={'#'}
                    >
                        This
                    </Link>
                </div>
            </div>
        </div>
    )
}