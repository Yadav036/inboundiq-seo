import { HeroSection } from '@/components/HeroSection';
import { LandingSections } from '@/components/LandingSections';
import { SiteNavbar } from '@/components/SiteNavbar';

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <SiteNavbar />
      <main className='px-[60px]'>
        <HeroSection />
        <LandingSections />
      </main>
    </div>
  );
}
