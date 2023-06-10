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
      image="/assets/images/ftx_report.jpg"
      imageAlt="FTX"
    />
    <VerticalFeatureRow
      title="Do not trust, verify."
      description="At Trustless Enterprise, we believe that trust is earned through verification. That's why we follow the principle of 'Do not trust, verify.' which is a fundamental principle of the blockchain technology that powers Bitcoin. This principle highlights the importance of decentralization, transparency, and self-verification when it comes to financial transactions. By verifying transactions and confirming their accuracy through distributed ledgers and cryptographic protocols, we eliminate the need for trust in intermediaries who may have incentives that are misaligned with ours. With this approach, we can build trust on a foundation of verification and create a financial system that is resistant to censorship, fraud, and corruption. So, if you want to ensure transparency, security, and financial freedom, remember to verify rather than trust."
      image="/assets/images/bz.jpg"
      imageAlt="All Coins are ShitCoin except Bitcoin."
      reverse
    />
    <VerticalFeatureRow
      title="世界第一个央行数字货币(CBDC) -- Gosbank"
      description="
      Gosbank（俄语：Госбанк，Государственный банк СССР，Gosudarstvenny银行SSSR-苏联国家银行）是苏联的中央银行，也是1922年至1991年全国唯一的银行。Gosbank是苏联三个经济当局之一，另外两个是“Gosplan”（国家计划委员会）和“Gossnab”（国家材料技术供应委员会）。Gosbank与苏联财政部密切合作，编制国家预算。"
      image="/assets/images/Coat_of_arms_of_the_Soviet_Union_(1956–1991).svg"
      imageAlt="Coat_of_arms_of_the_Soviet_Union"
    />

    <VerticalFeatureRow
      title="All Coins are ShitCoin, except Bitcoin."
      description="
      实际上,我们不需要设想CBDC,因为我们早已经在历史上见识过了——苏联的Gosbank便是最成功的CBDC实践案例。然而,正如我们所知,它最终是一场灾难。
Gosbank拥有对苏联金融和经济的绝对控制权,它控制货币发行、资金流通、利率政策和账户管理等各个环节。这与CBDC赋予央行的权力如出一辙。并且,Gosbank已经将这种权力发挥到了极致——严格限制对商业银行和市场的管制,利率和汇率的扭曲,对公民财产的全面监控等,最终导致经济混乱和社会动荡。"
      image="/assets/images/bitcoin.png"
      imageAlt="https://www.researchgate.net/publication/347802389_Blockchain-Based_Payment_Channel_Networks_Challenges_and_Recent_Advances"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
