<div align="center">
  
<img src="https://user-images.githubusercontent.com/116925227/227818788-9c57709a-9f96-48c1-920c-a12d04da7ae8.png" width="30%" height="15%" />

### WELCOME TO YOUR CODING COMMUNITY

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Sans&size=40&pause=1000&color=FFC1FE&center=true&vCenter=true&width=435&lines=Brainwaves" alt="Typing SVG" /></a>

### Built by: **[Anthony Khong](https://www.linkedin.com/in/anthonykhong956/)**, **[Allan Moralles](https://www.linkedin.com/in/ivanallin/)**, & **[Kendall Johnson](https://www.linkedin.com/in/kendalljohnson-se/)**

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Heroku badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Node.js badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Tailwind badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

  
**_Click the following link to be redirected to the live version of the code!_**

## [Syntaxify](https://syntaxify1.herokuapp.com/)

### Description:

**_Syntaxify_** is a Full-Stack Web Application that utilizes Node.js, Express.js, MongoDB, Mongoose, Tailwind Css, and JavaScript to create a fully immersive experience for users to expand their understanding of the three main sectors of programming, LANGUAGES, FRAMEWORKS, and DATABASES. Do you think a certain page is out of date? Maybe it is missing information on one of your favorite capabilities. Well with a Syntaxify account (via Google oAuth) you can submit updates to your liking to help the ever-expanding coding community learn more! Want to start a conversation about your personal experience with a specific language? Go right ahead within the comment section, just make sure you sign in first!

## :link: Associated Links:

Click the following link to be redirected to the planning board of the code! [Trello](https://trello.com/b/bYhdkBv9/syntaxify-user-stories)
  
</div>

## :camera_flash: Visuals and Helpful Insight (Getting Started):

### Landing Page

![loginPage](https://user-images.githubusercontent.com/116925227/229010602-aef7bde9-ca2a-40c5-b19b-84799f12dc5d.gif)

Welcome to Syntiaxify! Log in in order to access the technologies displayed within ou website.

### Main Page

![indexpage](https://user-images.githubusercontent.com/116925227/229011921-d6f2fe16-fc03-4d44-bb13-d0c6a2994f17.gif)

An index page containing languages, frameworks, and databases typically serves as a reference guide for developers and programmers.

### Languages Page

![language](https://user-images.githubusercontent.com/116925227/229010718-5a3fcc97-d315-43fe-b6e2-35d0d773219f.png)

Find information on the different languages used in programming.

### Frameworks Page

![framework](https://user-images.githubusercontent.com/116925227/229011034-3d40610a-b086-4ae7-851c-feaed295fc67.png)

Contains various frameworks used in the field of software engineering.

### Databases Page

![database](https://user-images.githubusercontent.com/116925227/229011231-7eac022e-a055-4c30-a1ec-207afaaa610a.png)

List of databases used by programmers to store data relevant to their projects.

### Add new information!

![Add](https://user-images.githubusercontent.com/116925227/229011388-b573d322-e986-460a-9aa5-81ee1935941c.png)

Feel free to add new technologies!

### Discuss a technology with others!

![details](https://user-images.githubusercontent.com/116925227/229011409-afec63bb-bfe4-4b5d-8ca1-fd0181d7d1b3.png)

Discuss your thoughts on a particular technology amongst other users.

## :computer: Technologies Used

- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![Heroku badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
- ![Node.js badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Tailwind badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![MongoDB badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Express.js badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## The Code Behind The Program:

```
async function editLanguage(req, res) {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const language = await Language.findById(id);
    if (!language) {
      return res.status(404).send("Language not found");
    }
    language.content = content;
    await language.save();
    res.redirect(`/documentations/languages/${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

```

### The preceeding code displays our edit functionality, one of the fundemental CRUD operators in action. This one specifically allows the user to edit a specific language and add/change any information they deem fit!

## :chart_with_upwards_trend: Looking Forward

We here at SYNTAXIFY have a few key changes we hope to implement in the near future to increase the functionality of the website. They are as follows:

- [ ] Allow users to respond to other comments
- [ ] Ability to take notes on various technologies available on the website
- [ ] Add adequate responsive design
