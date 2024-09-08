<script setup lang="ts">
import * as icons from 'lucide-vue-next';
import { FacebookIcon, GitHubIcon } from 'vue3-simple-icons';
import { ref, shallowRef } from 'vue';

const headHash = ref(import.meta.env.PUBLIC_HEADER_HASH);
const headImg = ref(`${import.meta.env.PUBLIC_HEADER_IMG}?s=200`);
const selfIntroduction = ref(import.meta.env.PUBLIC_SELF_INTRODUCTION);

const skills = ref([
  { name: 'FrontEnd', items: ['React', 'Sass'] },
  { name: 'Packing', items: ['Webpack', 'Vite'] },
  { name: 'DevOps', items: ['Docker'] },
  { name: 'Programming', items: ['C/C++', 'Rust'] },
]);

const socials = ref([
  {
    key: 'email',
    icon: icons.AtSign,
    url: 'mailto:otomesound.retry@gmail.com',
  },
  {
    key: 'facebook',
    icon: shallowRef(FacebookIcon),
    url: 'https://fb.me/davistonyhsu',
  },
  {
    key: 'linkedin',
    icon: icons.Linkedin,
    url: 'https://www.linkedin.com/in/otomesound',
  },
  {
    key: 'github',
    icon: shallowRef(GitHubIcon),
    url: 'https://github.com/s890081tonyhsu',
  },
]);
</script>

<template>
  <div class="home-container">
    <div class="head">
      <UnLazyImage
        :blurhash="headHash"
        :src="headImg"
        alt="header"
        width="200px"
        height="200px"
        preload
      />
      <h1>
        Hsu, Meng-Chieh
        <span>@otomesound</span>
      </h1>
      <p>{{ selfIntroduction }}</p>
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
        <a
          v-for="social in socials"
          :key="social.key"
          :href="social.url"
          :aria-label="social.key"
        >
          <component :is="social.icon" :size="48" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-container {
  width: 100%;
  max-width: 960px;
  display: flex;

  &:after {
    content: '';
    position: absolute;
    top: 25%;
    left: 50%;
    width: 1px;
    height: 50%;
    background-color: white;
    transition: all 0.25s ease-in-out;
    animation: 0.5s 1 normal about_breakAnim;
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
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
  animation: 1s 1 normal about_slideIn_directionLeft;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
}

.head img {
  border-radius: 50%;
}

.bio {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
  animation: 1s 1 normal about_slideIn_directionRight;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
}

.socials {
  padding-left: 25px;
}

.socials a {
  padding: 0 10px 0;
  color: white;
  text-decoration: none;
}

@media (max-width: 959px) {
  .home-container {
    flex-direction: column;
    margin-top: 100px;

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
</style>
