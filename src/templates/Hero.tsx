import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-orange-50">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.btcstudy.org/">
            <a>比特币知识</a>
          </Link>
        </li>
        <li>
          <Link href="https://mirror.xyz/williamdao.eth">
            <a>保持联系</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'比特币储蓄\n'}
            <span className="text-orange-500">
              大萧条时代的资产保值、支付之道
            </span>
          </>
        }
        description="Protect Your Wealth with Trustless Enterprise: Your Solution for an Unstable World"
        button={
          <Link href="https://william.yang.at.trustlessenterprise.com/">
            <a>
              <Button xl>详细了解</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
