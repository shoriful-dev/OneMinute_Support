import Hero from '@/components/landing/hero';
import Navber from '@/components/landing/nav';
import SocialProof from '@/components/landing/social';

const Page = () => {
  return (
    <main className="w-full flex flex-col relative z-10">
      <Navber />
      <Hero />
      <SocialProof />
    </main>
  );
};

export default Page;
