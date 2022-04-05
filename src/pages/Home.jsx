import { Features } from '../components/home/Features';
import { Hero } from '../components/home/Hero';

/**
 * @description Homepage
 * @returns {JSX}
 */

export function Home() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}
