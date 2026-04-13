import { Loader2 } from 'lucide-react';
import { LoaderProps } from './Loader.types';

export const Loader: React.FC<LoaderProps> = ({ className, iconClassName }) => {
  return (
    <div
      className={`flex h-screen w-screen items-center lg:h-full  lg:w-full justify-center ${className}`}
    >
      <Loader2
        className={`w-16 h-16 text-primary animate-spin ${iconClassName}`}
      />
    </div>
  );
};
