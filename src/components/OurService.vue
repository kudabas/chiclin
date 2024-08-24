<template>
    <div id="service">
        <div class=" lg:px-40 lg:pb-20">
            <div class="mb-10 text-center pt-20">
                <h1 class="mb-3">
                    <span class="text-md font-light underline underline-offset-4 mr-3">Our</span>
                    <span class=" text-lg text-center font-bold">Service</span>
                </h1>
                <h2 class=" text-base text-abhu font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </h2>
            </div>
            <div class="text-left grid justify-items-center gap-4 lg:px-15">
                <div
                    class="bg-cici bg-center bg-cover border-solid border-4 border-bodas transition duration-300 ease-in-out hover:border-primary block max-w-[900px] rounded-[20px] shadow-lg bg-bodas bg-opacity-50 mb-10 lg:mb-10 lg:w-[900px] lg:h-[510px]">
                    <div class="p-20">
                        <h1 class="text-left mb-1 text-lg font-bold leading-tight text-hideung">CCTV</h1>
                        <img src="../assets/garansi2.png" alt="catra" class="inline h-[80px] mt-0 mb-1" />
                        <div class="text-left text-md text-hideung">
                            <h2>Layanan Paket cctv Terpercaya,</h2>
                            <h3>Dengan Paket Pemasangan Lengkap,</h3>
                            <h4>Original, Terjangkau dan Bergaransi Resmi.</h4>
                        </div>
                    </div>
                    <div class="text-center lg:mt-[0px]">
                        <h1 class="mb-5 font-light text-md text-abhu">Paket pemasangan kamera cctv lengkap siap pasang
                        </h1>
                        <router-link to="/cctv" custom v-slot="{ navigate }">
                            <button @click="navigate" role="link">
                                <a class="transition duration-300 ease-in-out hover:bg-primary hover:text-bodas text-primary border-2 border-primary font-bold bg-bodas py-3 px-12 rounded-xl">lihat Paket !</a>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="lg:px-40 text-center grid justify-items-center grid-cols-2 gap-4 lg:grid-cols-3 pb-5">
                <div class="border-solid border-4 border-bodas transition duration-300 ease-in-out hover:border-primary block max-w-[400px] rounded-[20px] shadow-lg bg-bodas bg-opacity-50 mb-10 lg:mb-10 lg:w-[300px] lg:h-[360px]">
                    <div class="p-6">
                        <h1 class="text-center mb-5 text-md font-bold leading-tight text-hideung">GPS (tracker)
                            Kendaraan</h1>
                        <img src="../assets/gps2.png" alt="catra" class="inline h-[100px] mb-5" />
                        <h2 class="h-[70px] text-left font-light text-base text-abhu mb-10">Paket pemasangan gps kendaraan lengkap
                            siap pasang.</h2>
                        <router-link to="/" custom v-slot="{ navigate }">
                            <button @click="navigate" role="link">
                                <a class="transition duration-300 ease-in-out hover:bg-primary hover:text-bodas text-primary border-2 border-primary font-bold bg-bodas py-3 px-12 rounded-xl">lihat Paket !</a>
                            </button>
                        </router-link>
                    </div>
                </div>
                <div class="border-solid border-4 border-bodas transition duration-300 ease-in-out hover:border-primary block max-w-[400px] rounded-[20px] shadow-lg bg-bodas bg-opacity-50 mb-10 lg:mb-10 lg:w-[300px] lg:h-[360px]">
                    <div class="p-6">
                        <h1 class="text-center mb-5 text-md font-bold leading-tight text-hideung">AC Ruangan dan Mobil</h1>
                        <img src="../assets/ac.png" alt="catra" class="inline h-[100px] mb-5" />
                        <h2 class="h-[70px] text-left font-light text-base text-abhu mb-10">Paket pemasangan ac ruangan, perawatan dan instalasi ac mobil.</h2>
                        <router-link to="/" custom v-slot="{ navigate }">
                            <button @click="navigate" role="link">
                                <a class="transition duration-300 ease-in-out hover:bg-primary hover:text-bodas text-primary border-2 border-primary font-bold bg-bodas py-3 px-12 rounded-xl">lihat Paket !</a>
                            </button>
                        </router-link>
                    </div>
                </div>
                <div class="border-solid border-4 border-bodas transition duration-300 ease-in-out hover:border-primary block max-w-[400px] rounded-[20px] shadow-lg bg-bodas bg-opacity-50 mb-10 lg:mb-10 lg:w-[300px] lg:h-[360px]">
                    <div class="p-6">
                        <h1 class="text-center mb-5 text-md font-bold leading-tight text-hideung">Keamanan Digital Lainnya</h1>
                        <img src="../assets/lainnya.png" alt="catra" class="inline h-[100px] mb-5" />
                        <h2 class="h-[70px] text-left font-light text-base text-abhu mb-10">Paket keamanan digital lainnya (alarm rumah, acces control, Mesin Absensi,intercom dll.)</h2>
                        <router-link to="/" custom v-slot="{ navigate }">
                            <button @click="navigate" role="link">
                                <a class="transition duration-300 ease-in-out hover:bg-primary hover:text-bodas text-primary border-2 border-primary font-bold bg-bodas py-3 px-12 rounded-xl">lihat Paket !</a>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/assets/tailwind.css";

export default {};
</script>

<style></style>