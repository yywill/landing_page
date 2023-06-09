import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.btcstudy.org/">
            <a>BTC Study</a>
          </Link>
        </li>
        <li>
          <Link href="https://mirror.xyz/williamdao.eth">
            <a>William DAO</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The only way for\n'}
            <span className="text-primary-500">Bitcoin Holder</span>
          </>
        }
        description="The safe way to hold bitcoin in decades."
        button={
          <Link href="https://william.yang.at.trustlessenterprise.com/">
            <a>
              <Button xl>Consult For Details</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
