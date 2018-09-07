<template>
<main id="conteudo">
		<article class="home__intro">
			<div class="container">
		<h2>
			Precisamos equilibrar a disputa
		</h2>

		<p>Os grandes partidos dividem o país numa falsa polarização, mas se unem por trás dos panos para criar fundos bilionários com recursos públicos, sufocar a renovação e se manter no poder. <strong>2018 chegou, e agora temos a chance de quebrar essa farsa!</strong> Com a sua colaboração, Marina Silva e Eduardo jorge podem equilibrar a disputa e resgatar o respeito e a esperança na política. Esse é o caminho para garantir uma vida digna, num país justo, em que todos ganham. Criamos essa campanha de financiamento coletivo para unir todas as pessoas que compartilham desses ideais. <strong>Uma nova forma de fazer política nasce de uma forma diferente de financiar a política.</strong></p>

		<section id="campaign-progress" class="campaign-progress">
		<p>
			<span class="currency">R$</span>
			<strong class="amount" v-inview="isAmountOnViewport">
			<template v-if="candidate.total_donated">
				<span>
					<animated-number
						:value="amountInView ? candidate.total_donated : 0"
						:formatValue="FormatFixedBRL"
						:duration="1000"/>
				</span>
			</template>
			<template v-else>0</template>
			</strong>
		</p>

    <p class="campaign-progress-amount">
        {{ totalDonors | thousandsSeparator }} doações realizadas
    </p>

    <div role="progressbar" aria-valuemin="0"
      :aria-valuenow="totalAmount" :aria-valuemax="expected"
      v-if="donationSources.length > 1">

      <div v-for="(source, i) in donationSources" :key="i"
        :style="progressBarStyle(source)"
        :title="`${porcentage(source.total_donated)}% via ${source.name}`"
        v-if="source.total_donated">
        {{ porcentage(source.total_donated) }}
      </div>
    </div>
    <progress :value="totalAmount" :max="expected" v-else>
      <div role="progressbar" :aria-valuenow="totalAmount" :aria-valuemax="expected">
        <div :style="{width: `${porcentage(totalAmount)}%`}">
          {{ porcentage(totalAmount) }}
        </div>
      </div>
    </progress>

		<p class="campaign-progress-porcentage">
			{{ porcentage() }}% da meta de R$&nbsp;{{ expected | formatBRL }}
		</p>

    <div v-if="donationSources.length > 1" class="donations-sources">
      <p>Sendo:</p>
      <ul>
        <li v-for="(source, i) in donationSources" :key="i">
          <strong class="donations-sources__amount">
            R$ {{ source.total_donated | formatBRL }}
          </strong> /
          <em class="donations-sources__donations">
            {{ source.people_donated }}
          </em>
          doações via
          <details v-if="source.cnpj || source.social_name">
            <summary>{{ source.name }}</summary>
            <p v-if="source.cnpj">
              <em>
                <abbr title="Cadastro Nacional de Pessoa Jurídica">CNPJ</abbr>:
              </em>
              {{ source.cnpj | formatCNPJ }}
            </p>
            <p v-if="source.social_name">
              <em>
                Razão social:
              </em>
              {{ source.social_name }}
            </p>
          </details>
          <template v-else>
            {{ source.name }}
          </template>
        </li>
      </ul>
    </div>


		<p>
			<a href="#home__donors" class="campaign-progress__link" v-scroll-to="'#home__donors'">Veja quem doou</a>
		</p>

		<p class="contact-rede">
			contato
		</p>


		<p class="contact-rede-email">
			<a href="mailto:doe@marinasilva.org.br">doe&#8203@marinasilva.org.br</a>
		</p>

		</section>
	</div>
	</article>

	<article id="doar" class="home__donate">
		<div class="container" id="donation-wrap">
			<Payment />
		</div>
	</article>

	<article id="home__knowMore" class="home__knowMore">
	<div class="container" id="donation-wrap">
		<h2>
		Saiba mais
		</h2>

		<p>
			O financiamento da política pode não ser o maior problema do Brasil, mas é um dos primeiros que precisamos enfrentar. Se não mudarmos a forma como as campanhas são financiadas, as mesmas pessoas continuarão dominando a política e mandando no país. Assim, não conseguiremos atacar os verdadeiros desafios da nossa nação: a corrupção, o desemprego, a insegurança, a degradação ambiental, e muitos outros temas que afligem a população.
		</p>

		<p>
			A aparente polarização política que vivemos é um enorme teatro. Os grandes partidos se unem nos bastidores para garantir o poder. Juntos, quase triplicaram o fundo partidário,  criaram um fundo eleitoral bilionário e pegaram quase todo este dinheiro para si em uma tentativa de sufocar qualquer alternativa de renovação.
		</p>

		<p>
			O dinheiro público precisa ser utilizado de uma forma melhor. O fundo precisa ser menor e mais bem distribuído. Não faz sentido termos eleições tão caras e tão desiguais.
		</p>

		<p>
			<strong>Temos chances reais de romper com esse ciclo vicioso em 2018.</strong> Marina e Eduardo têm a independência, experiência e capacidade necessárias para levar o Brasil à frente e, com a mobilização de milhares de brasileiros, podemos equilibrar essa disputa. Queremos construir uma campanha junto com pessoas comuns, que vivem o dia a dia das nossas cidades, que conhecem a realidade do nosso país. Uma campanha feita por muitas pessoas doando o que podem, em vez de poucas pessoas fazendo tudo o que querem. Acreditamos na colaboração como caminho. Sua contribuição é um gesto político! Doe e faça parte dessa história!
		</p>
	</div>
	</article>

	<article id="home__goals" class="home__goals">
	<div class="container" id="donation-wrap">
		<h2>
		Metas
		</h2>

		<h3>R$ 200 mil</h3>
		<p>
			Sabemos que os adversários políticos usarão de todas as artimanhas para desestabilizar a candidatura de Marina. Precisamos combater suas mentiras, acusações levianas e notícias falsas. Com essa quantia, produziremos vídeos e materiais gráficos divulgando a verdade e as reais propostas de Marina para unir o Brasil.
		</p>

		<h3>R$ 300 mil</h3>
		<p>
			Além de custear as primeiras viagens e os materiais para combater as notícias falsas contra a candidatura, conseguiremos imprimir os materiais gráficos para serem usados nas primeiras duas semanas da campanha. Assim, poderemos dar o pontapé inicial, levando as ideias de Marina e Eduardo para as ruas do Brasil de maneira didática e efetiva com adesivos, panfletos e santinhos.
		</p>

	</div>
	</article>

	<article id="home__faq" class="home__faq">
		<div class="container" id="donation-wrap">
			<h2>
			Perguntas Frequentes
			</h2>
			<details>
				<summary>Como posso fazer a minha doação?</summary>
				<p>
					Aqui no site, você pode doar por meio do cartão de crédito, apenas pelo titular do cartão, e boleto bancário. Fora da plataforma, você ainda pode fazer uma transferência bancária ou depósito identificado em dinheiro ou cheque direto na conta. Se quiser as informações da conta, por favor, envie um e-mail doe@marinasilva.org.br
				</p>
			</details>
			<details>
				<summary>Os dados do meu cartão são armazenados no site?</summary>
				<p>
					Não, todo o processo é realizado por meio de canais seguros e direto com a processadora de pagamento. Não armazenamos os dados do cartão do doador.
				</p>
			</details>
			<details>
				<summary>Eu recebo alguma comprovação da doação?</summary>
				<p>
					Assim que o pagamento for aprovado, enviaremos um recibo provisório com os dados da sua doação. Depois, mandaremos por e-mail o recibo de doação eleitoral. Não é necessária a assinatura do doador no recibo como acontece na doação fora da internet.
				</p>
			</details>
			<details>
				<summary>Qual o limite de doação?</summary>
				<p>
					Cada pessoa pode doar até 10% da renda declarada referente ao ano anterior. O limite para quem não declarou imposto de renda em 2018 é de R$2.855.  As doações acima de R$ 1.064,10 só podem ser realizadas por meio de transferência bancária direta para a conta do candidato, portanto não podem ser realizadas pela internet. Se quiser as informações da conta, por favor, envie um e-mail doe@marinasilva.org.br
				</p>
			</details>
			<details>
				<summary>É preciso declarar a doação no próximo Imposto de Renda?</summary>
				<p>
					Sim. Todo mundo que é obrigado a declarar imposto de renda, precisa declarar a doação para a campanha de Marina. Existe uma seção específica chamada: Doações para Partidos Políticos, Comitês Financeiros e Candidatos a Cargos Eletivos. Basta informar os dados da candidatura de Marina que estão no Recibo Eleitoral.
				</p>
			</details>
			<details>
				<summary>Quem não pode doar?</summary>
				<p>
					Não podem doar pessoas jurídicas, estrangeiros e pessoas físicas que exerçam atividade comercial decorrente de permissão pública.
				</p>
			</details>
		</div>
	</article>


	<article id="home__donors" class="home__donors">
	<div class="container" id="donation-wrap">
		<h2>
		Doadores
		</h2>

		<p><strong>Lista com o nome dos doadores:</strong></p>


			<p>
			<span v-for="(person, i) in donors" :key="i">
			{{ person | titleCase }}{{ i < donors.length -1 ? ',' : '' }}
			</span>
			</p>

			<div class="nav-link-donations-wrap">
				<a class="nav-link-donations" href="/doadores" target="_blank">
					ver dados completos
				</a>
			</div>
	</div>
	</article>


</main>
</template>

<script>
// @ is an alias to /src
import Payment from "@/components/Payment.vue";
// eslint-disable-next-line
import AnimatedNumber from "animated-number-vue";

export default {
  data() {
    return {
      amountInView: false,
    }
  },
	name: "home",
	components: {
		Payment,
		AnimatedNumber
	},
	mounted() {
		const candidateId = (window.location.host === 'doemarina.com.br' || window.location.host === 'test.doemarina.com.br') ? 40 : 130;
		this.$store.dispatch("GET_CANDIDATE_INFO", candidateId);
		this.$store.dispatch('GetDonorsNames', candidateId);
		this.$store.dispatch("UPDATE_DONATIONS_SUMMARY", candidateId);
	},
	computed: {
		candidate() {
		return this.$store.state.candidate;
		},
    donationSources() {
      let opacity = 0;
      return this.$store.state.donationSources
        .map((x) => {
          const y = x;
          y.opacity = opacity;
          opacity += 0.25;
          return y;
        });
    },
    totalAmount() {
      return this.donationSources.length
        ? this.donationSources.reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.total_donated
          , 0,
        )
        : (this.candidate.total_donated || 0);
    },
    totalDonors() {
      return this.donationSources.length
        ? this.donationSources.reduce(
          (accumulator, currentValue) =>
            accumulator + Number.parseInt(currentValue.people_donated || 0, 10)
          , 0,
        )
        : Number.parseInt(this.candidate.people_donated || 0, 10);
    },
		donors() {
		return this.$store.state.donors;
		},
		donationsRecentCount() {
  		return this.$store.state.donationsRecentCount;
		},
		donationsRecent() {
  		return this.$store.state.donationsRecent;
		},
		hasMoreDonations() {
			return this.$store.state.hasMoreDonations;
		},
    expected() {
      return (this.candidate || {}).raising_goal || 0;
    },
	},
	methods: {
    porcentage(amount = this.totalAmount) {
      return Math.round((parseFloat(amount) * 100) / Math.max(this.totalAmount, this.expected));
    },
    progressBarStyle(source) {
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${source.opacity}), rgba(0, 0, 0, ${source.opacity}))`,
        width: `${this.porcentage(source.total_donated)}%`,
      };
    },
		FormatFixedBRL(amount) {
			let formated = `${(amount / 100).toFixed(2)}`;

			formated = formated
				.substring(0, formated.length - 2)
				.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
				.replace(/\.+$/, "");
			return formated;
		},
		isAmountOnViewport(evt, el) {
			const rect = el.getBoundingClientRect();
			const inView = (
				rect.width > 0 &&
				rect.height > 0 &&
				rect.top >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
			);

			return this.$data.amountInView = inView;
		}
	},
	directives: {
		inview: {
			inserted: (el, binding, vnode) => {
				const f = (evt) => {
					if (binding.value(evt, el)) {
						window.removeEventListener('scroll', f);
					}
				}
				window.addEventListener('scroll', f);
				f();
			}
		}
	}
};
</script>
