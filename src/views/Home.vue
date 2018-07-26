<template>
<main id="conteudo">
		<article class="home__intro">
			<div class="container">
		<h2>
			Precisamos equilibrar a disputa
		</h2>

		<p>Marina é a única pré-candidata capaz de unir o Brasil e tirar o país do atraso. Mas sabemos que não basta ser a mais preparada. É preciso ter recursos para construir uma campanha que faça frente aos grandes partidos e suas mentiras. Marina tem uma trajetória de honestidade e superação e precisa do seu apoio para levar sua história e suas ideias para todos os brasileiros. Faça a sua doação e compartilhe a página. Vamos juntos preparar uma campanha vencedora e diferente: construída com diálogo, coragem e verdade.</p>

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
		<p class="campaign-progress-amount">{{ candidate.people_donated | thousandsSeparator }} doações realizadas</p>

		<progress :value="candidate.total_donated" :max="expected">
			<div class="progress-bar">
			<span :style="{width: `${porcentage}%`}">
				{{ porcentage }}
			</span>
			</div>
		</progress>

		<p class="campaign-progress-porcentage">
			{{ porcentage }}% da meta de R$ {{ expected | formatBRL }}
		</p>

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
		Conheça
		</h2>

		<p>
			Marina Silva tem uma história de superação. É, de muitas formas, um retrato do Brasil. Nascida mulher, negra e numa família de seringueiros, começou a trabalhar na infância e conheceu de perto a miséria e a fome. Perdeu a mãe e irmãos para doenças. E foi para cidade grande tratar os problemas de saúde que a vida difícil lhe deu e realizar o sonho de estudar.
		</p>

		<p>
			Aprendeu a ler e escrever aos 16 anos e foi a primeira dentre os irmãos a fazê-lo. Dez anos depois formou-se em História pela Universidade do Acre. Tornou-se também professora e psicopedagoga. Dedicou sua vida ao ambientalismo, tendo lutado, ao lado de Chico Mendes, pela preservação da Amazônia.
		</p>

		<p>
			Dedicou sua vida às causas em que acredita. Foi a vereadora mais votada em 1988 e, em 1990, a mais votada deputada estadual, bem como a senadora mais jovem da República, na história do Senado, eleita em 1994. Por fim, exerceu o cargo de Ministra do Meio Ambiente entre 2003 e 2008. Conhece o Brasil, seus problemas e potenciais como poucas pessoas. Ao contrário de muitos políticos, tem uma trajetória limpa, sem absolutamente nenhuma marca de corrupção.
		</p>

		<p>
			Essa trajetória é reconhecida internacionalmente. Foi premiada mais de 60 vezes no Brasil e no exterior. Por sua atuação na proteção da floresta amazônica, Marina recebeu prêmios importantes nos Estados Unidos, Noruega e Mônaco. Em 2007, teve a honra de receber o maior prêmio da ONU na área ambiental, o Campeões da Terra. Além disto, teve a honra de participar da abertura dos jogos Olímpicos de 2012 em Londres em função de sua história de vida dedicada à defesa do meio ambiente global.
		</p>

		<p>
			Em um ambiente político conturbado, marcado pelo debate raso e notícias falsas, Marina se sobressai. Mantém sempre uma postura serena, expõe suas ideias, debate com aliados e tem a mesma disposição ao diálogo com os adversários. Não precisa gritar para demonstrar coragem no enfrentamento de situações adversas. A história, a coerência e as propostas de Marina falam por si só.
		</p>
	</div>
	</article>

	<article id="home__goals" class="home__goals">
	<div class="container" id="donation-wrap">
		<h2>
		Metas
		</h2>

		<h3>R$ 100 mil</h3>
		<p>Para levar a história e as ideias de Marina para os brasileiros, precisamos custear suas viagens pelo Brasil. Com esse valor, conseguiremos realizar eventos em cinco cidades diferentes, levando as nossas propostas para diversas regiões.</p>

		<h3>R$ 200 mil</h3>
		<p>Sabemos que os adversários políticos usarão de todas as artimanhas para desestabilizar a candidatura de Marina. Precisamos combater suas mentiras, acusações levianas e notícias falsas. Com essa quantia, produziremos vídeos e materiais gráficos divulgando a verdade e as reais propostas de Marina para unir o Brasil.</p>

	</div>
	</article>

	<article id="home__faq" class="home__faq">
		<div class="container" id="donation-wrap">
			<h2>
			Perguntas Frequentes
			</h2>
			<details>
				<summary><span class="caret"></span>Como posso fazer a minha doação?</summary>
				<p>
					Aqui no site, você pode doar por meio do cartão de crédito, apenas pelo titular do cartão, e boleto bancário.
				</p>
			</details>
			<details>
				<summary><span class="caret"></span>Os dados do meu cartão são armazenados no site?</summary>
				<p>
					Não, todo o processo é realizado por meio de canais seguros e direto com a processadora de pagamento. Não armazenamos os dados do cartão do doador.
				</p>
			</details>
			<details>
				<summary><span class="caret"></span>Eu recebo alguma comprovação da doação?</summary>
				<p>
					Assim que o pagamento for aprovado, enviaremos um recibo provisório com os dados da sua doação. Depois, mandaremos por e-mail o recibo de doação eleitoral. Não é necessária a assinatura do doador no recibo como acontece na doação fora da internet.
				</p>
			</details>
			<details>
				<summary><span class="caret"></span>Qual o limite de doação?</summary>
				<p>
					Cada pessoa pode doar até 10% da renda declarada referente ao ano anterior. O limite para quem não declarou imposto de renda em 2018 é de R$2.855.  As doações acima de R$ 1.064,10 só podem ser realizadas por meio de transferência bancária direta para a conta do candidato, portanto não podem ser realizadas pela internet..
				</p>
			</details>
			<details>
				<summary><span class="caret"></span>É preciso declarar a doação no próximo Imposto de Renda?</summary>
				<p>
					Sim. Todo mundo que é obrigado a declarar imposto de renda, precisa declarar a doação para a campanhade Marina. Existe uma seção específica chamada: Doações para Partidos Políticos, Comitês Financeiros e Candidatos a Cargos Eletivos. Basta informar os dados da candidatura de Marina que estão no Recibo Eleitoral.
				</p>
			</details>
			<details>
				<summary><span class="caret"></span>Quem não pode doar?</summary>
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

		<p><strong>Essas são as pessoas que entenderam o valor de seu apoio e decidiram dar um passo na direção de uma política mais transparente, mais representativa e mais colaborativa:</strong></p>


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
		if (this.candidate) {
			if (this.candidate.raising_goal) {
			return this.candidate.raising_goal;
			}
		}

		return 0
		},
		porcentage() {
		if (this.candidate) {
			const value = (this.candidate.total_donated * 100) / this.expected;
			return Math.round(value);
		}
		return 0
		}
	},
	methods: {
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
