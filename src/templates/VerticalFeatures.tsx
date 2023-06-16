import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="What is Trustless Enterprise"
    description="Trustless Enterprise refers to a new business model and organizational form that is built entirely on the Bitcoin network. It embodies the trend of decentralization and eliminating trust.

    It uses only non-custodial cryptocurrencies like Bitcoin for all transactions and operations, without involving any fiat money or third-party payment systems. This removes dependence on any centralized institutions. It leverages the decentralization of Bitcoin blockchain to verify transactions without relying on any centralized entities. This allows it to function without trust. It is built on top of the Bitcoin network, relying on its security, auditability and transparency. This obviates the need for centralized auditing or regulation. Its governance structure and operating mechanism emulate the decentralization of Bitcoin blockchain. This enables it to coordinate and operate in a decentralized manner. It considers Bitcoin as the cornerstone of its operation and value storage. This allows it to operate autonomously in a free market without government control.  
    
    "
  >
    <VerticalFeatureRow
      title="Not your key, Not your Coins."
      description="The claims made by The Wall Street Journal are truly bewildering. The collapse of FTX was clearly due to insider trading and misappropriation of customer funds by its founder, yet it was downplayed by the elite media as the 'shattering of ideals,' which seems more like an excuse to absolve greed-driven behavior. Meanwhile, the concept of 'Not your key, not your coins' becomes particularly important. Only when we truly control our own private keys can we ensure the security of digital assets. If we entrust our funds to third-party custody, our wealth can vanish into thin air in the event of fraud or bankruptcy—this is the reality shown to us by the FTX case.

      When 'ideals' are merely a smokescreen, and when third-party institutions cannot truly be accountable for our interests, we must safeguard our wealth ourselves; this is a fundamental survival rule in this digital age. 
      As reflected in The Wall Street Journal's report, in this game of power and profit, the interests of ordinary people are never the primary concern. 'Not your key, not your coins' is not just a slogan; it is the only way to protect our property. Only through decentralized investment and storage can we effectively control our assets and avoid becoming victims of this power game once again. 
      This is also the original intention behind the birth of blockchain technology—to give everyone true financial autonomy. If we fail to learn from the lessons of history, history will only continue to repeat itself."
      image="/assets/images/ftx_report.jpg"
      imageAlt="FTX"
    />
    <VerticalFeatureRow
      title="Do not trust, verify."
      description="
      At Trustless Enterprise, we firmly believe that trust should be built on verification. This is the principle of 'don't trust, verify' and the cornerstone of blockchain technology upon which Bitcoin relies. This principle emphasizes the importance of decentralization, transparency, and self-verification in financial transactions. 
      By using distributed ledgers and cryptographic protocols to verify transactions and ensure their accuracy, we can avoid relying on intermediaries that may conflict with our interests. Through this approach, we can establish trust based on verification and create a financial system resistant to censorship, fraud, and corruption. 
      
      The Byzantine Generals' Problem describes such a scenario. In this game, Byzantine generals verify each other's loyalty by giving random commands to their hired soldiers instead of making empty promises. 
      Only when the majority of the army follows the same command, the commands become effective. This ensures that no single general can manipulate the entire army. 
      It is a classic solution based on verification, not trust, to balance power. So, if you want to ensure transparency, security, and financial freedom, remember to verify rather than trust. 
      As the Byzantine Generals' Problem illustrates, power should be established on verification and checks, not solely on trust. Only by establishing self-verification and balancing mechanisms through technologies like blockchain can we build a true 'trustless' enterprise that resists excessive concentration and abuse of power.
      
      "
      image="/assets/images/bz.jpg"
      imageAlt="All Coins are ShitCoin except Bitcoin."
      reverse
    />
    <VerticalFeatureRow
      title="World Fist Central Bank Digital Currency(CBDC) -- Gosbank"
      description="
      Gosbank (Russian: Госбанк, Государственный банк СССР, Gosudarstvenny bank SSSR - State Bank of the USSR) was the central bank of the Soviet Union and the only nationwide bank from 1922 to 1991. 
      
      Gosbank was one of the three economic authorities in the Soviet Union, alongside 'Gosplan' (State Planning Committee) and 'Gossnab' (State Materials and Technical Supply Committee). 
      
      Gosbank worked closely with the Soviet Ministry of Finance in formulating the national budget.
      "
      image="/assets/images/Coat_of_arms_of_the_Soviet_Union_(1956–1991).svg"
      imageAlt="Coat_of_arms_of_the_Soviet_Union"
    />

    <VerticalFeatureRow
      title="All Coins are ShitCoin, except Bitcoin."
      description="
      In fact, we don't need to imagine CBDC because we have witnessed it in history—the Soviet Union's Gosbank was the most successful CBDC implementation case. However, as we know, it ultimately turned out to be a disaster.

Gosbank had absolute control over the Soviet Union's financial and economic system, governing aspects such as currency issuance, fund circulation, interest rate policies, and account management. This aligns with the powers granted to central banks with CBDC. 
And Gosbank took full advantage of this power—imposing strict regulations on commercial banks and the market, distorting interest rates and exchange rates, conducting comprehensive surveillance of citizens' assets, ultimately leading to economic turmoil and social upheaval."
      image="/assets/images/bitcoin.png"
      imageAlt="https://www.researchgate.net/publication/347802389_Blockchain-Based_Payment_Channel_Networks_Challenges_and_Recent_Advances"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
