<template>
  <div class="home-container">
    <div class="head">
      <img src="https://www.gravatar.com/avatar/0ec1384d1af2578b03a7543060bf3956?s=100" alt="">
      <h1>
        Hsu, Meng-Chieh
        <span>@otomesound</span>
      </h1>
      <p>A newbie Frontend Developer with additional Backend skills.</p>
    </div>
    <div class="bio">
      <h3>Skilled</h3>
      <ul class="skills">
        <li v-for="skill in skills" :key="skill.name">
          <b>{{ skill.name }}</b>
          ({{ skill.items.join(', ') }})
        </li>
      </ul>
      <h3>Social</h3>
      <div class="socials">
        <a v-for="social in socials" :key="social.icon" v-bind:href="social.url">
          <i v-bind:class="social.icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const AboutPage = defineComponent({
  data () {
    return {
      skills: [
        { name: 'FrontEnd', items: ['React', 'Vue', 'Sass'] },
        { name: 'BackEnd', items: ['Lavarel', 'Ruby on Rails'] },
        { name: 'DevOps', items: ['Docker', 'Vagrant'] },
        { name: 'Programming', items: ['C/C++', 'C#', 'Ruby', 'Python 3', 'Verilog'] }
      ],
      socials: [
        { icon: 'fa-solid fa-at', url: 'mailto:otomesound.retry@gmail.com' },
        { icon: 'fa-brands fa-facebook', url: 'https://fb.me/davistonyhsu' },
        { icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/otomesound' },
        { icon: 'fa-brands fa-github', url: 'https://github.com/s890081tonyhsu' }
      ]
    }
  }
})

export default AboutPage
</script>

<style lang="scss">
  .home-container {
    width: 100%;
    max-width: 960px;
    display: flex;
    &:after {
      content: "";
      position: absolute;
      top: 25%;
      left: 50%;
      width: 1px;
      height: 50%;
      background-color: white;
      transition: all .25s ease-in-out;
      animation: .5s 1 normal about_breakAnim;
      animation-fill-mode: backwards;
    }
    > div {
      width: 50%;
      padding: 0 50px 0;
    }
  }
  .skills li {
    line-height: 1.5em;
  }
  .head {
    text-align: right;
    img {
      border-radius: 50%;
    }
    transition: all .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: 1s 1 normal about_slideIn_directionLeft;
    animation-delay: .5s;
    animation-fill-mode: backwards;
  }
  .bio {
    transition: all .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: 1s 1 normal about_slideIn_directionRight;
    animation-delay: .5s;
    animation-fill-mode: backwards;
  }
  .socials {
    padding-left: 25px;
    a {
      padding: 0 10px 0;
      color: white;
      font-size: 3em;
      text-decoration: none;
    }
  }
  @media (max-width: 959px) {
    .home-container {
      flex-direction: column;
      margin-top: -200px;
      &:after {
        width: 0;
        height: 0;
        transition: none;
      }
      > div {
        width: auto;
      }
      .head {
        text-align: left;
      }
    }
    .socials a {
      font-size: 2em;
    }
  }
  @keyframes about_breakAnim {
    from {
      height: 0;
      top: 50%;
    }
    to {
      height: 50%;
      top: 25%;
    }
  }
  @keyframes about_slideIn_directionLeft {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes about_slideIn_directionRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
