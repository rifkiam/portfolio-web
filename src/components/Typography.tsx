import clsxm from '@/lib/clsxm';

export enum TypographyVariant {
  'c2',
  'c1',
  'p',
  'bt',
  't',
  'h6',
  'h5',
  'h4',
  'h3',
  'h2',
  'h1',
}

export enum TypographyColor {
  'black',
  'white',
  'red',
  'blue',
}

enum FontWeight {
  'regular',
  'semibold',
  'bold',
}

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  weight?: keyof typeof FontWeight;
  color?: keyof typeof TypographyColor;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  children,
  weight = 'regular',
  className,
  color = 'black',
  variant = 'p',
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || 'p';
  return (
    <Component
      className={clsxm(
        // *=============== Font Weight ==================
        [
          weight === 'regular' && 'font-normal',
          weight === 'semibold' && 'font-semibold',
          weight === 'bold' && 'font-bold',
        ],

        // *=============== Font Variants ==================
        [
          variant === 'c2' && ['text-[12px] leading-[18px]'],
          variant === 'c1' && ['text-[14px] leading-[21px]'],
          variant === 'p' && ['text-[16px] leading-[24px]'],
          variant === 'bt' && ['text-[18px] leading-[27px]'],
          variant === 't' && ['text-[20px] leading-[30px]'],
          variant === 'h6' && ['text-[24px] leading-[30px]'],
          variant === 'h5' && ['text-[32px] leading-[48px]'],
          variant === 'h4' && ['text-[48px] leading-[72px]'],
          variant === 'h3' && ['text-[64px] leading-[96px]'],
          variant === 'h2' && ['text-[72px] leading-[108px]'],
          variant === 'h1' && ['text-[80px] leading-[120px]'],
        ],

        // *=============== Font Color ==================
        [
          color === 'black' && ['text-tertiary-700'],
          color === 'white' && ['text-neutral-0'],
          color === 'red' && ['text-danger-700'],
          color === 'blue' && ['text-primary-600'],
        ],

        'font-poppins',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
