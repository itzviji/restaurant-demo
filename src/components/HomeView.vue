<template>
  <div class="loginPage"> 
    <v-container  class="loginContainer2">
      <p class="title">
      Crave <span style="color:#ED4237;">Kitchen</span>
      </p>
      <p style="font-size:16px;font-style: italic;">
        harvesting happiness, serving community
      </p>
     <p class="mt-10 content" style="font-size:16px;font-weight:400;">
      we believe in more than just a meal — we offer an unforgettable dining experience. Step into our world of culinary delights, where every dish is crafted with passion and served with warmth.
      From savory appetizers to mouthwatering main courses and decadent desserts, each dish is meticulously prepared using the finest ingredients sourced locally and globally.
      <br/>
      <br/>
      Driven by our passion for culinary excellence, we source the finest ingredients from local farmers and artisans, ensuring that every dish reflects the vibrant flavors of the season. Whether you're craving classic comfort food or innovative creations that push the boundaries of gastronomy, our diverse menu has something to satisfy every palate.

At the heart of our kitchen is our talented team of chefs, led by [Chef's Name], whose culinary expertise and creativity are showcased in every plate. With a commitment to innovation and attention to detail, we strive to elevate every dining experience, leaving a lasting impression on our guests.
      </p>
      <p class="tagline">
      The finest cuisine, the way it’s meant to be eaten, is unadorned, like a flower. It’s whole, unadorned, it’s just <strong>good food</strong>, my friend.
      </p>

      <v-btn class="loginBtn" @click="$router.push('/login')">
              Get Started >
          </v-btn>
    </v-container>
   
      <p class="tagline-mobile">
              The finest cuisine, the way it’s meant to be eaten, is unadorned, like a flower. It’s whole, unadorned, it’s just <strong>good food</strong>, my friend.
            </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email:"",
      password:"",
      showPassword:false
    }
  }
}
</script>
<style>
.tagline-mobile {
  color:#ffffff;
  margin-top:15px;
  text-align: center;
  visibility: hidden;
}
.loginPage {
  background:url('../assets/body-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
}
.tagline {
  font-size:14px;
}
.loginContainer2 {
  width:100%;
 
  left:5vw;
  position:fixed;
  top:10vh;
  font-size:48px;
  font-weight:800;
  color:#ffffff;
  text-shadow: #ffffff;
}
.loginContainer {
  width:400px;
  left:70vw;
  position:fixed;
  top:20vh;
  bottom:2vh;
}
.login-card{
  border-radius:20px;
  background-color:#ffffff;
  background: linear-gradient(to top,#fff, #5c665e,#b9beba, #e4fae9); 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
.loginBtn {
  height:48px;
  border-radius:20px;
  background-color:#D44F01 !important;
  color:#ffffff !important;
  padding:5px;
  margin:5px;
}
.content {
  background: #ffffff;
  padding:10px;
  opacity: .5;
  color:#000;
  border-radius: 15px;
}
.tagline {
  margin-top:30px;
  background: #ffffff;
  padding:10px;
  opacity: .4;
  color:#000;
  border-radius: 15px;
}
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  /* CSS */
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
  /* CSS */
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
  /* CSS */
  .loginContainer2 {
    width:100%;
    left:5px;
    position:fixed;
    top:5vh;
    font-size:48px;
    font-weight:800;
    color:#ffffff;
    text-align: center;
    text-shadow: #ffffff;
}

.loginContainer {
    width:70vw;
    left:15vw;
    right:15vw;
    position:fixed;
    top:20vh;
    bottom:2vh;
}
.content {
  position:fixed;
  top:60vh;
}  
.tagline {
  position: fixed;
  top:75vh;
}

}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
 
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  .loginContainer2 {
    width:800px;
    left:5vw;
    position:fixed;
    top:10vh;
    font-size:48px;
    font-weight:800;
    color:#ffffff;
    text-shadow: #ffffff;
}
.loginContainer {
    width:400px;
    left:5vw;
    position:fixed;
    top:20vh;
    bottom:2vh;
}

  
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  .loginContainer2 {
    width:100vw;
    left:15px;
    position:fixed;
    top:10px;
    font-size:48px;
    font-weight:800;
    color:#ffffff;
    text-shadow: #ffffff;
}
.loginContainer {
    width:80vw;
    left:15px;
    right:15px;
    margin:auto auto;
    position:fixed;
    top:20vh;
    bottom:2vh;
}
.content {
  visibility: hidden;
}
.tagline {
  visibility: hidden;
}
.tagline-mobile {
  visibility: visible;
}
  
}
</style>