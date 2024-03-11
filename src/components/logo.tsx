import { Pencil2Icon } from '@radix-ui/react-icons';

interface LogoProps {
  className: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex flex-row items-center leading-none text-gray-800 ${className}`}>
      <Pencil2Icon className="h-6 w-6" />
      <p className="text-base ml-1 font-black">Uninotes</p>
    </div>
  );
}
