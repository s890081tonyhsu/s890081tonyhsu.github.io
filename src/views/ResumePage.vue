<template>
  <div class="resume-container">
    <div class="resume-header">
      <img :src="headImg" alt="">
      <h1>
        Hsu, Meng-Chieh<br>
        <span>Frontend Developer</span>
      </h1>
    </div>
    <div class="resume-content">
      <div class="row" style="--i: 1s;">
        <h2 class="title">About</h2>
        <p class="content-text">{{ introduction }}</p>
      </div>
      <div class="row" style="--i: 2s;">
        <h2 class="title">Contact</h2>
        <div class="content-items">
          <HalfColumnItem v-for="(contact, idx) in resumeData.contacts"
                          :itemData="contact" :key="`contact-${idx}`" />
        </div>
      </div>
      <div class="row" style="--i: 3s;">
        <h2 class="title">Profile</h2>
        <div class="content-items">
          <HalfColumnItem v-for="(profile, idx) in resumeData.profiles"
                          :itemData="profile" :key="`profile-${idx}`" />
        </div>
      </div>
      <div class="row" style="--i: 4s;">
        <h2 class="title">Works</h2>
        <div class="content-items">
          <FullColumnItem v-for="(work, idx) in resumeData.works"
                          :itemData="work" :key="`work-${idx}`" />
        </div>
      </div>
      <div class="row" style="--i: 5s;">
        <h2 class="title">Volunteers</h2>
        <div class="content-items">
          <FullColumnItem v-for="(volunteer, idx) in resumeData.volunteers"
                          :itemData="volunteer" :key="`volunteer-${idx}`" />
        </div>
      </div>
      <div class="row" style="--i: 6s;">
        <h2 class="title">Education</h2>
        <div class="content-items">
          <FullColumnItem v-for="(education, idx) in resumeData.educations"
                          :itemData="education" :key="`education-${idx}`" />
        </div>
      </div>
      <div class="row" style="--i: 7s;">
        <h2 class="title">Skills</h2>
        <div class="content-items">
          <GroupColumnItem v-for="skill in resumeData.skills"
                           :itemData="skill" :key="`skill-${skill.name}`"
                           class="content-item wide" />
        </div>
      </div>
      <div class="row" style="--i: 7s;">
        <h2 class="title">Languages</h2>
        <div class="content-items">
          <HalfColumnItem v-for="language in resumeData.languages"
                          :itemData="language" :key="`language-${language.name}`" />
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HalfColumnItem from '@/components/Resume/HalfColumnItem.vue'
import FullColumnItem from '@/components/Resume/FullColumnItem.vue'
import GroupColumnItem from '@/components/Resume/GroupColumnItem.vue'

import resumeData from '@/data/resume.data'

const ResumePage = defineComponent({
  components: {
    HalfColumnItem,
    FullColumnItem,
    GroupColumnItem
  },
  data () {
    return {
      headImg: 'https://www.gravatar.com/avatar/0ec1384d1af2578b03a7543060bf3956?s=200',
      introduction: 'A person who is finished military service. He will try to fing some works about frontend and user experience.',
      resumeData
    }
  }
})

export default ResumePage
</script>

<style lang="scss">
  .resume-header {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      margin: 75px;
      border-radius: 100%;
      transition: all .25s cubic-bezier(1, 0.5, 0.8, 1);
      animation: .5s 1 normal resume_img_scale;
      animation-delay: .5s;
      animation-fill-mode: backwards;
    }
    h1 {
      width: 500px;
      transition: all .25s cubic-bezier(1, 0.5, 0.8, 1);
      animation: .5s 1 normal resume_slideIn_directionLeft;
      animation-fill-mode: backwards;
      span {
        font-size: 0.65em;
      }
    }
  }
  .row {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 30px;
    transition: all .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: 1s 1 normal resume_slideIn_directionTop;
    animation-delay: calc(var(--i) * 0.125 + .25s);
    animation-fill-mode: backwards;
    .title {
      width: 300px;
      text-align: right;
      padding-right: 30px;
    }
    .content-text, .content-items {
      width: 600px;
      padding: 0 30px 0;
      line-height: 1.5em;
    }
  }

  @media(max-width: 959px) {
    .resume-header {
      flex-direction: column;
      img {
        margin: 0;
      }
      h1 {
        text-align: center;
        width: 100%;
      }
    }
    .resume-container {
      padding-top: 100px;
      width: 100%;
    }
    .resume-content {
      width: 100%;
    }
    .row {
      flex-direction: column;
      width: 100%;
      border-bottom: 1px solid #AAA;
      .title {
        width: 95%;
        text-align: left;
        padding-right: 0;
      }
      .content-text, .content-items {
        width: 95%;
        padding: 0;
        line-height: 1.5em;
      }
    }
  }

  @keyframes resume_slideIn_directionLeft {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes resume_img_scale {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes resume_slideIn_directionTop {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
