<template>
  <main id="conteudo">
		<article class="home__intro">
			<div class="container">
        <h2>
          Ajude a Rede e Marina a divulgarem ideias transformadoras Brasil afora
        </h2>
        <p>Nunc non euismod ex. Phasellus condimentum ipsum leo, vitae commodo diam venenatis a. Donec et est imperdiet, auctor arcu interdum, maximus eros. Morbi sollicitudin vitae diam vitae cursus. Suspendisse lectus nulla, finibus a luctus non, fringilla sit amet sem. Nam non eros quis nibh mollis laoreet vel quis sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

        <section id="campaign-progress" class="campaign-progress">
          <p>
            <span class="currency">R$</span>
            <strong class="amount">
              XXXAMOUNT
            </strong>
            Doados por XXX pessoas
          </p>

          <progress value="[[ value ]]" max="[[ expected ]]">
            <div class="progress-bar">
              <span style="width: [[ value ]]%">
                valor
              </span>
            </div>
          </progress>

          <p>
            <em class="amount-percent">PORCENTAGEM</em> da meta de <span class="donations-expected"> XXXESPERADO</span>
          </p>

          <p>
            <a href="#home__donors">Veja quem doou</a>
          </p>
        </section>
      </div>
    </article>

    <article id="home__donate" class="home__donate">
      <div class="container" id="donation-wrap">
        <h2>
          Doar
        </h2>
      </div>
    </article>

    <article id="home__knowMore" class="home__knowMore">
      <div class="container" id="donation-wrap">
        <h2>
          Saiba mais
        </h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus pulvinar massa sodales convallis. Nam massa nisl, bibendum ut justo id, vulputate auctor eros. Ut accumsan orci sem, sit amet elementum odio posuere at. Nam ac semper lectus. Quisque et velit turpis. Ut aliquam, nisi quis interdum ultrices, erat erat vehicula dui, eu commodo est ante at mi. Pellentesque vestibulum varius lacus id ultrices. Praesent egestas quam sit amet molestie accumsan. Nunc pulvinar condimentum ex non lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan risus a urna condimentum cursus. Vestibulum arcu sapien, bibendum non purus ut, sodales consectetur ipsum.</p>

        <p>Nam fermentum massa eget lorem posuere sodales. Etiam risus turpis, mollis nec efficitur in, eleifend eget arcu. Quisque libero nisl, facilisis non viverra sit amet, semper a quam. Aenean facilisis blandit imperdiet. Mauris nibh nisi, laoreet id eros in, bibendum efficitur sem. Nulla felis ipsum, tristique vitae gravida vitae, dictum at enim. Phasellus gravida sem nec consequat ultrices. Ut eu sem in nulla aliquet consectetur quis a odio. Praesent viverra nibh ex, vitae mattis sapien gravida eget. Aenean vel volutpat leo. Sed sit amet massa in lacus mollis faucibus in et nulla. Praesent quis fermentum mauris, quis volutpat nunc.</p>

        <p>Donec erat magna, porta eget aliquam et, sagittis sed lacus. Vestibulum varius elit nec diam vestibulum, a commodo ipsum egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis sagittis lectus. Morbi quis scelerisque orci. Proin sagittis ex id augue laoreet, et lobortis nibh venenatis. Donec tellus magna, tristique vel massa in, ultrices bibendum nibh. Nam eleifend congue purus non consequat. In hac habitasse platea dictumst. Maecenas ultricies mi non efficitur finibus.</p>
      </div>
    </article>

    <article id="home__goals" class="home__goals">
      <div class="container" id="donation-wrap">
        <h2>
          Metas
        </h2>

        <p>Mauris porta rhoncus mi, sit amet viverra magna. Aliquam auctor nisl in lorem mollis, vel consequat dolor congue. Morbi eget mi ligula. Quisque ut leo rutrum, placerat sapien quis, accumsan tortor. Suspendisse et ipsum a tortor pharetra pretium vel ac ipsum. Mauris suscipit massa id purus accumsan elementum. Aenean mauris augue, maximus tristique ullamcorper quis, euismod in urna. Nam varius neque et ante scelerisque, sit amet mollis augue finibus. Nam lacinia molestie tellus in dapibus. Suspendisse elementum sollicitudin pretium. Maecenas nec magna at velit imperdiet auctor. Phasellus a gravida nisl, eget bibendum leo.</p>
      </div>
    </article>

    <article id="home__donors" class="home__donors">
      <div class="container" id="donation-wrap">
        <h2>
          Doadores
        </h2>

        <p>Essas são as pessoas que entenderam o valor de seu apoio e decidiram dar um pasos na dire;cão de uma política mais transparente, mais representativa e mais colaborativa:</p>
      </div>
    </article>
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
