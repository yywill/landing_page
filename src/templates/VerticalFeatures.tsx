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
      description="《华尔街日报》的说法实在令人匪夷所思。FTX的倒闭明明是由于创始人内幕交易和挪用客户资金造成的,却被 Elite media淡化为“理想的破灭”,这更像是一种为贪婪行为开脱的借口。
与此同时,“Not your key, not your coins” 的理念则显得尤为重要。只有当我们真正掌握自己的私钥,才能确保数字资产的安全。如果将资金交给第三方托管,一旦出现骗局或破产,我们的财富便会灰飞烟灭——这正是FTX案例向我们展示的现实。
当“理想”仅仅是掩人耳目的幌子,当第三方机构无法真正为我们的利益负责,我们就必须自己守护财富,这是在这个数字时代的基本生存法则。正如《华尔街日报》的报道所体现的,在这场权与利的博弈中,普通人的利益从来都不会是优先考量的因素。
“Not your key, not your coins” 不只是一句口号,它是我们维护财产的唯一方法。
只有通过去中心化的投资与存储,我们才能切实掌控自己的资产,避免再次成为这场权力游戏的牺牲品。这也是区块链技术诞生的初衷——给予每个人真正的财富自主权。如果我们学不会历史的教训,历史只会不断重演。"
      image="/assets/images/ftx_report.jpg"
      imageAlt="FTX"
    />
    <VerticalFeatureRow
      title="Do not trust, verify."
      description="在Trustless Enterprise,我们坚信信任应建立在验证的基础上。这正是“不相信,要验证”的原则,也是比特币所依托的区块链技术的基石。这一原则强调在金融交易中去中心化、透明度和自我验证的重要性。通过分布式账本和加密协议验证交易并确保其准确性,我们无需依赖可能与我们利益相悖的中间机构。采用这种方法,我们可以在验证的基础上建立信任,创建一个抵制审查、欺诈和腐败的金融系统。
《拜占庭将军问题》描述的就是这样一种Scenario。在这场博弈中,拜占庭将军通过给雇佣军随机的命令来验证彼此的忠诚度,而非进行空口承诺。只有当大部分军队执行相同的命令时,这些命令才会生效。这确保没有任何一个将军可以操控整个军队。这就是一种经典的基于验证而非信任来制衡权力的方案。
所以,如果您想要确保透明度、安全性和金融自由,请记住验证而不要信任。正如《拜占庭将军问题》所示,权力应建立在被验证和制衡之上,而非单纯的信任。只有通过区块链等技术建立自我验证和制衡机制,我们才能构建一个真正的“无信任”企业,抵御权力的过度集中与滥用。"
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
