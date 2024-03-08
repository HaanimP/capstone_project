<template>
  <div class="background">
    <div class="row">
      <NavbarComp />
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
                      <h4 class="card-title">Aakeefah Jones</h4>
                  </template>

                  <template #cardBody>
                      <p class="card-text">Founder</p>
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
                      <p class="card-text">Founder</p>
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
                      <p class="card-text">Founder</p>
                  </template>
  
        </Card>

      </div>

    </div>

</template>

<script>
// import Card from "@/components/Card.vue";
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
  font-family: 'Lobster', cursive; /* A more decorative font for headings */
  font-size: 2.5rem; /* Adjust size for emphasis */
  margin-bottom: 1rem; /* Spacing below the title */
  padding: 1rem; /* Padding for better spacing */
  background-color: rgba(183, 110, 121, 0.85); /* Slightly transparent background */
  border-radius: 0.5rem; /* Rounded corners for a softer look */
  max-width: 90%; /* Max width for better readability on wide screens */
  margin: 1rem auto; /* Center align the block */
}

.descrip p {
  color: #333; /* Darker text for better readability */
  font-family: 'Roboto', sans-serif; /* Cleaner, more modern font */
  line-height: 1.6; /* Improved line spacing for readability */
  max-width: 90%; /* Restrict paragraph width for readability */
  margin: 0 auto 1rem; /* Center paragraphs and add spacing */
  padding: 0 1rem; /* Padding for mobile screens */
}

.row {
  display: flex;
  justify-content: center; /* Center content */
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  margin: 2rem 0; /* Add vertical spacing */
}

.row.d-flex.justify-content-center {
  background: rgba(183, 110, 121, 0.85);
}

.card {
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Softer, wider shadow for a more refined look */
  border: none; /* Remove default borders for a cleaner look */
  border-radius: 0.5rem; /* Rounded corners for the card itself */
  overflow: hidden; /* Ensures that child elements (like images) do not overflow the card's rounded corners */
  background-color: #fff; /* Ensures cards are visually distinct against possibly non-white backgrounds */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Smooth transition for hover effects */
}

.card:hover {
  transform: scale(1.05); /* Slightly enlarges the card on hover for an interactive effect */
  box-shadow: 0 8px 16px rgba(0,0,0,0.2); /* Enhances shadow on hover for a "lifting" effect */
}

.card img {
  width: 100%; /* Ensures the image covers the width of the card */
  height: auto; /* Keeps the image's aspect ratio */
  border-radius: 50%; /* Makes the image round */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  margin-top: 3%; /* Optionally, adjust this value to ensure the round image is centered as you like */
  border: 4px solid #fff; /* Adds a white border around the image for a more polished look */
}

.card h4, .card p {
  color: #333; /* Darker text for card content */
}

.card .card-text {
  font-size: 0.9rem; /* Adjusts the font size for better readability */
  color: #555; /* Slightly lighter color for the text */
}

/* Enhancements for small screens */
@media (max-width: 768px) {
  .haanim-closet-description h1 {
    font-size: 2rem; /* Smaller font size for small screens */
  }
}

</style>