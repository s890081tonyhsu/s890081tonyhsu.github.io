<template>
  <div class="resume-container">
    <div class="resume-header">
      <img src="https://www.gravatar.com/avatar/0ec1384d1af2578b03a7543060bf3956?s=200" alt="">
      <h1>
        Hsu, Meng-Chieh<br>
        <span>Newbie Frontend Developer</span>
      </h1>
    </div>
    <div class="resume-content">
      <div class="row" style="--i: 1s;">
        <h2 class="title">About</h2>
        <p class="content-text">A person who is finished military service. He will try to fing some works about frontend and user experience.</p>
      </div>
      <div class="row" style="--i: 2s;">
        <h2 class="title">Contact</h2>
        <div class="content-items">
          <HalfColumnItem v-for="(contact, idx) in contacts" :itemData="contact" :key="`contact-${idx}`" />
        </div>
      </div>
      <div class="row" style="--i: 3s;">
        <h2 class="title">Profile</h2>
        <div class="content-items">
          <HalfColumnItem v-for="(profile, idx) in profiles" :itemData="profile" :key="`profile-${idx}`" />
        </div>
      </div>
      <div class="row" style="--i: 4s;">
        <h2 class="title">Works</h2>
        <div class="content-items">
          <FullColumnItem v-for="(work, idx) in works" :itemData="work" :key="`work-${idx}`" />
        </div>
      </div>
      <div class="row" style="--i: 5s;">
        <h2 class="title">Volunteers</h2>
        <div class="content-items">
          <FullColumnItem v-for="(volunteer, idx) in volunteers" :itemData="volunteer" :key="`volunteer-${idx}`" />
        </div>
      </div>
      <div class="row" style="--i: 6s;">
        <h2 class="title">Education</h2>
        <div class="content-items">
          <FullColumnItem v-for="(education, idx) in educations" :itemData="education" :key="`education-${idx}`" />
        </div>
      </div>
      <div class="row" style="--i: 7s;">
        <h2 class="title">Skills</h2>
        <div class="content-items">
          <div class="content-item wide" v-for="skill in skills" :key="`skill-${skill.name}`">
            <h3>{{ skill.groupName }}</h3>
            <ul>
              <li v-for="(groupItem, idx) in skill.groupItems" :key="`skill-${skill.name}-${idx}`">
                {{ groupItem.name }}<span v-if="groupItem.items">: {{ groupItem.items.join(', ') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row" style="--i: 7s;">
        <h2 class="title">Languages</h2>
        <div class="content-items">
          <HalfColumnItem v-for="language in languages" :itemData="language" :key="`language-${language.name}`" />
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HalfColumnItem from '@/components/HalfColumnItem.vue'
import FullColumnItem from '@/components/FullColumnItem.vue'

const ResumePage = defineComponent({
  components: {
    HalfColumnItem,
    FullColumnItem
  },
  data () {
    return {
      contacts: [
        { name: 'email', text: 'otomesound.retry@gmail.com', link: 'mailto:otomesound.retry@gmail.com' },
        { name: 'facebook', text: 'davistonyhsu', link: 'https://fb.me/davistonyhsu' },
        { name: 'LINE', text: 'davistonyhsu' },
        { name: 'telegram', text: 'otomesound' }
      ],
      profiles: [
        { name: 'website', text: 's890081tonyhsu.github.io', link: 'https://s890081tonyhsu.github.io' },
        { name: 'linkedin', text: 'Hsu, Meng Chien', link: 'https://www.linkedin.com/in/otomesound' },
        { name: 'github', text: 's890081tonyhsu', link: 'https://github.com/s890081tonyhsu' },
        { name: 'wiki', text: 'NanaIro no Sora', link: 'http://nairosora.lionfree.net' }
      ],
      works: [
        { name: 'NCHU Office of International Affairs', suffix: 'Servitor', time: { from: '2013-09', to: '2014-01' }, text: 'Technical Support and Website Management.' }
      ],
      volunteers: [
        { name: '花蓮環保回收聯盟宣傳App, TW', suffix: 'Game Developer', time: { from: '2019-09', to: '2019-12' }, text: 'Creating stage, Game Testing and Promotional Video Editing' },
        { name: 'Paper: Efficient Fault-Tolerant Routing in IoT Wireless Sensor Networks Based on Bipartite-Flow Graph Modeling', suffix: 'Research Helper', time: { from: '2018-03', to: '2019-01' }, text: 'Write Experiment Code and Collect Experiment Result.' },
        { name: 'Ayana Discord BOT', suffix: 'Translator', time: { from: '2017-10', to: 'now' }, text: 'Translate commands\' description of the BOT.' },
        { name: 'Nekowiz, Fandom Wiki, TW', suffix: 'Wiki Manager', time: { from: '2016-01', to: 'now' }, text: 'Update wiki data, Research and Manage wiki inner-tools, Developing third-party tools for wiki.' },
        { name: 'G0V Community, TW', suffix: 'Developer', time: { from: '2014-11', to: '2016-12' }, text: 'Update UI for 2 projects (council-voter-guide, itaigi).' },
        { name: 'NCHU IT Club, TW', suffix: 'Tutor and Helper', time: { from: '2013-09', to: '2015-06' }, text: 'Helping courses (HTML, CSS).' },
        { name: 'NCHU Student Council, TW', suffix: 'Developer', time: { from: '2012-09', to: '2014-06' }, text: 'Help Developing Official Website and Design UI of Activity Website.' }
      ],
      educations: [
        { name: 'National Taiwan University of Science and Technology', suffix: 'Master Student', text: 'Study in Computer Science and Information Engineering, received Master Degree.', time: { from: '2019-09', to: '2022-08' } },
        { name: 'Fu Jen Catholic University', suffix: 'Bachelor Student', text: 'Study in Computer Science and Information Engineering, received Bachelor Degree.', time: { from: '2015-09', to: '2019-08' } },
        { name: 'National Chung Hsing University', suffix: 'Bachelor Student', text: 'Study in Electronic Engineering, quit at senior.', time: { from: '2012-09', to: '2015-01' } },
        { name: 'Taipei Private Tsai Hsing School', suffix: 'Senior High School Student', text: 'Study in Mathematical Gifted Class', time: { from: '2009-09', to: '2012-08' } },
        { name: 'Taipei Private Tsai Hsing School', suffix: 'Junior High School Student', text: 'Study in Normal Class', time: { from: '2006-09', to: '2009-08' } }
      ],
      skills: [
        {
          groupName: 'Front End',
          groupItems: [
            { name: 'JavaScript', items: ['React', 'Vue', 'jQuery'] },
            { name: 'CSS', items: ['Sass', 'Purecss', 'Bootstrap'] },
            { name: 'HTML' }
          ]
        },
        {
          groupName: 'Back End',
          groupItems: [
            { name: 'NodeJS', items: ['Express'] },
            { name: 'PHP', items: ['Laravel'] },
            { name: 'Ruby', items: ['Rails'] },
            { name: 'DBMS', items: ['MySQL', 'MongoDB'] },
            { name: '.Net', items: ['ASP.NET'] }
          ]
        },
        {
          groupName: 'DevOps',
          groupItems: [
            { name: 'Virtual Machine', items: ['Docker', 'Vagrant', 'VirtualBox', 'VMWare'] },
            { name: 'Version Control', items: ['Git'] },
            { name: 'Server', items: ['Nginx', 'Apache'] },
            { name: 'DBMS', items: ['MySQL', 'MongoDB'] },
            { name: 'Shell Scripts' },
            { name: 'Opening System', items: ['Windows & Windows Server', 'Ubuntu & Debian', 'CentOS & Fedora', 'Archlinux'] }
          ]
        },
        {
          groupName: 'Programming',
          groupItems: [
            { name: 'Console', items: ['C/C++', 'Python 3', 'Ruby', 'C#'] },
            { name: 'Graphical UI', items: ['WPF(C#)', 'Unity(C#)', 'Qt(C++)', 'Shoes(Ruby)'] },
            { name: 'Hardware', items: ['Andes(C)', 'Arduino(C)', 'Xilinx(C & Verilog)'] },
            { name: 'Math', items: ['Matlab', 'Lingo'] }
          ]
        }
      ],
      languages: [
        { name: 'Traditional Chinese', text: 'native' },
        { name: 'English', text: 'middle' },
        { name: 'Japanese', text: 'still learning' },
        { name: 'Korean', text: 'still learning' }
      ]
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
    }
  }
  .row {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 30px;
    transition: all .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: 1s 1 normal resume_slideIn_directionTop;
    animation-delay: calc(var(--i) * 0.25 + .25s);
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

  .blank {
    height: 100px;
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
