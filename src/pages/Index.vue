<template>
  <Layout>
    <Header/>
    <Hero/>
    <Team/>
    <Portfolio/>
    <About/>
    <Blog/>
    <Contact/>
    <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
  import Team from '~/components/Team.vue';
  import Portfolio from '~/components/Portfolio.vue';
  import About from '~/components/About.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: { 
      Header,
      Hero,
      Team,
      Portfolio,
      About,
      Blog,
      Contact,
      Footer
    },
  }
</script>