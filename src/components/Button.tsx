import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'danger',
  'white',
  'outline-primary',
  'outline-danger',
  'outline-white',
}

enum ButtonSize {
  'sm',
  'base',
  'lg',
}

type ButtonProps = {
  isLoading?: boolean;
  size?: keyof typeof ButtonSize;
  variant?: keyof typeof ButtonVariant;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  textClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      size = 'base',
      variant = 'primary',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      textClassName,
      ...props
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'button inline-flex w-fit items-center justify-center rounded-[15px]',
          'focus:warning-none',
          'transition-colors duration-100',

          //*=========== Size ===========
          [
            size === 'lg' && ['text-lg min-h-[51px] py-3 px-8'],
            size === 'base' && ['text-base min-h-[44px] py-2.5 px-[30px]'],
            size === 'sm' && ['text-sm min-h-[37px] py-2 px-7'],
          ],

          //*=========== Variants ===========
          [
            variant === 'primary' && [
              'text-neutral-0',
              'bg-primary-600',
              'hover:bg-primary-800 active:bg-primary-900 active:border-white active:text-neutral-0',
              // 'shadow-primary-100 hover:shadow-primary-200 hover:shadow-40 disabled:hover:shadow-primary-100',
              'disabled:bg-primary-400 disabled:brightness-90 disabled:hover:bg-primary-400',
            ],
            variant === 'danger' && [
              'text-neutral-0',
              'bg-danger-700',
              'hover:bg-danger-900 active:bg-danger-1000 active:border-white active:text-neutral-0',
              // 'shadow-danger-100 hover:shadow-danger-200 hover:shadow-40 disabled:hover:shadow-danger-100',
              'disabled:bg-danger-500 disabled:brightness-95 disabled:hover:bg-danger-500',
            ],
            variant === 'white' && [
              'text-tertiary-700',
              'bg-neutral-0',
              'active:border-tertiary-700 active:text-tertiary-700',
              'shadow-tertiary-700 hover:shadow-tertiary-800/5 hover:shadow-lg disabled:hover:shadow-tertiary-700',
              'disabled:bg-neutral-100 disabled:brightness-95',
            ],
            variant === 'outline-primary' && [
              'text-primary-600',
              'border-2 border-primary-600',
              'bg-white',
              'hover:border-primary-600 hover:bg-primary-500 hover:text-neutral-0',
              'active:border-primary-600 active:text-neutral-0',
              'disabled:bg-primary-400 disabled:brightness-90 disabled:hover:bg-transparent',
            ],
            variant === 'outline-danger' && [
              'text-danger-700',
              'border-2 border-danger-700',
              'bg-white',
              'hover:border-danger-700 hover:bg-danger-700 hover:text-neutral-0',
              'active:border-danger-700 active:neutral-0',
              // 'shadow-red-100 hover:shadow-red-200 hover:shadow-40 disabled:hover:shadow-red-100',
              'disabled:bg-danger-600 disabled:brightness-90 disabled:hover:bg-transparent',
            ],
            variant === 'outline-white' && [
              'text-neutral-0',
              'border-2 border-neutral-0',
              'bg-transparent',
              'hover:border-neutral-0 hover:bg-neutral-0 hover:text-tertiary-700',
              'active:border-none active:text-black',
              'shadow-tertiary-700 hover:shadow-tertiary-800 disabled:hover:shadow-tertiary-700',
              'disabled:bg-black-50 disabled:brightness-90 disabled:hover:bg-transparent',
            ],
          ],

          //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className,
        )}
        {...props}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              [
                ['primary', 'danger'].includes(variant) && 'text-white-500',
                ['warning', 'label'].includes(variant) && 'text-gray-500',
              ],
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}

        {/* Left Icon */}
        {LeftIcon && (
          <div
            className={clsxm([
              size === 'sm' && 'mr-[10px]',
              size === 'base' && 'mr-[8px]',
              size === 'lg' && 'mr-[8px]',
            ])}
          >
            <LeftIcon
              className={clsxm(
                'text-sm md:text-2xl font-semibold',
                leftIconClassName,
              )}
            />
          </div>
        )}

        <span className={textClassName}>{children}</span>

        {/* Right Icon */}
        {RightIcon && (
          <div
            className={clsxm([
              size === 'sm' && 'ml-[10px]',
              size === 'base' && 'ml-[8px]',
              size === 'lg' && 'ml-[8px]',
            ])}
          >
            <RightIcon
              className={clsxm(
                'text-sm md:text-2xl font-semibold',
                rightIconClassName,
              )}
            />
          </div>
        )}
      </button>
    );
  },
);

export default Button;
