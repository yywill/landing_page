import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="What is Trustless Enterprise"
    description="Trustless Enterprise is your guide to wealth holding in an unstable world. Our solution is built around the power of Bitcoin and its original design goal of providing a decentralized, secure, and transparent financial system. This innovation was born out of the 2008 banking crisis, and its relevance is even more significant today, with unpredictable markets and economic instability. Our commitment to wealth holding is backed by Bitcoin's smart, disruptive, and groundbreaking vision, which is developed from the lessons learned from the 2008 crash. We believe that Bitcoin's unique features will safeguard your investments and ensure your financial security. Trustless Enterprise's empowering wealth holding solution is your path to long-term financial stability and prosperity."
  >
    <VerticalFeatureRow
      title="Not your key, Not your Coins."
      description="'Not your key, not your coins' is a powerful reminder of the risks of centralized control in the cryptocurrency world. Unlike traditional banking systems, where your funds are held by a third-party custodian, non-custodial ownership allows you to take control of your assets and eliminate the risk of a bank crash. With non-custodial ownership, you become your own custodian, and no one can gain access to your coins without your permission. This level of control and security is essential in a digital world where security risks are constantly evolving. So remember, to truly own your coins and have complete control, always keep your private keys secure."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Do not trust, verify."
      description="At Trustless Enterprise, we believe that trust is earned through verification. That's why we follow the principle of 'Do not trust, verify.' which is a fundamental principle of the blockchain technology that powers Bitcoin. This principle highlights the importance of decentralization, transparency, and self-verification when it comes to financial transactions. By verifying transactions and confirming their accuracy through distributed ledgers and cryptographic protocols, we eliminate the need for trust in intermediaries who may have incentives that are misaligned with ours. With this approach, we can build trust on a foundation of verification and create a financial system that is resistant to censorship, fraud, and corruption. So, if you want to ensure transparency, security, and financial freedom, remember to verify rather than trust."
      image="/assets/images/feature2.svg"
      imageAlt="All Coins are ShitCoin except Bitcoin."
      reverse
    />
    <VerticalFeatureRow
      title="All Coins are ShitCoin except Bitcoin."
      description="The phrase 'All Coins are ShitCoin except Bitcoin' is a polarizing statement in the cryptocurrency community and often reflects the strong belief of Bitcoin maximalists that other cryptocurrencies have little value compared to Bitcoin. While some may consider this phrase to be overly simplistic or dismissive, it does reflect the opinion of those who believe that Bitcoin's unique characteristics, such as decentralization, scarcity, and robust security, make it the most reliable and valuable cryptocurrency in existence. At Trustless Enterprise, we believe in the power of Bitcoin's original design and its potential to revolutionize the financial landscape. However, we also recognize that other cryptocurrencies and blockchain-based applications can offer unique benefits and use cases that should not be overlooked. We emphasize a balanced and informed approach to cryptocurrency investments, one that acknowledges the potential of a diverse range of assets while staying true to our commitment to building a secure and transparent financial future."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
