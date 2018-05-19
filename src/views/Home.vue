<template>
  <main id="conteudo">
		<article class="home__intro">
			<div class="container">
        <h2>
          Expandir a Rede para unir o Brasil
        </h2>

        <p>A Rede Sustentabilidade nasce da união de pessoas que acreditam em novas formas de fazer política. Na contramão deste desejo, os grandes partidos dividem o país numa falsa polarização, mas se unem por trás dos panos para criar fundos bilionários com recursos públicos, sufocar qualquer possibilidade de renovação e se manter no poder. Com Marina como porta-voz e milhares de apoiadores em todo país, temos chances reais de fazer frente a essa farsa. Juntos, podemos equilibrar a disputa. Criamos essa campanha de financiamento coletivo para expandir a Rede e assim unir todas as pessoas que compartilham desse sonho. Uma nova forma de fazer política nasce de uma forma diferente de financiar a política. Faça sua contribuição, compartilhe a página e seja parte da mudança.</p>

        <section id="campaign-progress" class="campaign-progress">
          <p>
            <span class="currency">R$</span>
            <strong class="amount">
              <template v-if="candidate.total_donated">{{ candidate.total_donated | formatBRL }}</template>
              <template v-else>0</template>
            </strong>
            Doados por {{ candidate.people_donated }} pessoas
          </p>

          <progress :value="candidate.total_donated" :max="expected">
            <div class="progress-bar">
              <span :style="{width: `${porcentage}%`}">
                {{ porcentage }}
              </span>
            </div>
          </progress>

          <p>
            <em class="amount-percent">{{ porcentage }}%</em> da meta de <span class="donations-expected"> R$ {{ expected | formatBRLDec }}</span>
          </p>

          <p>
            <a href="#home__donors">Veja quem doou</a>
          </p>
        </section>
      </div>
    </article>

    <article id="home__donate" class="home__donate">
      <div class="container" id="donation-wrap">
        <Payment />
      </div>
    </article>

    <article id="home__knowMore" class="home__knowMore">
      <div class="container" id="donation-wrap">
        <h2>
          Saiba mais
        </h2>

        <p>Os problemas da política nacional nascem no seu financiamento. No centro dos escândalos de corrupção recentes, as doações de empresa para a campanhas eleitorais foram proibidas pela Justiça em 2015. No palanque, os grandes e velhos partidos encenam uma  polarização que domina o debate público. Nos bastidores, porém, deixam de lado as rivalidades e fazem acordos para conseguir mais recursos e se manter no poder. Unidos, quase triplicaram o fundo partidário e criaram um fundo eleitoral bilionário. Foi assaltando os cofres públicos que eles resolveram o buraco deixado pela falta das doações das empresas. </p>

        <p>A Rede Sustentabilidade é a favor da participação do dinheiro público no financiamento da política. Quando os políticos são financiados apenas pelo dinheiro privado, ficam amarrados aos interesses dos financiadores. Em 2016, a Organização para Cooperação e Desenvolvimento Econômico (OCDE) divulgou um <a href="https://read.oecd-ilibrary.org/governance/financing-democracy_9789264249455-en#page1" target="_blank">relatório</a> que aponta que os partidos políticos de 14 dos 16 países membros europeus analisados de 2007 a 2015 são majoritariamente financiadas por meio de recursos públicos. Em média, o partidos políticos nesses países foram 73% financiados com dinheiro público, e 27% com dinheiro privado. Já no Brasil, a campanha eleitoral de 2014 foi financiada com 95% de recursos privados e apenas 5% de fundos públicos, segundo o capítulo do relatório dedicado ao Brasil e escrito pelo ministro do STF José Antonio Dias Toffoli, presidente do Tribunal Superior Eleitoral (TSE) na época. O resultado desse desequilíbrio vem sendo revelado pela Polícia Federal em operação como a Lava-Jato.</p>

        <p>O dinheiro público deve ajudar a financiar as campanhas justamente para reduzir a possibilidade de uma troca de favores com o capital privado depois das eleições. Da forma  como foi aprovada pelo Congresso, no entanto, só serve para beneficiar os mesmo partidos e engessar a política. As eleições não podem ser tão caras e os recursos não podem ser tão mal distribuídos. Temos assim um ciclo vicioso que favorece imensamente quem já está no poder.</p>

        <p>A Rede vem crescendo nos último anos e em 2018 acreditamos que temos chances reais de romper com essa lógica. Queremos concentrar esforços em expandir a presença e o alcance da Rede pelo Brasil e assim articular todas e todos que compartilham desse objetivo comum. E pra isso, nada melhor do que Marina Silva levar nossas ideias pelos quatro cantos do país, conversando olhos nos olhos com brasileiras e brasileiros e mostrando não apenas que existem novas formas de se fazer política, mas também que é possível começarmos agora!</p>

        <p>Mais uma vez acreditamos na colaboração como caminho. Para reinventar o Brasil é preciso reinventar a forma como financiamos a política. Contribua e faça parte da expansão da rede que vai unir o Brasil.</p>
      </div>
    </article>

    <article id="home__goals" class="home__goals">
      <div class="container" id="donation-wrap">
        <h2>
          Metas
        </h2>

        <p>Quanto queremos arrecadar e para que?</p>
      </div>
    </article>

    <article id="home__donors" class="home__donors">
      <div class="container" id="donation-wrap">
        <h2>
          Doadores
        </h2>

        <p>Essas são as pessoas que entenderam o valor de seu apoio e decidiram dar um pasos na direção de uma política mais transparente, mais representativa e mais colaborativa:</p>
        <p>
          <span v-for="(person, i) in donations" :key="person.id">
            {{ person.name }}{{ i < donations.length -1 ? ',' : '' }}
          </span>
        </p>
      </div>
    </article>
  </main>
</template>

<script>
// @ is an alias to /src
import Payment from '@/components/Payment.vue';

export default {
  name: 'home',
  components: {
    Payment,
  },
  mounted() {
    this.$store.dispatch('GET_CANDIDATE_INFO', 1);
    this.$store.dispatch('GET_DONATIONS', 1);
  },
  computed: {
    candidate() {
      return this.$store.state.candidate;
    },
    donations() {
      return this.$store.state.donations;
    },
    expected() {
      if (this.candidate) {
        if (this.candidate.raising_goal) {
          const value = this.candidate.raising_goal.replace('.', '');
          return parseFloat(value, 10);
        }
      }

      return 0
    },
    porcentage() {
      if (this.candidate) {
        const value = (this.candidate.total_donated * 100) / this.expected;
        return value
      }

      return 0
    }
  },
};
</script>
