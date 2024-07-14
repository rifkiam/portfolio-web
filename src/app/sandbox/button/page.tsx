import { IoLogoWhatsapp } from 'react-icons/io';

import Button from '@/components/Button';
import Typography from '@/components/Typography';

export default function ButtonPage() {
  return (
    <div className='flex bg-white w-full h-screen max-h-full flex-col px-8 py-10'>
      <Typography as='h1' variant='h4' weight='semibold'>
        ArkaLearn Website Button
      </Typography>
      <div className='flex gap-x-6 py-6'>
        <div className='flex flex-col gap-y-4'>
          {/* Primary No Icon*/}
          <Button variant='primary' size='sm'>
            <Typography color='white' variant='c2' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
          <Button variant='primary' size='base'>
            <Typography color='white' variant='p' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
          <Button variant='primary' size='lg'>
            <Typography color='white' variant='bt' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
        </div>
        <div className='flex flex-col gap-y-4'>
          {/* Danger No Icon*/}
          <Button variant='danger' size='sm'>
            <Typography color='white' variant='c2' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
          <Button variant='danger' size='base'>
            <Typography color='white' variant='p' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
          <Button variant='danger' size='lg'>
            <Typography color='white' variant='bt' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
        </div>
        <div className='flex flex-col gap-y-4 bg-slate-100 p-3'>
          {/* White No Icon*/}
          <Button variant='white' size='sm'>
            <Typography color='black' variant='c2' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
          <Button variant='white' size='base'>
            <Typography color='black' variant='p' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
          <Button variant='white' size='lg'>
            <Typography color='black' variant='bt' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
        </div>
        <div className='flex flex-col gap-y-4'>
          {/* Outline Primary No Icon*/}
          <Button variant='outline-primary' size='sm' className='group'>
            <Typography
              color='blue'
              variant='c2'
              weight='semibold'
              className='group-hover:text-neutral-0'
            >
              Button Fill
            </Typography>
          </Button>
          <Button variant='outline-primary' size='base' className='group'>
            <Typography
              color='blue'
              variant='p'
              weight='semibold'
              className='group-hover:text-neutral-0'
            >
              Button Fill
            </Typography>
          </Button>
          <Button variant='outline-primary' size='lg' className='group'>
            <Typography
              color='blue'
              variant='bt'
              weight='semibold'
              className='group-hover:text-neutral-0'
            >
              Button Fill
            </Typography>
          </Button>
        </div>
        <div className='flex flex-col gap-y-4'>
          {/* Outline Danger No Icon*/}
          <Button variant='outline-danger' size='sm' className='group'>
            <Typography
              color='red'
              variant='c2'
              weight='semibold'
              className='group-hover:text-neutral-0'
            >
              Button Fill
            </Typography>
          </Button>
          <Button variant='outline-danger' size='base' className='group'>
            <Typography
              color='red'
              variant='p'
              weight='semibold'
              className='group-hover:text-neutral-0'
            >
              Button Fill
            </Typography>
          </Button>
          <Button variant='outline-danger' size='lg' className='group'>
            <Typography
              color='red'
              variant='bt'
              weight='semibold'
              className='group-hover:text-neutral-0'
            >
              Button Fill
            </Typography>
          </Button>
        </div>

        <div className='flex flex-col gap-y-4 bg-slate-100 p-3'>
          {/* Outline Primary No Icon*/}
          <Button variant='outline-white' size='sm' className='group'>
            <Typography
              color='white'
              variant='c2'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>
          <Button variant='outline-white' size='base' className='group'>
            <Typography
              color='white'
              variant='p'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>
          <Button variant='outline-white' size='lg' className='group'>
            <Typography
              color='white'
              variant='bt'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>
        </div>
      </div>
      <div className='flex gap-x-6 py-5'>
        <div className='flex flex-col gap-y-4 bg-slate-100 p-3'>
          {/* Outline Primary No Icon*/}
          <Button
            variant='outline-white'
            size='sm'
            leftIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography
              color='white'
              variant='c2'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>
          <Button
            variant='outline-white'
            size='sm'
            rightIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography
              color='white'
              variant='c2'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>
          <Button
            variant='outline-white'
            size='sm'
            leftIcon={IoLogoWhatsapp}
            rightIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography
              color='white'
              variant='c2'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>
        </div>
        <div className='flex flex-col gap-y-4 bg-slate-100 p-3'>
          {/* Outline Primary No Icon*/}
          <Button
            variant='outline-white'
            size='base'
            leftIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography
              color='white'
              variant='p'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>
          <Button
            variant='outline-white'
            size='base'
            rightIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography
              color='white'
              variant='p'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>

          <Button
            variant='outline-white'
            size='base'
            rightIcon={IoLogoWhatsapp}
            leftIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography
              color='white'
              variant='p'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>
        </div>

        <div className='flex flex-col gap-y-4 bg-slate-100 p-3'>
          {/* Outline Primary No Icon*/}
          <Button
            variant='outline-white'
            size='lg'
            leftIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography
              color='white'
              variant='p'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>
          <Button
            variant='outline-white'
            size='lg'
            rightIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography
              color='white'
              variant='p'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>

          <Button
            variant='outline-white'
            size='lg'
            rightIcon={IoLogoWhatsapp}
            leftIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography
              color='white'
              variant='p'
              weight='semibold'
              className='group-hover:text-tertiary-700'
            >
              Button Fill
            </Typography>
          </Button>
        </div>

        <div className='flex flex-col gap-y-4 bg-slate-100 p-3'>
          {/* Outline Primary No Icon*/}
          <Button
            variant='white'
            size='sm'
            leftIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography color='black' variant='c2' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
          <Button
            variant='white'
            size='base'
            rightIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography color='black' variant='p' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
          <Button
            variant='white'
            size='lg'
            rightIcon={IoLogoWhatsapp}
            leftIcon={IoLogoWhatsapp}
            className='group'
          >
            <Typography color='black' variant='bt' weight='semibold'>
              Button Fill
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}
