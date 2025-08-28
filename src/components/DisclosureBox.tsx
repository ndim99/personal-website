import { Disclosure, DisclosurePanel, Button, type DisclosureProps } from 'react-aria-components';
import { cn } from '../lib/utils';
import Icon from './Icon';

interface DisclosureBox extends Omit<DisclosureProps, 'children'> {
  company: string;
  date: string;
  children: React.ReactNode;
  className?: string;
}

export default function DisclosureBox({
  company,
  date,
  children,
  ...props
}: DisclosureBox) {
  return (
    <Disclosure {...props}>
      {({ isExpanded }) => (
        <div className={cn('backdrop-blur-lg shadow-card bg-linear-(--card-gradient) rounded-xl outline-none', { 'border border-primary': isExpanded })}>
          <Button
            slot="trigger"
            className={cn(
              'rounded-xl w-full flex items-center gap-3 p-3 cursor-pointer outline-none',
              {
                'border border-primary': !isExpanded,
              },
            )}
          >
            <Icon name='chevron' className={cn('size-4 transform duration-150 rotate-90', { 'rotate-0': !isExpanded })} />
            <div className='flex flex-col items-start'>
              <p className="font-bold text-base text-white">Front-End Engineer, {company}</p>
              <p className='text-white/80 text-xs'>{date}</p>
            </div>
          </Button>
          <DisclosurePanel className='mx-12'>{children}</DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
}