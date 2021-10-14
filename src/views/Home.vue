<template>
  <div class="home plx-card">
    <div class="pxc-bg"></div>
    <div class="pxc-avatar">
      <img src="https://s.gravatar.com/avatar/0ec1384d1af2578b03a7543060bf3956?s=128&r=pg"/></div>
    <div class="pxc-stopper"></div>
    <div class="pxc-subcard">
      <div class="pxc-title">OtomeSound</div>
      <div class="pxc-sub">A front-end developer with addition backend skill.</div>
      <div class="pxc-feats">
        <div class="pxc-column">
          <h4>FrontEnd</h4>
          <p v-for="item in frontEnd" :key="item">{{item}}</p>
        </div>
        <div class="pxc-column">
          <h4>BackEnd</h4>
          <p v-for="item in backEnd" :key="item">{{item}}</p>
        </div>
        <div class="pxc-column">
          <h4>DevOps</h4>
          <p v-for="item in devOps" :key="item">{{item}}</p>
        </div>
        <div class="pxc-column">
          <h4>Others</h4>
          <p v-for="item in Others" :key="item">{{item}}</p>
        </div>
      </div>
      <div class="pxc-tags">
      </div>
      <div class="bottom-row">
        <div class="pxc-info">
          <div class="flags"></div>
          <div class="region"></div>
        </div>
        <div class="links">
          <a class="site" uk-tooltip="WEBSITE" href="http://s890081tonyhsu.github.io">
            <i class="fas fa-globe-americas"></i>
          </a>
          <a class="link" uk-tooltip="GITHUB LINK" href="https://github.com/s890081tonyhsu">
            <i class="fab fa-github"></i>
          </a>
          <a class="link" uk-tooltip="TWITTER LINK" href="https://twitter.com/OtomeSound">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Home = defineComponent({
  data () {
    return {
      frontEnd: ['React', 'Vue', 'Sass'],
      backEnd: ['Lavarel', 'Ruby on Rails'],
      devOps: ['Docker', 'Vagrant'],
      Others: ['Unity', 'C++']
    }
  }
})

export default Home
</script>

<style lang="scss">
  $customBackCol: #8855DD;
  $pink: #F58;
  $c1: white;
  $c2: darken(white, 20%);
  $break-med: 960px;
  $break-small: 768px;
  $cardCol: rgba(0, 0, 0, 0.65);

  .plx-card {
    transition: all 600ms ease;
    max-width: 1100px;
    display: flex;
    position: relative;
    overflow: hidden;
    margin: 30px 0 ;
    filter: drop-shadow(0 2px 1rem #112);
    border-radius: 4px;
    @media screen and (min-width: $break-small) {
      height: 500px;
    }
    @media screen and (max-width: $break-small) {
      height: auto;
      //min-height: 350px;
      width: auto;
      flex-direction: column;
      border-radius: 2px;
      margin: 25px 15px;
    }
  }

  .pxc-avatar {
    transition: all 600ms ease;
    display: flex;
    flex-direction: column;
    height: auto;
    width: 150px;
    justify-content: space-around;
    @media screen and (max-width: $break-small) {
      width: 100%;
      height: 100px  ;
      justify-content: space-around;
      align-items: center;
    }
    img {
      transition: all 600ms ease;
      width: 150px;
      height: 150px;
      border-radius: 100%;
      box-shadow: 0 1px 1rem rgba(10,10,25,.5);
      position: relative;
      z-index: 1;
      @media screen and (max-width: $break-med) {
        width: 125px;
        height: 125px;
      }
      @media screen and (max-width: $break-small) {
        margin-top: 100px;
      }
    }
  }

  .pxc-bg{
    transition: all 600ms ease;
    border-radius: 2px;
    height: 100%;
    width: calc(100% - 75px);
    position: absolute;
    z-index: 0;
    pointer-events: none;
    left: 75px;
    background-size: cover;
    background-position: right;
    background-color: rgba(0, 0, 0, 0);
    @media screen and (max-width: $break-med) {
      left: 50px;
    }
    @media screen and (max-width: $break-small) {
      left: 0;
      top: 0;
      height: 200px;
      width: 100%;
      border-radius: 0;
    }
  }

  .pxc-subcard{
    transition: all 600ms ease;
    border-radius: 3px;
    background: $cardCol;
    width: 650px;
    margin: 25px 200px 25px -25px;
    z-index: 0;
    padding: 15px 25px 15px 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 1rem rgba(10,10,25,.3);
    @media screen and (min-width: $break-small) {
      margin: 0 0 0 -75px;
      padding: 15px 25px 15px 90px;
    }
    @media screen and (max-width: $break-med) {
      margin-right: 120px;
      margin-left: -32px;
    }
    @media screen and (max-width: $break-small) {
      padding: 15px;
      margin: 5px;
      flex: 0 1 auto;
      padding: 60px 25px 20px;
      width: auto;
      height: auto;
      flex: 1 0 auto;
    }
  }
  .pxc-stopper{
    transition: all 600ms ease;
    height: 100%;
    width: calc(60%);
    display: block;
    position: absolute;
    z-index: 0;
    left: 75px  ;
    @media screen and (max-width: $break-med) {
      left: 50px;
    }
    @media screen and (max-width: $break-small) {
      left: 0;
      width: 100%;
      top: 200px;
      height: calc(100% - 200px);
      border-radius: 0;
    }
  }
  .pxc-tags {
    position: absolute;
    bottom: -15px;
    right: 10px;
    height: 32px;
    overflow: hidden;
    text-align: right;

    div {
      color: white;
      display: inline-block;
      background: $customBackCol;
      border-radius: 12px;
      padding: 2px 10px;
      line-height: 1.7;
      margin: 4px 4px;
      font-size: 12px;
      height: 20px;
    }
    @media screen and (max-width: $break-small) {
      height: 64px;
      text-align: center;
      position: relative;
      width: 100%;
      bottom: 0;
      left: 0;
      margin-bottom: 10px;
      div {
        color: $customBackCol;
        border: solid 1px $customBackCol;
        background: transparent;
      }
    }
  }

  .pxc-title {
    font-size: 2.4em;
    margin-bottom: 4px;
    color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 0 0 auto;
    @media screen and (max-width: $break-small) {
      font-size: 1.6em;
      white-space: initial;
      overflow: initial;
      text-overflow: initial;
    }
  }

  .pxc-sub {
    font-size: 1.2em;
    margin: 2px 0 8px 0;
    //max-height: 50px
    flex: 1 1 auto;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 1.0) 80%,transparent 100%);
    color: $c1;
  }

  .pxc-feats {
    display: flex;
    font-size: 1.2em;
    color: $c2;
    flex: 1 1 auto;
    //max-height: 50px
    padding-bottom: 5px;
    margin-bottom: 5px;
    line-height: 1.3;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 1.0) 50%,transparent 100%);

    .pxc-column {
      flex: 1 1 auto;
    }

    @media screen and (max-width: $break-small) {
      font-size: 1em;
      margin-top: 10px;
      text-align: center;
    }
  }

  .bottom-row {
    flex: 0 1 auto;
    margin-top: 10px;
    display: flex;
    justify-items: space-around;
    align-items: center;
    @media screen and (max-width: $break-small) {
      border-top: solid 1px rgba(255,255,255,.05);
      padding-top: 5px;
    }

    .pxc-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: $break-small) {
        position: absolute;
        bottom: -28px;
        left: -10px;
        justify-content: space-between;
        width: 100%;
        .region {
          color: #112;
          font-size: 13px;
          text-transform: uppercase;
        }
      }
    }

    .links {
      display: flex;
      align-content: flex-end;
      flex: 1 0 auto;
      justify-content: flex-end;
      a {
        color: #DDD;
        font-size: 28px;
        text-align: center;
        width: 48px;
        height: 48px;
        display: inline-block;
        margin: 0 10px;
        cursor: pointer;
        &:hover {
          color: #EEF;
        }
      }

      @media screen and (max-width: $break-small) {
        justify-content: center;
        margin-top: 10px;
        margin-bottom: -10px;
        a {
          color: $c1
        }
      }
    }

    .flags {
      overflow: hidden;
      height: 23px;
      span {
        margin: 2px 6px;
        background: white;
        border-radius: 3px;
        width: 24px;
        height: 16px;
        display: inline-block;
      }
    }

    .region {
      color: white;
      margin-left: 8px;
      //background: red
    }
  }
</style>
