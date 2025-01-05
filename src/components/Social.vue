<script setup lang="ts">
import { AtSign } from 'lucide-vue-next';
import { FacebookIcon, GitHubIcon, LinkedInIcon } from 'vue3-simple-icons';

type Props = {
  socials: {
    email: string;
    facebook: string;
    linkedin: string;
    github: string;
  },
}

const { socials } = defineProps<Props>();
</script>

<template>
  <a :href="socials.email" aria-label="email">
    <AtSign :size="48" />
  </a>
  <a :href="socials.facebook" aria-label="facebook">
    <FacebookIcon :size="48" />
  </a>
  <a :href="socials.linkedin" aria-label="linkedin">
    <LinkedInIcon :size="48" />
  </a>
  <a :href="socials.github" aria-label="github">
    <GitHubIcon :size="48" />
  </a>
</template>
