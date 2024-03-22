<template>
    <NavbarComp/>
    <div class="container my-5 intro-section">
    <div class="text-center mb-4">
      <h2 class="intro-heading">A sneak peek of our sister company Modest Excellence</h2>
      <p class="intro-description">Discover the vibrant and inspiring profiles of the people who make our sister company, Modest Excellence, truly remarkable. From innovative thinkers to passionate leaders, explore a snapshot of the talent that drives our shared success.</p>
    </div>
    <div class="container my-5 about-me-section">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="https://i.ibb.co/TPCQbSK/cap-image-ams.jpg" class="img-fluid about-me-img">
      </div>
      <div class="col-md-6">
        <h2>About Ammara</h2>
        <p>Ammara is the visionary founder of Modest Elegance, a brand that celebrates the beauty and versatility of hijab fashion. With a deep-rooted passion for the hijab and its empowering essence, Ammara embarked on a journey to inspire and uplift through unique, stylish, and modest designs. Her love for experimenting with diverse hijab styles is at the heart of Modest Elegance, where each piece is crafted with care, creativity, and a touch of elegance. Through her work, Ammara aims to not only offer a wide range of hijab styles that cater to the modern woman but also to foster a community where each individual's choice of modesty is honored and celebrated.</p>
      </div>
    </div>
  </div>
      <div class="row">
        <div class="col-md-4 mb-4 animate__animated animate__lightSpeedInRight" v-for="(image, index) in images" :key="index">
          <div class="profile-card-2">
            <img :src="image.url" alt="Profile Image">
            <div class="profile-info">
              <div class="profile-name">{{ image.name }}</div>
              <div class="profile-username">{{ image.username }}</div>
              <div class="profile-icons">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mb-5">
      <button class="see-more-btn"><a href="https://mycapstone-bfb98.web.app/">See More</a></button>
    </div>
    <FooterComponent/>
  </template>  
  
  <script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComponent from "@/components/FooterComp.vue";
import 'animate.css';

export default {
  name: "ModestView",
  components: {
    NavbarComp,
    FooterComponent,
  },
  data() {
    return {
      images: [
        { url: "https://i.postimg.cc/Y9jzsb2J/scarf2.png", name: "Everyday Black Chiffon Hijab", username: "R80" },
        { url: "https://i.postimg.cc/L4cGjZNH/scarf1.png", name: "Everyday Rosewood Chiffon Hijab", username: "R80" },
        { url: "https://i.postimg.cc/SNmnrVSd/scarf4.png", name: "Everyday Stone Chiffon Hijab", username: "R80" },
        { url: "https://i.postimg.cc/prTgWgQk/scarf3.png", name: "Everyday Navy Chiffon Hijab", username: "R80" },
        { url: "https://i.postimg.cc/5tVTYHqX/pleat1.png", name: "Black Pleated Hijab", username: "R70" },
        { url: "https://i.postimg.cc/kg9LD6yB/satinplain2.png", name: "Mint Green Satin Hijab", username: "R60" }
      ]
    };
  },
};
</script>
  
  <style scoped>
  .intro-section {
  color: #FFF;
}

.intro-heading {
  font-size: 3em; 
  font-weight: 900; 
  margin-bottom: 0.5em; 
}

.intro-description {
  font-size: 2em; 
  font-weight: 500; 
}

.about-me-section {
  background: linear-gradient(to right, #b86b77 0%, #d99b6c 100%);
  color: #FFF; 
  padding: 30px; 
  border-radius: 15px; 
}

.about-me-section h2 {
  color: inherit; 
  font-size: 3em; 
  font-weight: 800; 
  margin-bottom: 0.75em; 
}

.about-me-section p {
  font-size: 1.5em; 
  font-weight: 500;
  line-height: 1.5; 
  margin-bottom: 1em; 
}

.about-me-img {
  max-width: 50%; 
  height: 50%; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .profile-card-2 {
    max-width: 300px;
    background-color: #FFF;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .profile-card-2:hover {
    transform: translateY(-10px);
  }
  
  .profile-card-2 img {
    width: 100%;
    height: 200px;
    object-fit: cover; 
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
   }

  
  .profile-info {
    background: linear-gradient(to right, #b86b77 0%, #d99b6c 100%);
    padding: 20px;
    text-align: center;
  }
  
  .profile-name {
    color: #FFF;
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 5px;
  }
  
  .profile-username {
    color: #b4e1ff;
    font-size: 0.9em;
    margin-bottom: 15px;
  }
  
  .profile-icons {
    padding-bottom: 10px;
  }
  
  .profile-icons a {
    margin: 0 10px;
    color: #FFF;
    font-size: 1.2em;
    transition: color 0.3s ease;
  }
  
  .profile-icons a:hover {
    color: #b4e1ff;
  }

  .see-more-btn a {
  color: #FFF; 
  text-decoration: none; 
  display: inline-block;
  width: 100%; 
  height: 100%; 
  line-height: normal; 
}

.see-more-btn a:hover, .see-more-btn a:focus {
  color: #FFF; 
  text-decoration: none; 
}

  .see-more-btn {
  background-color: #d99b6c; 
  color: #FFF; 
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.see-more-btn:hover {
  background-color: #b86b77;
}

@media (max-width: 768px) {
    .intro-heading {
    font-size: 2.5em; 
    font-weight: 800; 
  }
  .intro-description {
    font-size: 1.5em; 
    font-weight: 500; 
  }

  .about-me-section {
    text-align: center;
  }

  .about-me-img {
    margin-bottom: 20px; 
    width: 50%; 
    margin-left: auto; 
    margin-right: auto; 
  }
}

  @media (max-width: 992px) {
    .profile-card-2 {
      margin-bottom: 20px;
    }
  }
  </style>  