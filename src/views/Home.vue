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
		</p>
		<p class="campaign-progress-amount">Doados por {{ candidate.people_donated }} pessoas</p>

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
		Saiba mais
		</h2>

		<p>
			<strong>Os problemas da política nacional nascem no seu financiamento.</strong> No centro dos escândalos de corrupção recentes, as doações de empresa para a campanhas eleitorais foram proibidas pela Justiça em 2015. <strong>No palanque, os grandes e velhos partidos encenam uma  polarização que domina o debate público. Nos bastidores, porém, deixam de lado as rivalidades e fazem acordos para conseguir mais recursos e se manter no poder.</strong> Unidos, quase triplicaram o fundo partidário e criaram um fundo eleitoral bilionário. Foi assaltando os cofres públicos que eles resolveram o buraco deixado pela falta das doações das empresas.
		</p>

		<p>
			A Rede Sustentabilidade é a favor da participação do dinheiro público no financiamento da política. Quando as campanhas são financiadas apenas pelo dinheiro privado, os políticos podem acabar ficando amarrados aos interesses dos financiadores. Em 2014, as eleições foram financiadas com 95% de dinheiro privado e apenas 5% de dinheiro público. O resultado desse desequilíbrio vem sendo revelado pela Polícia Federal em operações como a Lava-Jato.
		</p>

		<p>
			A maneira como foi aprovada pelo Congresso, no entanto, só serve para beneficiar os mesmos partidos e engessar a política. <strong>O fundo precisa ser menor e mais bem distribuído.</strong> Os grandes partidos criaram um ciclo vicioso que favorece imensamente quem já está no poder.
		</p>

		<p>
			<strong>Acreditamos que temos chances reais de romper com essa lógica em 2018.</strong> Queremos concentrar esforços em expandir a presença e o alcance da Rede pelo Brasil. Assim poderemos articular todas e todos que compartilham desse objetivo comum. <strong>E para isso, nada melhor do que Marina Silva levar nossas ideias pelos quatro cantos do país,</strong> conversando olhos nos olhos com brasileiras e brasileiros e mostrando não apenas que existem novas formas de se fazer política, mas também que é possível começarmos agora!
		</p>

		<p>
			<strong>Para reinventar o país é preciso reinventar a forma como financiamos a política.</strong> Mais uma vez acreditamos na colaboração como caminho. <strong>Contribua e faça parte da expansão da rede que vai unir o Brasil.</strong>
		</p>
	</div>
	</article>

	<article id="home__goals" class="home__goals">
	<div class="container" id="donation-wrap">
		<h2>
		Metas
		</h2>

		<h3>R$ 100 mil</h3>
		<p>Para que possamos realizar tudo que desejamos, precisamos financiar as viagens da Marina e outras lideranças da Rede pelo país. Com esse valor, conseguiremos realizar eventos em cinco capitais diferentes, levando ideias, propostas e uma visão diferente de país para diversas regiões</p>

		<h3>R$ 200 mil</h3>
		<p>Sabemos que os adversários políticos usarão de todas as artimanhas para desestabilizar a Rede e a Marina. São os reis das mentiras, acusações levianas e notícias falsas. Precisamos combater isso tudo. Com essa arrecadação produziremos vídeos e materiais gráficos abordando essas fake news contra a Marina e a Rede e divulgando as verdadeiras propostas para unir o Brasil</p>

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
					Aqui no site, você pode doar por meio do cartão de crédito, apenas pelo titular do cartão, e boleto bancário. Fora daqui, você ainda pode fazer uma transferência bancária ou depósito identificado em dinheiro ou cheque direto na conta. Se quiser as informações da conta, por favor, envie um e-mail
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
					As doações acima de R$ 1.064,10 só podem ser realizadas por meio de transferência bancária direta para a conta do candidato.
				</p>
			</details>
			<details>
				<summary><span class="caret"></span>É preciso declarar a doação no próximo Imposto de Renda?</summary>
				<p>
					Sim. Todo mundo que é obrigado a declarar imposto de renda, precisa declarar a doação. Existe uma seção específica chamada: Doações para Partidos Políticos, Comitês Financeiros e Candidatos a Cargos Eletivos. Basta informar o nome da Rede Sustentabilidade, o valor da doação e o CNPJ do partido. Todas essas informações estão no Recibo Eleitoral que será enviado ao seu e-mail após a confirmação da doação.
				</p>
			</details>
			<details>
				<summary><span class="caret"></span>Quem não pode doar?</summary>
				<p>
					Não podem doar para o partido pessoas físicas que exerçam função ou cargo público de livre nomeação e exoneração, cargos de chefia ou direção na administração pública direta ou indireta, ou cargo ou emprego público temporário, ressalvados os filiados.
				</p>
			</details>
		</div>
	</article>


	<article id="home__donors" class="home__donors">
	<div class="container" id="donation-wrap">
		<h2>
		Doadores
		</h2>

		<p><strong>Essas são as pessoas que entenderam o valor de seu apoio e decidiram dar um pasos na direção de uma política mais transparente, mais representativa e mais colaborativa:</strong></p>
		<p>
		<span v-for="(person, i) in donations" :key="i">
			{{ person | titleCase }}{{ i < donations.length -1 ? ',' : '' }}
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
	const candidateId = window.location.host === 'somosrede.com.br'
	? 40
	: 130;
	this.$store.dispatch('GET_CANDIDATE_INFO', candidateId);
	this.$store.dispatch('GET_DONATIONS', candidateId);
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
		return this.candidate.raising_goal;
		}
	}

	return 0
	},
	porcentage() {
	if (this.candidate) {
		const value = (this.candidate.total_donated * 100) / this.expected;
		return Math.ceil(value);
	}

	return 0
	}
},
};
</script>
