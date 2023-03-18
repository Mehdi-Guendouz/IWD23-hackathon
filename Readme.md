# AiDoc

This is the [AiDoc](https://github.com/MehidGN/IWD23-hackathon)  project bootstrapped using `React-JS Node-js Express.js Mongodb  Tailwind CSS and Sass CSS Framer-motion Materil UI Flask Python Jupyter Notebook`.


AiDoc provides patients with an easy and efficient way to access medical care by connecting them to the right doctor based on their symptoms. By using AI technology, the platform is able to suggest the most appropriate doctor and appointment times based on the doctor's availability. The rating system for both patients and doctors also helps to ensure that patients are receiving high-quality care from qualified and reliable healthcare professionals.
Additionally, AiDoc can help to reduce wait times for patients, as they can quickly book appointments with doctors who are available at a convenient time, help with patient’s money waste since they no longer have to try multiple doctors nor be guided to ones that do not concern their illnesses, in addition to being able to keep their privacy and confidentiality since the first one option to find a good doctor has always been “a friend”. 
The platform also allows patients to access medical care from the comfort of their own homes in some cases that do not require physical medical diagnosis, which can be particularly beneficial for individuals who are unable to travel to a doctor's office.
## Getting Started

### First, Install dependencies in both the client and server directories:

```bash
cd client
npm install
```

```bash
cd ../server
npm install
```

### Second, Usage

#### Start the server:

```bash
cd server
npm start
```
#### Then open a new terminal and Start the client:
```bash
cd ../client
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The file structure:

The project is devided in three section client AI and server

```bash
    └── repository/
    ├── Ai/
    │   ├── _pycache_
    │   ├── model
    │   └── templates
    ├── client/
    │   ├── node_modules
    │   ├── public
    │   └── src/
    │       ├── components/
    │       │   ├── chat
    │       │   ├── dashleft
    │       │   ├── dashRight
    │       │   ├── doctor-profle
    │       │   ├── doctors
    │       │   ├── footer
    │       │   ├── hero
    │       │   ├── navbar
    │       │   ├── sevice
    │       │   ├── steps
    │       │   └── treatment
    │       ├── context
    │       ├── hooks
    │       ├── icons
    │       ├── img
    │       └── pages
    └── server/
        ├── controllers
        ├── middleware
        ├── models
        └── routes
```

#### The client contains the front-end side using React, the server contains the back-end, and the AI model is in the AI folder.s in the AI folder

### Content

There are mainly 7 pages starting with the: `landing page / login / sign up / Doctor profile / Medical History / Chat Ai / Dashboard`, and there is the mobile version without implementation.

About the server, we have: `rating system / authentication / appointment / doctor & visitor / recommendation (using AI)`.

About the AI, we have been able to achieve 97% accuracy, and we linked the AI with the back-end using Flask with Express.js.