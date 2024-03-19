<template>
    <NavbarComp/>
    <div class="container">
      <section class="mx-auto my-5" style="max-width: 75rem;">
        <h2 class="text-center mb-4 text-white font-weight-bold display-4">A Sneak Peek of Our Sister Company Zahraa Tul Islam</h2>
        <p class="text-center mb-4 text-white lead font-weight-bold">Zahraa Tul Islamic is a pioneering social media platform designed specifically for young Muslim women. It serves as a unique space where these women can openly share their personal struggles, experiences, and triumphs within the context of Islam. Through candid storytelling, they illuminate their individual journeys, offering insights into navigating the complexities of faith and identity. By providing a supportive community and fostering meaningful connections, our platform empowers these women to inspire and uplift one another, fostering a sense of solidarity and resilience among Muslim girls worldwide.</p>
        
        <div class="container my-5 about-me-section">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="https://i.ibb.co/8X52RkL/cap-image-aaks.jpg" class="img-fluid about-me-img">
      </div>
      <div class="col-md-6">
        <h2>About Aakeefah</h2>
        <p>Aakeefah is a remarkable young Muslim woman who embarked on a profound journey of self-discovery and spirituality to find Islam. Born into a multicultural family, she navigated through various beliefs and ideologies before finding solace and resonance in Islam. Through her journey, Aakeefah faced numerous challenges and obstacles, but her unwavering faith and determination guided her path. Along the way, she delved deep into Islamic teachings, gaining profound insights into the religion's principles of peace, compassion, and resilience. Aakeefah's story serves as an inspiration to many, highlighting the transformative power of faith and the beauty of embracing one's identity with courage and conviction.</p>
      </div>
    </div>
  </div>
  
        <!-- Card Section -->
        <div class="card">
          <div class="card-body d-flex flex-row align-items-center">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" class="rounded-circle me-3" height="50px"
              width="50px" alt="avatar" />
            <div>
              <h5 class="card-title font-weight-bold mb-2">New Spicy Meals</h5>
              <p class="card-text"><i class="far fa-clock pe-2"></i>07/24/2018</p>
            </div>
          </div>
          <div class="bg-image hover-overlay ripple rounded-0">
            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
              alt="Card image cap" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <p class="card-text collapse" id="collapseContent">
              Recently, we added several exotic new dishes to our restaurant menu. They come from
              countries such as Mexico, Argentina, and Spain. Come to us, have some wine and enjoy
              our juicy meals from around the world.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <a class="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse" href="#collapseContent"
                role="button" aria-expanded="false" aria-controls="collapseContent">Read more</a>
              <div>
                <i class="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                  data-mdb-placement="top" title="Share this post"></i>
                <i class="fas fa-heart text-muted p-md-1 my-1" data-mdb-toggle="tooltip" data-mdb-placement="top"
                  title="I like it"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterComponent/>
  </template>
  
  <script>
  import NavbarComp from "@/components/NavbarComp.vue";
  import FooterComponent from "@/components/FooterComp.vue";
  
  export default {
    name: "AakeefahView",
    components: {
      NavbarComp,
      FooterComponent,
    },
  }
  </script>
  
  <style scoped>
body {
  background-color: #f5f7fa;
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
  max-width: 95%; 
  height: 95%; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-body {
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-text {
  margin-bottom: 1rem;
}

.bg-image {
  position: relative;
  overflow: hidden;
}

.bg-image img {
  transition: transform 0.5s ease;
}

.bg-image:hover img {
  transform: scale(1.05);
}

.text-white {
  color: #fff;
}

.fas.fa-heart:hover {
  color: #f44336 !important;
}

.fas.fa-share-alt:hover {
  color: #0d47a1 !important;
}
</style>  