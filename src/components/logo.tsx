import { Pencil2Icon } from '@radix-ui/react-icons'

export default function Logo() {
  return (
    <div
      className="flex flex-row items-center leading-none text-gray-800">
      <Pencil2Icon className="h-6 w-6 " />
      <p className="text-base ml-1 font-black">Uninotes</p>
    </div>
  );
}

