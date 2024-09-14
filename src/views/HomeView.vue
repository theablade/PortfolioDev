<template>

  <NavBarview />
  <main class=" max-w-screen-xl flex flex-wrap items-center mx-auto p-6">

    <div class="about-me mt-[100px] sm:mt-[152px] md:mt-8 lg:mt-[90px] lg:mb-[40px] flex items-center">

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
          <p class=" lg:w-[650px] text-justify mt-6 text-gray-500 tracking-widest font-dm-sans">Sou
            desenvolvedor
            frontEnd com habilidades em
            Reactjs,
            Vuejs, Node.js e
            UI/UX Design. Com
            mais de 2 anos
            de experiência, eu crio soluções web e mobile personalizadas. para ajudar os meus clientes a alcançar seus
            objetivos.</p>

          <div class="social-media flex gap-8  mt-12">
            <a href="https://www.linkedin.com/in/fernandomuethea/" target="_blank"
              class="flex flex-col gap-1 dark:text-gray-70 text-center">
              <i class="fa-brands fa-linkedin text-2xl"></i>
              linkdin
            </a>
            <a href="https://github.com/Muethea" target="_blank"
              class="flex flex-col gap-1 dark:text-gray-70 text-center">
              <i class="fa-brands text-2xl fa-github"></i>
              github
            </a>
            <a href="https://www.behance.net/fernandomuethea" class="flex flex-col gap-1 dark:text-gray-70 text-center">
              <i class="fa-brands text-2xl fa-behance"></i>
              behance

            </a>
            <a href="https://dribbble.com/turasdesigner" class="flex flex-col gap-1 dark:text-gray-70 text-center">
              <i class="fa-brands text-2xl fa-dribbble"></i>
              dribbble
            </a>
          </div>
          <div class="btns mt-12 flex gap-5 lg:gap-12">
            <button
              class="btn  text-white font-bold  w-[106px] h-[50px] lg:w-[146px] lg:h-[62px] hover:bg-white hover:text-custom-pink hover:border bg-blue-700 w-[146px] h-[62px] rounded-xl">Ler
              mais</button>
            <button
              class="btn btn-secondary w-[106px] h-[50px] lg:w-[146px] lg:h-[62px] rounded-xl text-blue-700 hover:bg-blue-700 hover:text-white font-bold border dark:text-white">Contacto</button>
          </div>
        </div>
      </div>
      <div class="img ">
        <img class="object-fill hidden lg:grid md:w-[92rem] aspect-[16/12]" src="../assets/Vector-1.webp" alt="hero"
          loading="lazy" />
      </div>



    </div>

    <section id="sobre">


      <div class="about flex mb-[4rem]  items-center justify-between ">
        <div class="img ">
          <img class="object-fill hidden lg:grid w-[32rem] aspect-[4/3]" src="../assets/hack.webp" alt="hero" />
        </div>

        <div class="lg:w-3/4 mt-9 lg:mt-7">

          <h1 class="lg:text-3xl text-lg  text-blue-700 font-bold">Sobre mim</h1>
          <p class=" lg:w-4/5  text-justify lg:text-left leading-8 text-base/2 mt-6 text-gray-500 tracking-widest">
            Meu nome é <span class="text-blue-700 font-bold">
              Fernando dos Santos Muethea
            </span>desenvolvedor front-end com habilidades em React, MongoDB, Node.js
            e
            design de UI/UX. Com mais de 2 anos de experiência, eu crio soluções web e mobile personalizadas para
            ajudar
            os meus clientes a alcançar seus objetivos.
          </p>
        </div>
      </div>

    </section>

    <section class="w-full text-center p-6 mb-[4rem]" id="habilidades">
      <h1 class="flex justify-center items-center text-center lg:text-2xl text-lg text-blue-700 font-bold">
        Habilidades
      </h1>

      <div>
        <div class="skills mt-12 flex justify-center">
          <div class="languague grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">

            <div class="card w-32 p-8 bg-white rounded-lg shadow-2xl dark:bg-gray-800">
              <i class="fa-brands text-blue-700 fa-react text-3xl"></i>
              <p class="mt-2 text-sm text-gray-500">React</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <i class="fa-brands text-green-700 fa-vuejs text-3xl"></i>
              <p class="mt-2 text-sm text-gray-500">Vue.js</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <i class="fa-brands text-green-500 fa-node-js text-3xl"></i>
              <p class="mt-2 text-sm text-gray-500">Node.js</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <i class="fa-brands text-yellow-500 fa-js text-3xl"></i>
              <p class="mt-2 text-sm text-gray-500">JavaScript</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <i class="fa-brands text-purple-500 fa-sass text-3xl"></i>
              <p class="mt-2 text-sm text-gray-500">Sass</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <i class="fa-brands text-fuchsia-600 fa-bootstrap text-3xl"></i>
              <p class="mt-2 text-sm text-gray-500">Bootstrap</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <i class="fa-brands text-orange-700 fa-html5 text-3xl"></i>
              <p class="mt-2 text-sm text-gray-500">HTML5</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <i class="fa-brands text-sky-500 fa-css3-alt text-3xl"></i>
              <p class="mt-2 text-sm text-gray-500">CSS3</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <i class="fa-brands fa-laravel text-red-800 dark:text-red-400 text-3xl"></i>
              <p class="mt-2 text-sm text-gray-500">Laravel</p>
            </div>

            <div class="card w-32 p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <i class="fa-brands fa-figma text-blue-800 text-3xl"></i>
              <p class="mt-2 text-sm text-gray-500">Figma</p>
            </div>

          </div>
        </div>
      </div>
    </section>


    <section class="w-full p-6 mb-[4rem]" id="servicos">
      <h1 class="flex justify-center items-center text-center lg:text-2xl text-lg text-blue-700 font-bold">
        Serviços
      </h1>

      <div>
        <div class="skills mt-12">
          <div class="languague grid sm:grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div class="card flex gap-4 w-[382px] h-[150px] p-8 bg-white rounded-lg border dark:bg-gray-800">
              <font-awesome-icon :icon="['fas', 'globe']" class="bg-gray-100 p-2 rounded-full text-blue-700 text-3xl" />
              <div>
                <h2 class="font-bold">Desenvolvimento Web</h2>
                <p class="text-sm text-gray-500">Criação de sites únicos e modernos, com foco em desempenho,
                  responsividade e experiência do usuário.</p>
              </div>
            </div>

            <div class="card flex gap-4 w-[382px] h-[150px] p-8 bg-white rounded-lg border dark:bg-gray-800">
              <font-awesome-icon :icon="['fas', 'desktop']"
                class="bg-gray-100 p-2 rounded-full text-blue-700 text-3xl" />
              <div>
                <h2 class="font-bold">Web Design</h2>
                <p class="text-sm text-gray-500">Design de interfaces atrativas e funcionais, alinhadas à identidade
                  visual e objetivos do seu negócio.</p>
              </div>
            </div>

            <div class="card flex gap-4 w-[382px] h-[150px] p-8 bg-white rounded-lg border dark:bg-gray-800">
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
    <section class="w-full p-6 mb-[4rem]" id="projectos">
      <h1 class="flex justify-center items-center text-center lg:text-2xl text-blue-700 font-bold">
        Projectos recentes
      </h1>
      <div class="category flex gap-3 mt-[2rem] justify-center lg:text-sm text-sm items-center text-center">
        <button class="active border-b-2 border-blue-700">Tudo</button>
        <button class="text-gray-500">Desenvolvimento Web</button>
        <button class="text-gray-500">Web Design</button>
        <button class="text-gray-500">UI/UX Design</button>


      </div>

      <div>
        <div class="skills mt-12">
          <div class="languague grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">



            <div class="portfolio-card  flex gap-4 w-[382px] h-[250px] p-3 bg-white rounded-lg border dark:bg-gray-800">


              <div class="flex  flex-col justify-between p-2 leading-normal">
                <h2 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Desenvolvimento Web</h2>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
              </div>
            </div>


            <div
              class="qfome-card group/item hover:bg-slate-600 hover:text-white transition-colors duration-300 card flex gap-4 w-[382px] h-[250px] p-8 bg-white rounded-lg border dark:bg-gray-800">
              <div></div>
              <div>
                <a class="group/edit invisible group-hover/item:visible transition-opacity duration-300 ease-in-out"
                  href="https://www.behance.net/gallery/164374263/Design-de-aplicativo-de-entrega-de-comida">
                  <span class="group-hover/edit:text-white transition-colors duration-300 ease-in-out">Call</span>
                  <svg
                    class="group-hover/edit:translate-x-0.5 group-hover/edit:text-white transition-transform duration-300 ease-in-out">
                    <use xlink:href="#call"></use>
                  </svg>
                </a>
              </div>
            </div>


            <div class="mysong-card flex gap-4 w-[382px] h-[250px] p-8 bg-white rounded-lg border dark:bg-gray-800">

            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="w-full   p-6" id="contacto">
      <h1 class="flex justify-center items-left text-left text-2xl text-blue-700 font-bold">
        Contacto
      </h1>
      <p class="text-sm text-gray-500 text-center">Entre em contacto</p>



      <div class="skills mt-12 grid grid-cols-2  ">
        <div class="languague">
          <h1 class="text-2xl font-bold text-blue-700">Entre em contacto hoje</h1>
          <p class="text-sm text-gray-500">Sinta-se a vontade para entrar em contacto comigo!</p>
          <div class="social-media grid gap-2  mt-12">
            <div class="flex gap-1">

              <span class="material-symbols-outlined ">
                mail
              </span>
              <p class="text-gray-500">fernandomuethea@gmail.com</p>

            </div>
            <div class="flex gap-1 ">

              <a href="https://www.linkedin.com/in/fernandomuethea/" target="_blank">
                <i class="fa-brands fa-linkedin text-2xl"></i>
              </a>
              <p class="text-gray-500">@fernandomuethea</p>

            </div>
            <div class="flex gap-1 ">

              <a href="https://github.com/Muethea" target="_blank">
                <i class="fa-brands fa-github text-2xl"></i>
              </a>
              <p class="text-gray-500">@Muethea</p>
            </div>
            <div class="flex gap-1 ">

              <a href="https://www.behance.net/fernandomuethea">
                <i class="fa-brands fa-behance text-2xl"></i>
              </a>
              <p class="text-gray-500">@fernandomuethea</p>
            </div>
            <div class="flex gap-1 ">


              <a href="https://dribbble.com/turasdesigner">
                <i class="fa-brands fa-dribbble text-2xl"></i>
              </a>
              <p class="text-gray-500">

                @turasdesigner
              </p>
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
                  class="px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  type="submit">
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
import { reactive } from 'vue'
import emailjs from 'emailjs-com'
import NavBarview from '@/components/NavBarview.vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
})


const sendEmail = () => {
  const serviceID = 'service_lo1v6pb'  // Substitua pelo seu serviceID do EmailJS
  const templateID = 'template_6lnexsl'  // Substitua pelo seu templateID do EmailJS
  const publicKey = 'T4p2tdYDqUsqFJjgK'

  // Os parâmetros que serão enviados para o EmailJS, correspondendo ao template
  const templateParams = {
    name: form.name,         // Substitui {{name}} no EmailJS
    from_name: form.name,    // Substitui {{from_name}} no EmailJS
    email: form.email,
    reply_to: form.email,   // Substitui {{email}} no campo "From Email"
    message: form.message    // Substitui {{message}} no EmailJS
  }

  // Envia o e-mail usando EmailJS
  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(() => {
      alert('Mensagem enviada com sucesso!')
      // Limpa o formulário após o envio
      form.name = ''
      form.email = ''
      form.message = ''
    })
    .catch((error) => {
      alert('Erro ao enviar mensagem: ' + error.text)
    })
}
</script>

<style scoped>
.hr {
  margin-top: 5rem;
  width: 200px;
  border: 1px solid rgb(25, 0, 255);
  transform: rotate(90deg);
}


html {
  scroll-behavior: smooth;
}

.contant p {
  font-family: 'DMSans', Arial, sans-serif;

}
</style>