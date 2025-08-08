<template>

  <NavBarview />
  <main class=" scroll-smooth max-w-screen-xl flex flex-wrap items-center mx-auto p-6">

    <div class="about-me mt-[100px] sm:mt-[152px] fade-in  md:mt-8 lg:mt-[90px] lg:mb-[40px] flex items-center">

      <div class="inter ">
        <span class="text-gray-500">
          Olá, eu sou
        </span>
        <h1 class="text-blue-700 md:text-3xl">
          Fernando Muethea

        </h1>

        <p class="text-gray-500 mt-4 md:text-lg">
          Desenvolvedor Front-end e UI/Ux Design.

        </p>
        <div class="contant">
          <p class=" font-dm-sans lg:w-[620px]  text-justify lg:text-left leading-8 text-base/2 mt-6 text-gray-500">Sou
            desenvolvedor
            frontEnd com habilidades em
            Reactjs,
            Vuejs, Node.js e
            UI/UX Design. Com
            mais de 2 anos
            de experiência, eu crio soluções web e mobile personalizadas. para ajudar os meus clientes a alcançar seus
            objetivos.</p>

           <div class="social-media2 flex flex-col md:flex-row flex-wrap gap-6 md:gap-12 mt-12 items-start">
            <div v-for="social in socials" :key="social.name" class="flex items-center gap-2">
              <a :href="social.url" target="_blank" class="flex items-center gap-2">
                <font-awesome-icon :icon="['fab', social.icon]" class="text-2xl" />
                <span>{{ social.name }}</span>
              </a>
            </div>
          </div>
          <div class="btns mt-12 flex gap-5 lg:gap-12">
            <button
              class="btn  text-white font-bold  w-[106px] h-[50px] lg:w-[146px] lg:h-[62px] hover:bg-white hover:text-custom-pink hover:border bg-blue-700 w-[146px] h-[62px] rounded-xl">Ler
              mais</button>
            <button
              class="border  text-blue-700 font-bold  w-[106px] h-[50px] lg:w-[146px] lg:h-[62px] hover:border  w-[146px] h-[62px] rounded-xl">Contacto</button>
          </div>
        </div>
      </div>
      <div class="img ">
        <img class="object-fill hidden lg:grid md:w-[92rem] aspect-[16/12]" src="../assets/Vector-1.webp" alt="hero"
          loading="lazy" />
      </div>



    </div>

<section id="sobre" class="pt-[90px] scroll-mt-20 dark:bg-gray-800 pb-20 fade-in  mt-5 overflow-hidden  ">
      
        <div class="absolute top-0 dark:bg-gray-800 left-0 w-72 h-72 bg-blue-100 rounded-full  -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 dark:bg-gray-800 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
        
        <div class="container-custom dark:bg-gray-800  z-10">
            <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <!-- Imagem -->
                <div class="flex-shrink-0 fade-in">
                    <div class=" group">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <img 
                            class=" z-10 w-full max-w-sm lg:max-w-lg xl:max-w-xl h-auto aspect-[4/3] object-cover rounded-2xl shadow-lg image-hover" 
                            src="../assets/hack.webp" 
                            alt="Fernando dos Santos Muethea - Desenvolvedor Front-end"
                            loading="lazy"
                        />
                        <!-- Overlay gradiente sutil -->
                        <div class="absolute  inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                    </div>
                </div>

                <!-- Conteúdo de texto -->
                <div class="flex-1 text-center lg:text-left p-2  fade-in">
                    <header class="mb-8">
                        <h1 class="text-blue-700 md:text-3xl font-bold font-bold gradient-text mb-4">
                            Sobre mim
                        </h1>
                        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto lg:mx-0 rounded-full"></div>
                    </header>
                    
                    <div class="space-y-6">
                        <p class="text-gray-500 mt-4 md:text-lg leading-relaxed">
                            Olá! Meu nome é 
                            <span class="highlight font-bold text-blue-700">Fernando dos Santos Muethea</span>, 
                            e sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis.
                        </p>
                        
                        <p class="text-base md:text-lg  text-gray-600 leading-relaxed">
                            Com mais de <strong class="text-blue-700">2 anos de experiência</strong> no desenvolvimento web, 
                            especializo-me em <strong class="text-gray-800 dark:text-blue-400">React, MongoDB, Node.js</strong> e 
                            <strong class="text-gray-800 dark:text-blue-400">design de UI/UX</strong>. Minha missão é transformar ideias 
                            em soluções web e mobile personalizadas que realmente fazem a diferença para meus clientes.
                        </p>
                        
                        <p class="text-base md:text-lg text-gray-600 leading-relaxed">
                            Combino conhecimento técnico sólido com um olhar criativo para design, 
                            sempre focado em criar interfaces intuitivas e experiências de usuário excepcionais.
                        </p>
                    </div>

                    <!-- Skills badges -->
                    <div class="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                        <span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors">React</span>
                        <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold hover:bg-green-200 transition-colors">Node.js</span>
                        <span class="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold hover:bg-yellow-200 transition-colors">MongoDB</span>
                        <span class="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors">UI/UX Design</span>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="w-full text-center fade-in p-6 mb-[4rem]" id="habilidades">
      <h1 class="flex justify-center items-center text-center lg:text-2xl text-lg text-blue-700 font-bold">
        Habilidades
      </h1>

      <div>
        <div class="skills mt-12 flex justify-center">
          <div class="languague grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">

            <div class="card w-32 p-8 bg-white rounded-lg shadow-2xl dark:bg-gray-800">

              <font-awesome-icon :icon="['fab', 'react']" size="3x" class="text-blue-700" />

              <p class="mt-2 text-sm text-gray-500">React</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <font-awesome-icon :icon="['fab', 'vuejs']" size="3x" class="text-green-700" />

              <p class="mt-2 text-sm text-gray-500">Vue.js</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">

              <font-awesome-icon :icon="['fab', 'node-js']" size="3x" class="text-green-500" />

              <p class="mt-2 text-sm text-gray-500">Node.js</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <font-awesome-icon :icon="['fab', 'js']" size="3x" class="text-yellow-500" />

              <p class="mt-2 text-sm text-gray-500">JavaScript</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            
              <font-awesome-icon :icon="['fab', 'sass']" size="3x" class="text-purple-500" />

              <p class="mt-2 text-sm text-gray-500">Sass</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">

              <font-awesome-icon :icon="['fab', 'bootstrap']" size="3x" class="text-fuchsia-600" />

              <p class="mt-2 text-sm text-gray-500">Bootstrap</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
   
              <font-awesome-icon :icon="['fab', 'html5']" size="3x" class="text-orange-700" />

              <p class="mt-2 text-sm text-gray-500">HTML5</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <font-awesome-icon :icon="['fab', 'css3-alt']" size="3x" class="text-sky-700" />

              <p class="mt-2 text-sm text-gray-500">CSS3</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <font-awesome-icon :icon="['fab', 'code']" size="3x" class="text-green-700" />

              <p class="mt-2 text-sm text-gray-500">Laravel</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <font-awesome-icon :icon="['fab', 'figma']" size="3x" class="text-blue-800" />

              <p class="mt-2 text-sm text-gray-500">Figma</p>
            </div>

          </div>
        </div>
      </div>
    </section>


    <section class="w-full p-6 mb-[4rem] fade-in" id="servicos">
      <h1 class="flex justify-center items-center text-center lg:text-2xl text-lg text-blue-700 font-bold">
        Serviços
      </h1>

      <div>
        <div class="skills mt-12 ">
          <div class="languague grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">

            <div
              class="card flex gap-4   p-8 bg-white rounded-lg border dark:bg-gray-800">
              <font-awesome-icon :icon="['fas', 'globe']" class="bg-gray-100 p-2 rounded-full text-blue-700 text-3xl" />
              <div>
                <h2 class="font-bold">Desenvolvimento Web</h2>
                <p class="text-sm text-gray-500">Criação de sites únicos e modernos, com foco em desempenho,
                  responsividade e experiência do usuário.</p>
              </div>
            </div>

            <div
              class="card flex gap-4   p-8 bg-white rounded-lg border dark:bg-gray-800">
              <font-awesome-icon :icon="['fas', 'desktop']"
                class="bg-gray-100 p-2 rounded-full text-blue-700 text-3xl" />
              <div>
                <h2 class="font-bold">Web Design</h2>
                <p class="text-sm text-gray-500">Design de interfaces atrativas e funcionais, alinhadas à identidade
                  visual e objetivos do seu negócio.</p>
              </div>
            </div>

            <div
              class="card flex gap-2   p-8 bg-white rounded-lg border dark:bg-gray-800">
              <font-awesome-icon :icon="['fas', 'user']" class="bg-gray-100 p-2 rounded-full text-blue-700 text-3xl" />
              <div>
                <h2 class="font-bold">UI/UX Design</h2>
                <p class="text-sm text-gray-500">Desenvolvimento de interfaces intuitivas e centradas no usuário,
                  garantindo uma navegação agradável e eficiente.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
   <section class="w-full px-4 sm:px-6 mb-16 fade-in" id="projectos">
  <h1 class="text-center text-xl sm:text-2xl lg:text-3xl text-blue-700 font-bold">
    Projectos recentes
  </h1>

  <div class="category flex flex-wrap justify-center gap-4 mt-8 text-sm sm:text-base">
    <button class="active border-b-2 border-blue-700">Tudo</button>
    <button class="text-gray-500 hover:text-blue-700 transition">Desenvolvimento Web</button>
    <button class="text-gray-500 hover:text-blue-700 transition">Web Design</button>
    <button class="text-gray-500 hover:text-blue-700 transition">UI/UX Design</button>
  </div>

  <div class="skills mt-12">
    <div class="languague grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      
      <!-- Card 1 -->
      <div class="portfolio-card w-full h-auto p-4 bg-white rounded-lg border dark:bg-gray-800">
        <div class="flex flex-col justify-between leading-normal">
           <div class="flex flex-col justify-between h-full">
          <div class="mb-4"></div>
          <a class="group/edit  duration-300 ease-in-out"
            href="https://www.behance.net/gallery/147981059/Move?tracking_source=project_owner_other_projects" target="_blank">
            <span class="group-hover/edit:text-white transition-colors duration-300 ease-in-out" >Move</span>
            
            <img  loading="lazy"  :src="move" alt="" srcset="">
          </a>
        </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="qfome-card group/item w-full h-auto p-4 bg-white rounded-lg border dark:bg-gray-800 hover:bg-slate-600 hover:text-white transition-colors duration-300">
        <div class="flex flex-col justify-between h-full">
          <div class="mb-4"></div>
          <a class="group/edit  duration-300 ease-in-out"
            href="https://www.behance.net/gallery/164374263/Design-de-aplicativo-de-entrega-de-comida" target="_blank">
            <span class="group-hover/edit:text-white transition-colors duration-300 ease-in-out" >QFome App</span>
            
            <img   loading="lazy"  :src="qfome" alt="" srcset="">
          </a>
        </div>
      </div>

      

      <!-- Card 3 -->
      <div class="mysong-card w-full h-auto p-4 bg-white rounded-lg border dark:bg-gray-800">
        <div class="flex flex-col justify-between h-full">
          <div class="mb-4"></div>
          <a class="group/edit  duration-300 ease-in-out"
            href="https://www.behance.net/gallery/164549369/Design-de-app-music?tracking_source=project_owner_other_projects" target="_blank">
            <span class="group-hover/edit:text-white transition-colors duration-300 ease-in-out" >MySongGx </span>
            
            <img  loading="lazy"  :src="sonG" alt="" srcset="">
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


    <section class="w-full  fade-in p-6" id="contacto">
      <h1 class="flex justify-center items-left text-left text-md md:text-2xl text-blue-700 font-bold">
        Contacto
      </h1>
      <p class="text-sm text-gray-500 text-center">Entre em contacto</p>



      <div class="skills mt-12 grid  grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div class="languague">
          <h1 class="text-sm md:text-2xl font-bold text-blue-700">Entre em contacto hoje</h1>
          <p class="text-sm text-gray-500">Sinta-se a vontade para entrar em contacto comigo!</p>
         
                 <div class="social-media2 flex flex-col md:flex-row flex-wrap gap-6 md:gap-12 mt-12 items-start">
                  <div v-for="social in socials" :key="social.name" class="flex items-center gap-2">
                    <a :href="social.url" target="_blank" class="flex items-center gap-2">
                      <font-awesome-icon :icon="['fab', social.icon]" class="text-2xl" />
                      <span>{{ social.name }}</span>
                    </a>
                  </div>
                </div>


        </div>

        <div class=" ">
          <div class="mt-6">
            <form @submit.prevent="sendEmail">
              <div class="grid gap-6 sm:grid-cols-2 sm:gap-8">
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nome</label>
                  <input v-model="form.name" type="text" placeholder="John Doe"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                  <input v-model="form.email" type="email" placeholder="johndoe@example.com"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required />
                </div>
              </div>

              <div class="w-full mt-6">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mensagem</label>
                <textarea v-model="form.message"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message" required></textarea>
              </div>

              <div class="flex justify-end mb-5">
                <button
                  class="px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Enviar
                </button>

              </div>
            </form>
          </div>
        </div>

      </div>




    </section>

  </main>

  <footer class=" max-w-screen-xl flex flex-wrap items-center mx-auto p-6">

    <NavBarview />

  </footer>

</template>


<script setup>
import { reactive, ref } from 'vue'
import emailjs from 'emailjs-com'
import NavBarview from '@/components/NavBarview.vue';
import move from '@/assets/move.webp';
import qfome from '@/assets/Apresentacao.webp';
import sonG from '@/assets/Song.webp';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faGithub, faBehance, faDribbble)




const socials = ref([
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/fernandomuethea/' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/theablade' },
  { name: 'Behance', icon: 'behance', url: 'https://www.behance.net/fernandomuethea' },
  { name: 'Dribbble', icon: 'dribbble', url: 'https://dribbble.com/turasdesigner' },
])


const form = reactive({
  name: '',
  email: '',
  message: ''
})


const sendEmail = () => {
  const serviceID = 'service_lo1v6pb';
  const templateID = 'template_6lnexsl';
  const publicKey = 'T4p2tdYDqUsqFJjgK';

  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    message: form.message
  };

  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      form.name = '';
      form.email = '';
      form.message = '';
    }, (error) => {
      alert('Erro ao enviar a mensagem: ' + error.text);
    });
};

</script>

<style scoped>

.social-media2{
  display: flex;
}

.social-media2 a{
  display: flex;
  align-items: center;
  gap: 1rem;
}
.hr {
  margin-top: 5rem;
  width: 200px;
  border: 1px solid rgb(25, 0, 255);
  transform: rotate(90deg);
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

html {
  scroll-behavior: smooth;
}

.contant p {
  font-family: 'DMSans', Arial, sans-serif;

}
</style>