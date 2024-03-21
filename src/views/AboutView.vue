<template>
  <NavbarComp />
  <div class="background">
    <div class="row">
    </div>

    <div class="haanim-closet-description">
      <h1>The Story of<br>
        Haanim's Closet</h1>
    </div>
    <div class="descrip bg-white p-4">
      <p class="fs-5 fw-bold">
        Haanim's Closet is an exclusive online destination for modern abayas,
        catering to the discerning tastes of women seeking elegance and modesty.
        Our curated collection features a fusion of traditional craftsmanship
        and contemporary designs, offering a diverse range of styles to suit
        every occasion.
      </p>
      <p class="fs-5 fw-bold">
        With a commitment to quality, Haanim's Closet ensures each abaya is
        crafted with meticulous attention to detail and using premium fabrics,
        promising both comfort and sophistication. Whether for daily wear,
        special events, or casual outings, our platform provides a seamless
        shopping experience, empowering women to express their individuality
        with grace and confidence.
      </p>
      <p class="fs-5 fw-bold">
        Discover timeless elegance and embrace modest fashion with Haanim's
        Closet.
      </p>
    </div>

    <div class="container">
      <div class="haanim-closet-description">
        <h1>Meet the team</h1>
      </div>
      <div class="row text-center">
        <div class="col-xl-3 col-sm-6 mb-5 animate__animated animate__slideInDown">
          <div class="bg-white rounded shadow-sm py-5 px-4 card-item">
            <img src="https://i.ibb.co/sFCCP6T/cap-nimmie.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse">
            <h5 class="mb-0">Haanim Pietersen</h5>
            <span class="small text-uppercase text-muted">Founder</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="https://github.com/HaanimP" class="social-link" target="_blank"><i class="fa-brands fa-github"></i></a></li>
              <li class="list-inline-item"><a href="https://za.linkedin.com/in/haanim-pietersen-172bb9264" class="social-link" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-5 animate__animated animate__slideInRight">
          <div class="bg-white rounded shadow-sm py-5 px-4 card-item">
            <img src="https://i.ibb.co/8X52RkL/cap-image-aaks.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse">
            <h5 class="mb-0">Aakeefah Jones</h5>
            <span class="small text-uppercase text-muted">Co-Founder</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="https://github.com/keeefles" class="social-link" target="_blank"><i class="fa-brands fa-github"></i></a></li>
              <li class="list-inline-item"><a href="https://www.linkedin.com/in/aakeefah-jones-b11297263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="social-link" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-5 animate__animated animate__slideInLeft">
          <div class="bg-white rounded shadow-sm py-5 px-4 card-item">
            <img src="https://i.ibb.co/TPCQbSK/cap-image-ams.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse">
            <h5 class="mb-0">Ammara Hoosen</h5>
            <span class="small text-uppercase text-muted">Co-Founder</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="https://github.com/Itsssammara" class="social-link" target="_blank"><i class="fa-brands fa-github"></i></a></li>
              <li class="list-inline-item"><a href="http://www.linkedin.com/in/ammara-hoosen-364913288" class="social-link" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-5 animate__animated animate__slideInUp">
          <div class="bg-white rounded shadow-sm py-5 px-4 card-item">
            <img src="https://i.ibb.co/2Wzy1hj/cap-image-nish.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse">
            <h5 class="mb-0">Nishaat Gafieldien</h5>
            <span class="small text-uppercase text-muted">Co-Founder</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="https://github.com/n0tnish" class="social-link" target="_blank"><i class="fa-brands fa-github"></i></a></li>
              <li class="list-inline-item"><a href="https://www.linkedin.com/in/ni-shaat-gafieldien-159040227" class="social-link" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComponent from "@/components/FooterComp.vue";
import 'animate.css';

export default {
  name: "AboutViewComp",
  components: {
    NavbarComp,
    FooterComponent,
  },
};
</script>

<style scoped>
.haanim-closet-description h1 {
  color: #FFFFFF;
  font-family: 'Lobster', cursive;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: rgba(183, 110, 121, 0.85);
  border-radius: 0.5rem;
  max-width: 90%;
  margin: 1rem auto;
}

.descrip {
  background-color: #fff;
  padding: 20px;
}

.descrip p {
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.6;
  max-width: 90%;
  margin: 0 auto 1rem;
  padding: 0 1rem;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.row.d-flex.justify-content-center {
  background: rgba(183, 110, 121, 0.85);
}

.card {
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3%;
  border: 4px solid #fff;
}

.card h5,
.card span {
  color: #333;
}

.card-item {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.social-link {
  color: #333;
}

.social-link:hover {
  color: #B76E79;
}
</style>