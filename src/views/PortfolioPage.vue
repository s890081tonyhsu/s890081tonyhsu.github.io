<template>
  <div class="porfolio-container">
    <div class="porfolio-header">
      <h1>Porfolio</h1>
      <p>The following are the projects I have participated. Each project has attached technology tags and a screenshot.<br>Some projects can be linked to the source code or Demo page.</p>
    </div>
    <PorfolioRow v-for="(porfolio, idx) in porfolios" :key="`porfolio-${idx}`" :porfolioIdx="idx" :porfolioRowData="porfolio" :focusCallback="selectPreview" />
    <div class="blank"></div>
    <div class="porfolio-display" v-if="displayIdx !== -1">
      <img v-bind:src="porfolios[displayIdx].image" alt="" v-if="porfolios[displayIdx].image" />
      <div class="no-preview" v-else>
        <i class="fa-solid fa-image"></i>
        <p>No Preview</p>
      </div>
      <h2>{{ porfolios[displayIdx].title }}</h2>
      <div class="xmark" @click="() => clearPreview()">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PorfolioRow from '@/components/PorfolioRow.vue'

const PorfolioPage = defineComponent({
  components: {
    PorfolioRow
  },
  data () {
    return {
      displayIdx: -1,
      porfolios: [
        {
          title: 'NekowizTW cardFinder',
          description: 'A tool which can search cards by parameters, share a team for nekowiz.',
          image: require('@/assets/porfolio/nekowiztw-cardfinder.png'),
          links: {
            project: 'https://github.com/NekowizTW/cardFinder',
            demo: 'https://nekowiztw.github.io/cardFinder/#/'
          },
          tags: ['React', 'Redux', 'Lodash', 'Sass', 'Webpack']
        },
        {
          title: 'NekowizTW fairyMaker',
          description: 'A tool which can make a in-game like card.',
          image: require('@/assets/porfolio/nekowiztw-fairymaker.png'),
          links: {
            project: 'https://github.com/s890081tonyhsu/fairyMaker',
            demo: 'https://s890081tonyhsu.github.io/fairyMaker/'
          },
          tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Unity Rhythm Game',
          description: 'Implementation of StepMania\'s Sheet Music System in Unity.',
          image: require('@/assets/porfolio/unity-rhythm-game.jpeg'),
          links: {
            project: 'https://github.com/s890081tonyhsu/unity-rhythm-game'
          },
          tags: ['Unity', 'C#']
        },
        {
          title: 'Flux Based SCADA System in Factory (FJU Graduation Project)',
          description: 'A prototype project which is using flux to manage a SCADA(supervisory control and data acquisition) system.',
          image: require('@/assets/porfolio/fju-graduation-project.png'),
          tags: ['NodeJS', 'Flux']
        },
        {
          title: 'Pocket Judge (FJU Database Project)',
          description: 'A prototype project which is managing at least 50k papers for searching.',
          image: require('@/assets/porfolio/fju-database-project.png'),
          tags: ['Ruby on Rails', 'MySQL']
        }
      ]
    }
  },
  methods: {
    selectPreview (idx: number) {
      this.displayIdx = idx
    },
    clearPreview () {
      this.displayIdx = -1
    }
  }
})

export default PorfolioPage
</script>

<style lang="scss">
  .porfolio-container {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    .porfolio-header {
      margin-bottom: 50px;
      transition: all .25s cubic-bezier(1, 0.5, 0.8, 1);
      animation: .5s 1 normal porfolio_slideIn_directionTop;
      animation-fill-mode: backwards;
    }
  }
  .porfolio-display {
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.65);
    transition: all .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: .5s 1 normal porfolio_slideIn_directionTop;
    animation-fill-mode: backwards;
    img {
      width: 95%;
      height: auto;
      object-fit: contain;
    }
    h2 {
      position: fixed;
      line-height: 3em;
      background: rgba(0, 0, 0, 0.65);
      left: 0;
      bottom: 0;
      padding: 0 1em 0 1em;
    }
    .xmark {
      position: fixed;
      background: #000;
      right: 0;
      top: 0;
      padding: 0 .25em 0 .25em;
      font-size: 2em;
      cursor: pointer;
    }
  }
  @media (max-width: 959px) {
    .porfolio-container {
      padding-top: 100px;
      .porfolio-header {
        width: 95%;
      }
      .porfolio-row {
        width: 95%;
        flex-direction: column;
        align-items: center;
        margin: 20px 0 20px;
        &:before {
          border-radius: 0 300px 0 300px;
        }
        .porfolio-content {
          width: 100%;
          padding-top: 0;
          z-index: 2;
        }
        .porfolio-links {
          position: absolute;
          top: auto;
          right: auto;
          bottom: -1em;
          left: 50px;
        }
      }
    }
  }

  @keyframes porfolio_slideIn_directionTop {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes porfolio_draw_border {
    from {
      border-radius: 0;
    }

    to {
      border-radius: 0 20% 0 20%;
    }
  }
</style>
