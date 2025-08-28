import { Button as AriaButton } from 'react-aria-components';

interface ButtonProps {
  text: string;
  scrollToId?: string;
}

export default function Button({ text, scrollToId, ...props }: ButtonProps) {
  const handlePress = () => {
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <AriaButton
      {...props}
      className='min-w-20 outline-none rounded-full bg-linear-(--button-gradient) hover:bg-linear-(--button-gradient-hover) cursor-pointer px-2.5 py-1.5 text-white text-sm font-semibold'
      onPress={handlePress}
    >
      {text}
    </AriaButton>
  );
}
