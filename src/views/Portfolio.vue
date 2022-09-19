<template>
  <div class="porfolio-container">
    <div class="porfolio-header">
      <h1>Porfolio</h1>
      <p>The following projects contains website and tools.</p>
    </div>
    <div class="porfolio-row" v-for="(porfolio, idx) in porfolios" :key="`porfolio-${idx}`">
      <div class="porfolio-preview">
        <img v-bind:src="porfolio.image" alt="" v-if="porfolio.image" />
        <div class="no-preview" v-else>
          <i class="fa-solid fa-image"></i>
          <p>No Preview</p>
        </div>
      </div>
      <div class="porfolio-content">
        <h2>{{ porfolio.title }}</h2>
        <div class="porfolio-tags">
          <span class="porfolio-tag" v-for="(tag, i) in porfolio.tags" :key="`porfolio-${idx}-${i}`">{{ tag }}</span>
        </div>
        <p>{{ porfolio.description }}</p>
        <div class="porfolio-links">
          <a v-if="porfolio.project" v-bind:href="porfolio.project" target="_blank"><i class="fa-solid fa-code"></i></a>
          <a v-if="porfolio.demo" v-bind:href="porfolio.demo" target="_blank"><i class="fa-solid fa-globe"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Porfolio = defineComponent({
  data () {
    return {
      porfolios: [
        {
          title: 'Unity Rhythm Game',
          description: 'Implementation of StepMania\'s Sheet Music System in Unity.',
          image: require('@/assets/porfolio/unity-rhythm-game.jpeg'),
          project: 'https://github.com/s890081tonyhsu/unity-rhythm-game',
          tags: ['Unity', 'C#']
        },
        {
          title: 'NekowizTW cardFinder',
          description: 'A tool which can search cards by parameters, share a team for nekowiz.',
          image: require('@/assets/porfolio/nekowiztw-cardfinder.png'),
          project: 'https://github.com/NekowizTW/cardFinder',
          demo: 'https://nekowiztw.github.io/cardFinder/#/',
          tags: ['React', 'Redux', 'Lodash', 'Sass', 'Webpack']
        },
        {
          title: 'NekowizTW fairyMaker',
          description: 'A tool which can make a in-game like card.',
          image: require('@/assets/porfolio/nekowiztw-fairymaker.png'),
          project: 'https://github.com/s890081tonyhsu/fairyMaker',
          demo: 'https://s890081tonyhsu.github.io/fairyMaker/',
          tags: ['HTML', 'CSS', 'JavaScript']
        }
      ]
    }
  }
})

export default Porfolio
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
    .porfolio-row {
      border: 1px solid #AAA;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: top;
      margin: 10px 0 10px;
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        margin: -1px;
        background-color: black;
        border: 1px solid black;
        border-radius: 0 20% 0 20%;
        z-index: 0;
        transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
        animation: .5s 1 normal porfolio_draw_border;
        animation-fill-mode: backwards;
        animation-delay: .5s;
      }
      .porfolio-preview {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        z-index: 2;
        transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
        animation: 1s 1 normal porfolio_img_scale;
        animation-fill-mode: backwards;
        animation-delay: 1s;
        img {
          width: 250px;
          height: 250px;
          object-fit: cover;
          border-radius: 20px;
        }
      }
      .porfolio-tags {
        position: relative;
        .porfolio-tag {
          float: left;
          height: 24px;
          line-height: 24px;
          position: relative;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 9px;
          margin-left: 20px;
          background: #FFF;
          color: #000;
          border-bottom-right-radius: 4px;
          border-top-right-radius: 4px;
          padding: 0 10px 0;
          &:before {
            content: "";
            float: left;
            position: absolute;
            top: 0;
            left: -12px;
            width: 0;
            height: 0;
            border-color: transparent #FFF transparent transparent;
            border-style: solid;
            border-width: 12px 12px 12px 0;
          }
          &:after {
            content: "";
            position: absolute;
            top: 10px;
            left: 0;
            float: left;
            width: 4px;
            height: 4px;
            border-radius: 2px;
            background: #000;
          }
        }
      }
      .porfolio-content {
        display: flex;
        flex-direction: column;
        width: calc(100% - 300px);
        padding: 50px;
        z-index: 2;
        transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
        animation: 1s 1 normal porfolio_slideIn_directionTop;
        animation-fill-mode: backwards;
        animation-delay: 1s;
      }
      .porfolio-links {
        position: absolute;
        top: -1em;
        right: 1em;
        background-color: black;
        transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
        animation: 1s 1 normal porfolio_slideIn_directionTop;
        animation-fill-mode: backwards;
        animation-delay: 1s;
        a {
          color: white;
          font-size: 2em;
          padding: 0 .25em 0;
          border-radius: 100%;
        }
      }
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

  @keyframes porfolio_img_scale {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
</style>
