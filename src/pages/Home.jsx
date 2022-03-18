import { Features } from '../components/Features';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { LinkTo } from '../components/LinkTo';

/**
 * @description Homepage
 * @returns {JSX}
 */

export function Home() {
  return (
    <main>
      <Header
        children={
          <LinkTo
            icon={<i className="fa fa-user-circle"></i>}
            text="Sign In"
            linkTo="/sign-in"
          />
        }
      />
      <Hero />
      <Features />
    </main>
  );
}
