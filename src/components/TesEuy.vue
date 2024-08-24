<template>
    <div id="menu">
        <div class="flex-container bg-[#F7F7E6]">
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-offset="500" class="">
                    <img src="@/assets/overview3.png" alt="catra"
                        class="rounded-b-2xl max-w-full mx-auto w-[700px]" />
                </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-offset="300" class="pt-[50px] text-center text-lg font-normal">
                <div class="font-bold text-primary">
                    <h1>OUR MENU </h1>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-offset="300" class="2xl:px-60 flex flex-wrap text-center">
                <div class="my-auto w-full lg:w-1/1">
                    <div class="">
                        <Carousel :items-to-show="3" :autoplay="3000" :wrap-around="true">
                            <Slide v-for="(image, index) in images" :key="index">
                                <div class="p-3">
                                    <img class="x-full rounded-xl" :src="require(`@/assets/Menu/${image}`)"
                                        alt="Image" />
                                </div>
                            </Slide>
                            <template #addons>
                                <Navigation />
                                <Pagination />
                            </template>
                        </Carousel>
                    </div>
                    <div class="animate-bounce mt-[20px] mx-auto mb-[50px]">
                        <a href="https://wa.link/jacikr"
                            class=" transition duration-300 ease-in-out hover:bg-bodas hover:text-primary text-bodas border-2 border-primary font-bold bg-primary py-3 px-12 rounded-xl">
                            ORDER
                            NOW !
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "WrapAround",
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination
    },
    data() {
        return {
            images: ["MENU-VARIAN-CHICLIN_01.jpg", "MENU-VARIAN-CHICLIN_02.jpg", "MENU-VARIAN-CHICLIN_03.jpg", "MENU-VARIAN-CHICLIN_04.jpg", "MENU-VARIAN-CHICLIN_05.jpg", "MENU-VARIAN-CHICLIN_06.jpg", "MENU-VARIAN-CHICLIN_07.jpg", "MENU-VARIAN-CHICLIN_08.jpg"] // Array of image filenames
        };
    }
});
</script>