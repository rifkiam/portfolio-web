import Typography from "./Typography";
import clsxm from "@/lib/clsxm";

type CardProps<T extends React.ElementType> = {
    wireframed?: boolean;
    className?: string;
    movingText?: boolean;
    mtContent?: string;
    mtPosition?: 'vertical' | 'horizontal';
    mtIdx?: 0 | 1 | 'both'
    bgColor?: string;
    children: React.ReactNode;
}

export default function Card<T extends React.ElementType>({
    wireframed = false,
    className,
    movingText = false,
    mtContent,
    mtPosition = 'horizontal',
    mtIdx,
    bgColor = 'bg-slate-200',
    children
}: CardProps<T> &
    Omit<React.ComponentProps<T>, keyof CardProps<T>>) {

    return (
        <div
            className={clsxm(
                "max-w-full w-fit px-12 py-12",
                bgColor
                ,"relative overflow-hidden",
                className,
                wireframed && "border-2 border-dashed"
            )}
        >
            {mtContent && (mtIdx === 0 || mtIdx === 'both') ? 
                <Typography
                    className={clsxm(
                        'absolute whitespace-nowrap box-content',
                        mtPosition === 'horizontal' ? 'top-2 w-full' + (movingText ? ' animate-ticker-horizontal-up' : '') : 'left-8 transform rotate-90 h-full origin-top-left' + (movingText ? ' animate-ticker-vertical-left' : ''),
                    )}
                    variant="c1"
                >
                    {mtContent}
                </Typography>
            :
                ''
            }

            {children}

            {mtContent && (mtIdx === 1 || mtIdx === 'both')? 
                <Typography
                    className={clsxm(
                        'absolute whitespace-nowrap box-content',
                        mtPosition === 'horizontal' ? 'bottom-2 w-full' + (movingText ? ' animate-ticker-horizontal-down' : '') : '-bottom-20 right-3 transform -rotate-90 h-full origin-top-right' + (movingText ? ' animate-ticker-vertical-right' : ''),
                    )}
                    variant="c1"
                >
                    {mtContent}
                </Typography>
            :
                ''
            }
        </div>
    )
}