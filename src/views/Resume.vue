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
        <p class="content-text">A person who is waiting for military service. He will try to fing some works about frontend and user experience.</p>
      </div>
      <div class="row" style="--i: 2s;">
        <h2 class="title">Contact</h2>
        <div class="content-items">
          <div class="content-item" v-for="contact in contacts" :key="`contact-${contact.name}`">
            <h3>{{ contact.name }}</h3>
            <p class="stick" v-if="contact.link"><a v-bind:href="contact.link">{{ contact.text }}</a></p>
            <p class="stick" v-else>{{ contact.text }}</p>
          </div>
        </div>
      </div>
      <div class="row" style="--i: 3s;">
        <h2 class="title">Profile</h2>
        <div class="content-items">
          <div class="content-item" v-for="profile in profiles" :key="`profile-${profile.name}`">
            <h3>{{ profile.name }}</h3>
            <p class="stick" v-if="profile.link"><a v-bind:href="profile.link" target="_blank">{{ profile.text }}</a></p>
            <p class="stick" v-else>{{ profile.text }}</p>
          </div>
        </div>
      </div>
      <div class="row" style="--i: 4s;">
        <h2 class="title">Works</h2>
        <div class="content-items">
          <div class="content-item wide" v-for="work in works" :key="`work-${work.name}`">
            <h3>
              {{ work.name }} <span class="position">as {{ work.position }}</span>
              <br>
              <span class="time">
                <i class="fa-solid fa-calendar"></i>
                {{ work.time.from }} - {{ work.time.to }}
              </span>
            </h3>
            <p class="indent">
              <i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;&nbsp;
              {{ work.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="row" style="--i: 5s;">
        <h2 class="title">Volunteers</h2>
        <div class="content-items">
          <div class="content-item wide" v-for="volunteer in volunteers" :key="`volunteer-${volunteer.name}`">
            <h3>
              {{ volunteer.name }} <span class="position">as {{ volunteer.position }}</span>
              <br>
              <span class="time">
                <i class="fa-solid fa-calendar"></i>
                {{ volunteer.time.from }} - {{ volunteer.time.to }}
              </span>
            </h3>
            <p class="indent">
              <i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;&nbsp;
              {{ volunteer.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="row" style="--i: 6s;">
        <h2 class="title">Education</h2>
        <div class="content-items">
          <div class="content-item wide" v-for="education in educations" :key="`education-${education.name}`">
            <h3>
              {{ education.name }}
              <br>
              <span class="position">
                <i class="fa-solid fa-graduation-cap"></i>
                {{ education.department }}
              </span>
            </h3>
            <p class="indent">
              <i class="fa-solid fa-calendar"></i>&nbsp;&nbsp;&nbsp;
              <span class="time">{{ education.time.from }} - {{ education.time.to }}</span>
              <br>
              <span>{{ education.strike ? 'as' : 'received' }}</span> {{ education.degree }}
            </p>
          </div>
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
          <div class="content-item" v-for="language in languages" :key="`language-${language.name}`">
            <h3>{{ language.name }}</h3>
            <p class="stick">{{ language.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Resume = defineComponent({
  data () {
    return {
      contacts: [
        { name: 'email', text: 's890081tonyhsu@gmail.com', link: 'mailto:s890081tonyhsu@gmail.com' },
        { name: 'phone', text: '0953347659' },
        { name: 'facebook', text: 'davistonyhsu', link: 'https://fb.me/davistonyhsu' }
      ],
      profiles: [
        { name: 'website', text: 's890081tonyhsu.github.io', link: 'https://s890081tonyhsu.github.io' },
        { name: 'linkedin', text: 'Hsu, Meng Chien', link: 'https://www.linkedin.com/in/otomesound' },
        { name: 'github', text: 's890081tonyhsu', link: 'https://github.com/s890081tonyhsu' },
        { name: 'wiki', text: 'NanaIro no Sora', link: 'http://nairosora.lionfree.net' }
      ],
      works: [
        { name: 'NCHU Office of International Affairs', position: 'Servitor', time: { from: '2013-09', to: '2014-01' }, text: 'Technical Support and Website Management.' }
      ],
      volunteers: [
        { name: '花蓮環保回收聯盟宣傳App, TW', position: 'Game Developer', time: { from: '2019-09', to: '2019-12' }, text: 'Creating stage, Game Testing and Promotional Video Editing' },
        { name: 'Paper: Efficient Fault-Tolerant Routing in IoT Wireless Sensor Networks Based on Bipartite-Flow Graph Modeling', position: 'Research Helper', time: { from: '2018-03', to: '2019-01' }, text: 'Write Experiment Code and Collect Experiment Result.' },
        { name: 'Ayana Discord BOT', position: 'Translator', time: { from: '2017-10', to: 'now' }, text: 'Translate commands\' description of the BOT.' },
        { name: 'Nekowiz, Fandom Wiki, TW', position: 'Wiki Manager', time: { from: '2016-01', to: 'now' }, text: 'Update wiki data, Research and Manage wiki inner-tools, Developing third-party tools for wiki.' },
        { name: 'G0V Community, TW', position: 'Developer', time: { from: '2014-11', to: '2016-12' }, text: 'Update UI for 2 projects (council-voter-guide, itaigi).' },
        { name: 'NCHU IT Club, TW', position: 'Tutor and Helper', time: { from: '2013-09', to: '2015-06' }, text: 'Helping courses (HTML, CSS).' },
        { name: 'NCHU Student Council, TW', position: 'Developer', time: { from: '2012-09', to: '2014-06' }, text: 'Help Developing Official Website and Design UI of Activity Website.' }
      ],
      educations: [
        { name: 'National Taiwan University of Science and Technology', department: 'Computer Science and Information Engineering', degree: 'Master Degree', time: { from: '2019-09', to: '2022-08' } },
        { name: 'Fu Jen Catholic University', department: 'Computer Science and Information Engineering', degree: 'Bachelor Degree', time: { from: '2015-09', to: '2019-08' } },
        { name: 'National Chung Hsing University', department: 'Electronic Engineering', degree: 'Bachelor Student', time: { from: '2012-09', to: '2015-01' }, strike: true },
        { name: 'Taipei Private Tsai Hsing School', department: 'Mathematical Gifted Class', degree: 'High School Graduation Degree', time: { from: '2009-09', to: '2012-08' } },
        { name: 'Taipei Private Tsai Hsing School', department: 'Normal Class', degree: 'Junior Middle School Graduation Degree', time: { from: '2006-09', to: '2009-08' } }
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
            { name: 'Python 3', items: ['Django'] }
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
            { name: 'Hareware', items: ['Andes(C)', 'Arduino(C)', 'Xilinx(C & Verilog)'] }
          ]
        }
      ],
      languages: [
        { name: 'Traditional Chinese', text: 'native' },
        { name: 'English', text: 'middle' },
        { name: 'Japanese', text: 'need translator' },
        { name: 'Korean', text: 'need translator' }
      ]
    }
  }
})

export default Resume
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
    .content-item {
      width: 250px;
      float: left;
      &.wide {
        width: 100%;
      }
      h3 {
        line-height: 1.8em;
        color: #DDD;
        text-transform: capitalize;
        span {
          color: #AAA;
          font-size: 0.8em;
        }
      }
      .stick {
        margin-top: -0.75em;
      }
      .indent {
        padding-left: 2em;
        text-indent: -2em;
      }
      .time {
        color: #AAA;
        font-size: 1em;
        font-weight: 700;
      }
      p, a, ul {
        color: #888;
      }
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
