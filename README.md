<!--
"Don't fear the reaper"♩♫♭
![image](https://octodex.github.com/images/grim-repo.jpg)
-->
<div id="loading-screen" class="active">
  <style>
    .description-of-logo{
      left:1%;
      color:#800;
      opacity:0;
      position:absolute;
      top:-140px;
      width:100%;
      text-align:center;
      font-size:10px;
      -webkit-transition: all 500ms ease-in-out;
      -moz-transition: all 500ms ease-in-out;
      -ms-transition: all 500ms ease-in-out;
      -o-transition: all 500ms ease-in-out;
      transition: all 500ms ease-in-out;
    }
    .logo-hook:hover .description-of-logo.active{opacity:1;}
    .logo-hook{
      position:absolute;
      width:100%;
      top:50%;
      left:0;
    }
    .logo-letter{
      animation: animationLogoLetter;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
    .logo-letter:nth-of-type(1){animation-delay: 0.1s;}
    .logo-letter:nth-of-type(2){animation-delay: 0.2s;}
    .logo-letter:nth-of-type(3){animation-delay: 0.3s;}
    .logo-letter:nth-of-type(4){animation-delay: 0.4s;}
    .logo-letter:nth-of-type(5){animation-delay: 0.5s;}
    .logo-letter:nth-of-type(6){animation-delay: 0.6s;}
    .logo-letter:nth-of-type(7){animation-delay: 0.7s;}
    .logo-letter:nth-of-type(8){animation-delay: 0.8s;}
    .logo-letter:nth-of-type(9){animation-delay: 0.9s;}
    .logo{
      position:absolute;
      left:10%;
      width:81%;
      text-align:center;
      color:#f00;
      font-family:Arial;
    }
    .logo.name{top:-120px;}
    .logo.soft{top:-100px;}
    .animation-box{
      position: relative;
      width:100%;
      height:100%;
    }
    .loading-circle-hook{
      width:0;
      height:0;
      position:absolute;
      top:50%;
      left:50%;
    }
    .in{position: relative;}
    .loading-circle{
      position:absolute;
      width:100px;
      height:100px;
      border-radius:100%;
      top:-50px;
      left:-50px;
      animation: circleAnimation;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-duration: 2s;
    }
    .pure-anchor{
      text-decoration:none;
      color:#000;
    }
    #loading-screen{
      background:#000;
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:0%;
      overflow: hidden;
      opacity:0;
      -webkit-transition: all 400ms ease-in-out;
      -moz-transition: all 400ms ease-in-out;
      -ms-transition: all 400ms ease-in-out;
      -o-transition: all 400ms ease-in-out;
      transition: all 400ms ease-in-out;
      z-index: 9999;
    }
    #loading-screen.active{
      height:100%;
      opacity:1;
    }
    @keyframes animationLogoLetter{
      0%{color:#f00;}
      10%{color:#800;}
      20%{color:#f00;}
      100%{color:#f00;}
    }
    @keyframes circleAnimationInStop{
      0%{transform: rotate(0deg);}
      50%{transform: rotate(-180deg);}
      100%{transform: rotate(-360deg);}
    }
    @keyframes circleAnimation{
      0%{
        border-left:10px solid #f00;
        border-right:10px solid #f00;
        border-top:10px solid #f00;
        border-bottom:10px solid #f00;
        border-radius:100%;
        transform: rotate(0deg);
      }
      25%{
        border-left:10px solid #f00;
        border-right:10px solid #f00;
        border-top:10px solid #f00;
        border-bottom:8px dashed #fff;
        border-radius:50%;
        transform: rotate(90deg);
      }
      50%{
        border-top:10px solid #f00;
        border-right:10px solid #f00;
        border-left:6px dashed #fff;
        border-bottom:6px dashed #fff;
        border-radius:0%;
        transform: rotate(180deg);
      }
      75%{
        border-right:10px solid #f00;
        border-left:4px dashed #fff;
        border-top:4px dashed #fff;
        border-bottom:4px dashed #fff;
        border-radius:0%;
        transform: rotate(270deg);
      }
      90%{
        border-left:2px dashed #fff;
        border-right:2px dashed #fff;
        border-top:2px dashed #fff;
        border-bottom:2px dashed #fff;
        border-radius:0%;
      }
      100%{
        border-left:10px solid #f00;
        border-right:10px solid #f00;
        border-top:10px solid #f00;
        border-bottom:10px solid #f00;
        border-radius:100%;
        transform: rotate(360deg);
      }
    }
    @keyframes hideLoading{
      from {top:0;}
      to {top:-100%;}
    }
  </style>
  <div class="animation-box">
    <div class="logo-hook">
      <div class="in">
        <div class="description-of-logo active">CLICK HERE TO VISIT MORE</div>
        <div class="logo name">
          <a class="pure-anchor homesite" target="_blank" href="http://sarverott.com/">
            <span class="logo-letter">S</span>
            <span class="logo-letter">A</span>
            <span class="logo-letter">R</span>
            <span class="logo-letter">V</span>
            <span class="logo-letter">E</span>
            <span class="logo-letter">R</span>
            <span class="logo-letter">O</span>
            <span class="logo-letter">T</span>
            <span class="logo-letter">T</span>
          </a>
        </div>
        <div class="logo soft">
          <a class="pure-anchor homesite" target="_blank" href="http://sarverott.com/">
            <span class="logo-letter">S</span>
            <span class="logo-letter">O</span>
            <span class="logo-letter">F</span>
            <span class="logo-letter">T</span>
            <span class="logo-letter">W</span>
            <span class="logo-letter">A</span>
            <span class="logo-letter">R</span>
            <span class="logo-letter">E</span>
          </a>
        </div>
      </div>
    </div>
    <div class="loading-circle-hook">
      <div class="in">
        <div class="loading-circle"></div>
      </div>
    </div>
  </div>+
</div>
<!--<img src="https://octodex.github.com/images/privateinvestocat.jpg" width=300px>-->

<!--
dunes are waiting
![image](https://octodex.github.com/images/dunetocat.png)
-->
<!--
### Hello World! 👋

``` 
                          Asimov’s Three Laws
  ░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓         ▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░ 
 ░░░A robot may not▒▒▒▒▒▓▓▓▓     [-.-]     ▓▓▓▓▒A robot must obey ░░░░░░
░░injure a human being▒▓▓▓▓   »~°┘¤╬¤└°~«   ▓▓▓▓▒the orders given it░░░░░░   
 ░or, through inaction,▒▓▓▓▓      ╝↓╚      ▓▓▓▓▒▒by human beings░░░░░░░░░░ 
  ░░allow a human being▒▒▓▓▓▓      |      ▓▓▓▓▒▒except where such orders░░░░
   ░░to come to harm▒▒▒▒▒▒▓▓▓▓▓    ☼    ▓▓▓▓▓▒▒▒would conflict with░░░░░░░░░ 
    ░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓     ▓▓▓▓▓▓▒▒▒▒▒▒the First Law░░░░░░░░░░░░
      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░ A robot must protect its own existence as long ░░░░░░░░░░
      ░░░░░░░░░░as such protection does not conflict with ░░░░░░░░░░
     ░░░░░░░░░░░░░░░░░░░░ the First or Second Laws░░░░░░░░░░░░░░░░░░░░
```
-->
<!--
**Sarverott/Sarverott** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
