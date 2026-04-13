import { HeroSection } from '@/components/HeroSection';
import { LandingSections } from '@/components/LandingSections';
import { SiteNavbar } from '@/components/SiteNavbar';

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <SiteNavbar />
      <main>
        <HeroSection />
        <LandingSections />
      </main>
    </div>
  );
}
