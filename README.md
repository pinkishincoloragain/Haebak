<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="#">
    <img src="/client/src/assets/image/mainPage.png" alt="Logo">
  </a>

  <h1 align="center">KNU HOUSE</h1>

  <p align="center">
    경북대학교 SW 해커톤
    <br />
    <a href="https://knuhouse.netlify.app/"><strong>GO WEBSITE »</strong></a>
    <br />
    <a href="https://youtu.be/TtNB2HZGskw"><strong>VIEW DEMO »</strong></a>
    <br />
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary></summary>
  <ol>
    <li>
      <a href="#about-the-project">About the KNUHOUSE</a>
      <ul>
        <li><a href="#built-with">Purpose</a></li>
        <li><a href="#built-with">Tech stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting started</a>
      <ul>
        <li><a href="#installation">prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributor">Contributor</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

COVID-19로 변화된 대학 생활을 맞으며, 많은 첨성인들이 모르는 동기들과 선후배, 교수님들과 소통할 수 있는 기회가 줄어들었습니다.
교수님들은 학생들과 소통이 이전만큼 이루어지지 않아 아쉬워하며, 학생들은 선후배 및 동기의 얼굴조차 모르는 경우가 많아졌습니다.

그리하여 사용자들에게 익명으로 질문을 남기고, 같은 학과의 익명의 사람들이 질문에 대한 답을 할 수 있는 서비스인 **KNUHOUSE** 프로젝트를 진행하게 되었습니다.

저희의 목표는

* 코로나로 인하여 단절된 선/후배 및 교수님들의 소통을 장려하고,
* 텍스트보다는 서로의 목소리로 타인과 소통을 지향하는 것입니다.
* 또한 철저한 익명의 환경에서 질문을 남기고 답을 할 수 있어, 자신의 정보가 노출될 걱정없이 마음을 털어놓을 수 있게 하는 것입니다.

저희 웹사이트는

* 사용자들의 질문을 랜덤으로 선정하여 답변을 남길 수 있습니다.
* 답변이 달린 질문은 다른 사람들의 추가 답변은 불가능하고, 질문자만이 해당 답변을 확인할 수 있습니다.

### Built With

* [Reactjs](https://ko.reactjs.org/)
* [Firebase](https://firebase.google.com/)

## Getting Started

웹 사이트 : https://knuhouse.netlify.app/

### Prerequisites

* [Firebase](https://firebase.google.com/) 에 방문하여 API key를 발급받습니다.
* export your keys with .env file on client/.env directory
* 발급받은 파이어베이스 API 키를 client/.env 디렉토리에 파일을 생성합니다.
* 발급받은 API 키를 env 파일에 삽입합니다.

### Installation

How to build Website
* 레퍼지토리를 클론합니다.
  ```sh
  git clone https://github.com/pinkishincoloragain/Haebak
  ```

* client 디렉토리로 이동합니다.
  ```sh
  cd client
  ```
* npm install
  ```sh
  npm install
  ```

* 로컬 서버에서 
  ```sh
  npm start
  ```
  or 
    ```sh
  yarn start
  ```

## Usage

* 경북대학교 계정으로 회원가입을 진행합니다.
* 경북대학교 계정으로 발송된 계정 인증 이메일로 재학생을 인증하고, 로그인을 합니다.
* 질문하기 기능으로, 소속학과 교수님, 선후배 및 동기들의 답변이 필요한 질문을 녹음합니다.
* 답변하기 기능으로, 랜덤으로 선정된 해당 학과의 질문에 대한 답변을 녹음합니다. 
* 제출한 질문은 마이페이지에 저장되며, 질문에 대한 답변이 제출되는 경우 답변 또한 함께 저장되어 확인할 수 있습니다.

## Contributor

[pinkishincoloragain](https://github.com/pinkishincoloragain)

[woong-jae](https://github.com/woong-jae)

[SeongukBaek](https://github.com/SeongukBaek)

[KingDonggyu](https://github.com/KingDonggyu)
