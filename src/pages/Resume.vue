<script setup>
import { ref } from 'vue';

import FullColumnItem from '../components/Resume/FullColumnItem.vue';
import GroupColumnItem from '../components/Resume/GroupColumnItem.vue';
import HalfColumnItem from '../components/Resume/HalfColumnItem.vue';
import resumeSrc from '../data/resume.data';

const headHash = ref(import.meta.env.PUBLIC_HEADER_HASH);
const headImg = ref(`${import.meta.env.PUBLIC_HEADER_IMG}?s=200`);
const selfIntroduction = ref(import.meta.env.PUBLIC_SELF_INTRODUCTION);
const resumeData = ref(resumeSrc);
</script>

<template>
  <div class="resume-container">
    <div class="resume-header">
      <UnLazyImage
        :blurhash="headHash"
        :src="headImg"
        alt="header"
        width="150px"
        height="150px"
        preload
      />
      <h1>
        Hsu, Meng-Chieh<br />
        <span>Frontend Developer</span>
      </h1>
    </div>
    <div class="resume-content">
      <div class="row" style="--i: 1s">
        <h2 class="title">About</h2>
        <p class="content-text">{{ selfIntroduction }}</p>
      </div>
      <div class="row" style="--i: 2s">
        <h2 class="title">Contact</h2>
        <div class="content-items">
          <HalfColumnItem
            v-for="(contact, idx) in resumeData.contacts"
            :item="contact"
            :key="`contact-${idx}`"
          />
        </div>
      </div>
      <div class="row" style="--i: 3s">
        <h2 class="title">Profile</h2>
        <div class="content-items">
          <HalfColumnItem
            v-for="(profile, idx) in resumeData.profiles"
            :item="profile"
            :key="`profile-${idx}`"
          />
        </div>
      </div>
      <div class="row" style="--i: 4s">
        <h2 class="title">Works</h2>
        <div class="content-items">
          <FullColumnItem
            v-for="(work, idx) in resumeData.works"
            :item="work"
            :key="`work-${idx}`"
          />
        </div>
      </div>
      <div class="row" style="--i: 5s">
        <h2 class="title">Skills</h2>
        <div class="content-items">
          <GroupColumnItem
            v-for="skill in resumeData.skills"
            :item="skill"
            :key="`skill-${skill.name}`"
            class="content-item wide"
          />
        </div>
      </div>
      <div class="row" style="--i: 6s">
        <h2 class="title">Volunteers</h2>
        <div class="content-items">
          <FullColumnItem
            v-for="(volunteer, idx) in resumeData.volunteers"
            :item="volunteer"
            :key="`volunteer-${idx}`"
          />
        </div>
      </div>
      <div class="row" style="--i: 7s">
        <h2 class="title">Education</h2>
        <div class="content-items">
          <FullColumnItem
            v-for="(education, idx) in resumeData.educations"
            :item="education"
            :key="`education-${idx}`"
          />
        </div>
      </div>
      <div class="row" style="--i: 8s">
        <h2 class="title">Past Skills</h2>
        <div class="content-items">
          <GroupColumnItem
            v-for="skill in resumeData.pastSkills"
            :item="skill"
            :key="`skill-${skill.name}`"
            class="content-item wide"
          />
        </div>
      </div>
      <div class="row" style="--i: 9s">
        <h2 class="title">Languages</h2>
        <div class="content-items">
          <HalfColumnItem
            v-for="language in resumeData.languages"
            :item="language"
            :key="`language-${language.name}`"
          />
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<style lang="scss">
.resume-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.resume-header img {
  width: 150px;
  margin: 75px;
  border-radius: 100%;
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
  animation: 0.5s 1 normal resume_img_scale;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
}

.resume-header h1 {
  width: 500px;
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
  animation: 0.5s 1 normal resume_slideIn_directionLeft;
  animation-fill-mode: backwards;
}

.resume-header h1 span {
  font-size: 0.65em;
}

.row {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 30px;
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
  animation: 1s 1 normal resume_slideIn_directionTop;
  animation-delay: calc(var(--i) * 0.125 + 0.25s);
  animation-fill-mode: backwards;
}

.row .title {
  width: 300px;
  text-align: right;
  padding-right: 30px;
}

.row .content-text,
.content-items {
  width: 600px;
  padding: 0 30px 0;
  line-height: 1.5em;
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 959px) {
  .resume-header {
    flex-direction: column;
  }

  .resume-header img {
    margin: 0;
  }

  .resume-header h1 {
    text-align: center;
    width: 100%;
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
    border-bottom: 1px solid #aaa;
  }

  .row .title {
    width: 95%;
    text-align: left;
    padding-right: 0;
  }

  .row .content-text,
  .row .content-items {
    width: 95%;
    padding: 0;
    line-height: 1.5em;
  }
}
</style>
