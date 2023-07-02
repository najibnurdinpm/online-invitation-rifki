<template lang="">

    <div class=" z-10 fixed top-0 p-2 w-full h-full ">
    <div class="flex flex-1 justify-end p-3 max-w-sm  mx-auto h-full items-end">
    <div :class="[playOrNot ? 'block' : 'hidden']">
      <div @click="stopAudio()" :class="[buttonInvite ? 'opacity-0 z-20' : '' , 'bg-green-700 shadow-lg h-10 w-10 rounded-full group ']">
        <button class="flex w-full justify-center h-full items-center rounded-full">
          <i class="fa fa-pause text-white text-xl  group-hover:text-yellow-200"></i>
        </button>
      </div>
    </div>
    <div :class="[playOrNot ? 'hidden' : 'block']">
      <div @click="playAudioAgain()" :class="[buttonInvite ? 'opacity-0 z-20' : '' , 'bg-green-700 shadow-lg h-10 w-10 rounded-full group ']">
        <button class="flex w-full justify-center h-full items-center rounded-full">
          <i class="fa fa-play text-white text-xl  group-hover:text-yellow-200"></i>
        </button>
      </div>
    </div>
    </div>
  </div>  

  <section class=" relative max-w-sm w-full mx-auto   overflow-hidden">
    <div class="absolute h-full w-full ">
      <div class="flex flex-1 justify-end h-full ">
        <div class="w-3/4 bg-[url('@/assets/bg-hero.jpg')] bg-cover bg-no-repeat"></div>
      </div>
    </div>
    <div class="py-20">
      <div class="flex flex-1 h-full ">
        <div id="heading" class="w-3/4 bg-yellow-900 px-10 pt-10 pb-80 relative">
        
          <div class="absolute bottom-20 w-full px-0 h-40 z-10">
            <div id="label-name" class="text-center   h-full ">
              <p class="text-yellow-300 font-bold mb-3">Kepada Yth</p>
              <div class="w-full h-full opacity-75 bg-yellow-100 rounded flex justify-center items-center">
                <button @click="playAudio" type="button" :class="[buttonInvite ? '' : 'hidden' , 'absolute z-20 left-0 p-2 rounded font-bold h-full w-full  z-20 ']">Buka Undangan </button>
                <div :class="[buttonInvite ? 'hidden' : '' , 'flex flex-col space-y-5 text-yellow-900 font-bold text-lg ']">
                  <p class="capitalize ">{{peopleInvite}}</p>
                  <p>di</p>
                  <p class="capitalize">{{locationPeople}}</p>
                </div>
              </div>
            </div>
          </div>
          <p class="text-yellow-300 font-small text-sm ">Undangan</p>
          <h2 class="text-yellow-300 font-bold text-4xl">Khitanan</h2>
          <p class="text-yellow-300 font-small text-sm ">{{ hariAcara }}</p>
          <div class="mt-12 max-w-[90%]">
            <h3 class="text-yellow-300 font-small text-sm">{{ putra }}</h3>
            <p class="text-center text-yellow-300 font-small text-sm">({{ namaPanggilan }})</p>
          </div>
      </div> 
    </div>
    <div id="box-image-hero" class=" w-full absolute bottom-0 right-0 h-[500px]">
      <div class="relative h-full right-0  bg-[url('@/assets/hero1.png')] bg-no-repeat bg-cover">
        
      </div>
    </div> 
    </div>
  <div class="absolute w-full h-full bg-green-300">

  </div>
    
  </section>
<section class="bg-yellow-50 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
  <div class=" text-center text-yellow-900 py-5  space-y-5">
    <p class="font-small text-2xl sec-1 sec-opening-salam opacity-0">Assalaamu'alaikum wr, wb</p>
    <p class="font-medium text-sm sec-opening-desc opacity-0">Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara Syukuran khitan anak kami</p>
    <div class="w-full flex justify-center sec-opening-image opacity-0">
      <img class="rounded-full shadow-xl w-24 h-24 object-contain " :src="hero" />
    </div>
    <div class="sec-opening-name opacity-0">
      <p class="font-small text-lg"> {{ putra }}</p>
      <p class="font-small text-lg mt-5">Putra {{ anakKe }} dari Bpk. {{ bokap }} <span class="flex flex-col">&</span> Ibu {{ nyokap }} </p>
    </div>
  </div>
</section>
 <section class="bg-yellow-900 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
    <div class=" text-center text-yellow-100 py-5  space-y-10">
      <p class="font-medium text-2xl sec-date-label opacity-0">Save The Date</p>
      <p class="font-medium text-sm sec-date-desc opacity-0">Merupakan suatu kehormatan dan kebahagian bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a kepada anak kami</p>
      <div class="rounded-md py-5 sec-date-content opacity-0 relative z-20">
        <h2 class="font-medium text-xl">Resepsi</h2>
        <div class="mb-16 mt-5">
          <p class="font-medium text-sm ">{{ hariAcara }} <span class="flex flex-col space-y-5  ">{{ waktu }}</span> di {{ alamat }}</p>
        </div>
        <div class="absolute bottom-0 w-full pb-8">
          <a class="bg-orange-100 text-yellow-900 text-sm font-medium px-3 py-1 rounded shadow  " href="https://goo.gl/maps/1ftcZosXbBheR4Et9" target="_blank">Google Maps</a>
        </div>
      </div>
    </div>
  </section>
   <section class="bg-yellow-50 relative max-w-sm w-full  h-auto mx-auto py-10 px-5 ">
    <ul role="list" class="">
      <li v-for="(gallery, index) in galleryImage" :key="gallery.id">
        <div class="relative pb-8 ">
          <span :class="[index % 2 ? 'line'+index : 'line'+index, 'absolute top-4 left-4 -ml-px max-h-[230px] h-full w-0.5 bg-yellow-500 opacity-0']" aria-hidden="true"></span>
          <div class="relative flex space-x-3">
            <div>
              <span :class="[index % 2 ? 'bullet'+index : 'bullet'+index, 'h-8 w-8 rounded-full bg-yellow-700 flex items-center justify-center ring-8 ring-white opacity-0']">
              
              </span>
            </div>
            <div class="flex min-w-0 flex-1 justify-center space-x-4 pt-1.5">
              <img :src="gallery.image" alt="" :class="[index % 2 ? 'img'+index : 'img'+index  , 'pointer-events-none h-60 w-3/4 object-cover rounded-lg group-hover:opacity-75 opacity-0 img'] " />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <section class="bg-yellow-900 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
    <div class=" text-center text-yellow-50 py-5  space-y-5">
      <div class="w-full flex justify-center sec-close-image opacity-0">
        <img class="rounded-full shadow-xl w-24 h-24 object-contain bg-green-50" :src="hero" />
      </div>
      <div class="sec-close-desc opacity-0">
        <p class="font-small text-lg"> {{ putra }}</p>
        <p class="font-small text-sm mt-5">Atas kehadirannya kami ucapkan terima kasih</p>
      </div>
    </div>
  </section>
   <section class="bg-yellow-50 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
    <div class=" text-center text-yellow-900 py-5 sec-footer space-y-5 opacity-0">
      <div class="">
        <p class="font-bold text-lg">Website by </p>
        <p class="font-small text-3xl">Najib Desaign</p>
      </div>
    </div>
  </section>


</template>
<script setup>
  import {
    ref,
    onMounted
  } from 'vue'
  import WrapSection from '@/Layout/WrapSection.vue'
  import Fixedbar from '@/components/Fixedbar.vue'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import Lenis from '@studio-freight/lenis'
  import hero from '@/assets/images/3.jpeg'
  import { getInfoInvitation } from '@/Function/index.js'
  import backsound from '@/assets/backsound/backsound1.mp3'
  import _1 from '@/assets/images/1.jpeg'
  import _2 from '@/assets/images/2.jpeg'
  import _3 from '@/assets/images/3.jpeg'
  import _4 from '@/assets/images/4.jpeg'
  import _5 from '@/assets/images/5.jpeg'
  import _6 from '@/assets/images/6.jpeg'
  import _7 from '@/assets/images/7.jpeg'
  import _8 from '@/assets/images/8.jpeg'
  import _9 from '@/assets/images/9.jpeg'
  import _10 from '@/assets/images/10.jpeg'
  import _11 from '@/assets/images/11.jpeg'
  import _12 from '@/assets/images/12.jpeg'
  import _13 from '@/assets/images/13.jpeg'
  import {
    useRouter,
    useRoute
  } from 'vue-router'
  const peopleInvite = ref('')
  const locationPeople = ref('')
  const router = useRouter()
  const route = useRoute();
  const { bokap, nyokap, putra, namaPanggilan, anakKe, hariAcara, waktu, alamat } = getInfoInvitation();
  const galleryImage = ref([{
      id: 0,
      image: _1,
    }, {
      id: 1,
      image: _2,
    }, {
      id: 2,
      image: _3,
    }, {
      id: 3,
      image: _4,
    }, {
      id: 4,
      image: _5,
    }, {
      id: 5,
      image: _6,
    }, {
      id: 6,
      image: _7,
    }, {
      id: 7,
      image: _8,
    },{
      id: 8,
      image: _9,
    },
    {
      id: 9,
      image: _10,
    },
    {
      id: 10,
      image: _11,
    },
    {
      id: 11,
      image: _12,
    },
    {
      id: 12,
      image: _13,
    },
  ])
  const buttonInvite = ref(true);
  const elAfterClickButton = ref(false);
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo("#heading", {
      opacity: 0,
    }, {
      duration: 1.5,
      opacity: 1,
      delay: 0.5,
      ease: "power3.inOut",
    });
    gsap.fromTo("#box-image-hero", {
      opacity: 0,
      x: "-20%",
    }, {
      duration: 2,
      opacity: 1,
      x: 0,
      delay: 1,
      ease: "power3.inOut",
    });
    gsap.fromTo("#label-name", {
      opacity: 0,
    }, {
      duration: 2,
      opacity: 1,
      delay: 1.5,
      ease: "power3.inOut",
    });
    const queryName = route.query.name
    const queryLocation = route.query.location
    console.log('queryName', queryName)
    if (queryName) {
      localStorage.setItem("queryName", queryName.replaceAll("-", " "));
    }
    peopleInvite.value = localStorage.getItem("queryName");
    if (queryLocation) {
      localStorage.setItem("queryLocation", queryLocation.replaceAll("-", " "));
    }
    locationPeople.value = localStorage.getItem("queryLocation");
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    });
    lenis.on('scroll', ({
      scroll,
      limit,
      velocity,
      direction,
      progress
    }) => {
      // playAudio()
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    animateBullet()
    const arrSecOpenEl = ['.sec-opening-salam', '.sec-opening-desc', '.sec-opening-image', '.sec-opening-name'];
    arrSecOpenEl.map((items) => {
      var tl = gsap.timeline({
        scrollTrigger: items
      }).to(items, {
        stagger: 1,
        y: -50,
        opacity: 0,
        duration: 0.5,
      }).to(items, {
        stagger: 1,
        opacity: 1,
        y: 0,
        duration: 1,
      })
    })
    const arrSecDatenEl = ['.sec-date-label', '.sec-date-desc', '.sec-date-content'];
    arrSecDatenEl.map((items) => {
      var tl = gsap.timeline({
        scrollTrigger: items
      }).to(items, {
        stagger: 1,
        y: -50,
        opacity: 0,
        duration: 0.5,
      }).to(items, {
        stagger: 1,
        opacity: 1,
        y: 0,
        duration: 1,
      })
    })

    const arrSecClosenEl = ['.sec-close-image', '.sec-close-desc'];
    arrSecClosenEl.map((items) => {
      var tl = gsap.timeline({
        scrollTrigger: items
      }).to(items, {
        stagger: 1,
        y: -50,
        duration: 0.5,
      }).to(items, {
        stagger: 1,
        opacity: 1,
        y: 0,
        duration: 1,
      })
    });

    const arrSecFooter = ['.sec-footer'];
    arrSecFooter.map((items) => {
      var tl = gsap.timeline({
        scrollTrigger: items
      }).to(items, {
        stagger: 1,
        y: 50,
        duration: 0.5,
      }).to(items, {
        stagger: 1,
        opacity: 1,
        y: 0,
        duration: 1,
      })
    })

    

    
  })
  const animateBullet = () => {
    const arrElBullet = ['.bullet0', '.bullet1', '.bullet2', '.bullet3', '.bullet4', '.bullet5', '.bullet6', '.bullet7', '.bullet8', '.bullet9', '.bullet10', '.bullet11', '.bullet12'];
    arrElBullet.map((items) => {
      var tl = gsap.timeline({
        scrollTrigger: items
      }).to(items, {
        stagger: 1,
        duration: 0.1,
        scaleY: 0,
        scaleX: 0
      }).to(items, {
        stagger: 1,
        opacity: 1,
        y: 0,
        duration: 0.5,
        scaleY: 1,
        scaleX: 1
      })
    })
    animateLine()
    animateImage()
  }
  const animateLine = () => {
    const arrElLine = ['.line0', '.line1', '.line2', '.line3', '.line4', '.line5', '.line6', '.line7', '.line8', '.line9', '.line10', '.line11', '.line12'];
    arrElLine.map((items) => {
      var tl = gsap.timeline({
        scrollTrigger: items
      }).to(items, {
        stagger: 1,
        duration: 0.4,
        scaleY: 0,
        scaleX: 1
      }).to(items, {
        stagger: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        scaleY: 1,
        scaleX: 1
      })
    })
  }
  const animateImage = () => {
    const arrEl = ['.img0', '.img1', '.img2', '.img3', '.img4', '.img5', '.img6', '.img7', '.img8', '.img9', '.img10', '.img11', '.img12'];
    arrEl.map((items) => {
      var tl = gsap.timeline({
        scrollTrigger: items
      }).to(items, {
        stagger: 1,
        duration: 1,
        scaleY: 0,
        scaleX: 0
      }).to(items, {
        stagger: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        scaleY: 1,
        scaleX: 1
      })
    })
  }
  
  const playOrNot = ref(false)
  var audio = new Audio(backsound);
  const playAudio = () => {
    audio.play();
    buttonInvite.value = false
    playOrNot.value = true
    console.log('playOrNot.value', playOrNot.value)
  }


  const stopAudio = () => {
    playOrNot.value = false
    audio.pause();
  }

  const playAudioAgain = () => {
    playOrNot.value = true
    audio.play();
  }
  
</script>