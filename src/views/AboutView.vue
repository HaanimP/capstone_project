<template>
  <NavbarComp />
  <div class="background">
    <div class="row">
    </div>

    <div class="haanim-closet-description">
    <h1>The Story of<br>
      Haanim's Closet</h1>
    </div>
    <div class="descrip">
    <p>
      Haanim's Closet is an exclusive online destination for modern abayas,
      catering to the discerning tastes of women seeking elegance and modesty.
      Our curated collection features a fusion of traditional craftsmanship
      and contemporary designs, offering a diverse range of styles to suit
      every occasion.
    </p>
    <p>
      With a commitment to quality, Haanim's Closet ensures each abaya is
      crafted with meticulous attention to detail and using premium fabrics,
      promising both comfort and sophistication. Whether for daily wear,
      special events, or casual outings, our platform provides a seamless
      shopping experience, empowering women to express their individuality
      with grace and confidence.
    </p>
    <p>
      Discover timeless elegance and embrace modest fashion with Haanim's
      Closet.
    </p>
    </div>

      <div class="row d-flex justify-content-center">
        <h1 class="mt-4 ">Meet the team</h1>
  
        
          <Card class="card p-4 m-4" style="width: 18rem;" >
                <template #cardImgTop>
                  <img class=" card-img-top" src="https://i.ibb.co/sFCCP6T/cap-nimmie.jpg" alt="Screenshot-2024-02-20-134757" >
                
                </template>

                  <template #cardHeader>
                      <h4 class="card-title">Haanim Pietersen</h4>
                  </template>

                  <template #cardBody>
                      <p class="card-text">Founder</p>
                  </template>
  
        </Card>

        <Card class="card p-4 m-4" style="width: 18rem;" >
                <template #cardImgTop>
                  <img class=" card-img-top" src="https://i.ibb.co/8X52RkL/cap-image-aaks.jpg" alt="Screenshot-2024-02-20-134757" >
                
                </template>

                  <template #cardHeader>
                      <h4 class="card-title">Aakeefah<br> Jones</h4>
                  </template>

                  <template #cardBody>
                      <p class="card-text">Co-Founder</p>
                  </template>
  
        </Card>

        <Card class="card p-4 m-4" style="width: 18rem;" >
                <template #cardImgTop>
                  <img class=" card-img-top" src="https://i.ibb.co/TPCQbSK/cap-image-ams.jpg" alt="Screenshot-2024-02-20-134757" >
                
                </template>

                  <template #cardHeader>
                      <h4 class="card-title">Ammara Hoosen</h4>
                  </template>

                  <template #cardBody>
                      <p class="card-text">Co-Founder</p>
                  </template>
  
        </Card>

        <Card class="card p-4 m-4" style="width: 18rem;" >
                <template #cardImgTop>
                  <img class=" card-img-top" src="https://i.ibb.co/2Wzy1hj/cap-image-nish.png" alt="Screenshot-2024-02-20-134757" >
                
                </template>

                  <template #cardHeader>
                      <h4 class="card-title">Nishaat Gafieldien</h4>
                  </template>

                  <template #cardBody>
                      <p class="card-text">Co-Founder</p>
                  </template>
  
        </Card>

      </div>

    </div>

  <FooterComponent/>

</template>

<script>
import Card from "@/components/Card.vue";
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComponent from '@/components/FooterComp.vue';

export default {
  name: "AboutViewComp",
  components: {
    NavbarComp,
    Card,
    FooterComponent
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

.descrip p {
  color: #333; 
  font-family: 'Roboto', sans-serif; 
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
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
  border: none;
  border-radius: 0.5rem;
  overflow: hidden; 
  background-color: #fff; 
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; 
}

.card:hover {
  transform: scale(1.05); 
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover; 
  margin-top: 3%;
  border: 4px solid #fff; 
}

.card h4, .card p {
  color: #333; 
}

.card .card-text {
  font-size: 0.9rem; 
  color: #555; 
}

@media (max-width: 768px) {
  .haanim-closet-description h1 {
    font-size: 2rem;
  }
}

</style>