<template>
    <div class="w-11/12 lg:w-4/5   mx-auto bg-white p-2 sm:p-8 bg-opacity-20 border border-gray-200 rounded-lg flex flex-col lg:flex-row z-50 space-x-2">
        <div class="rounded-md">
          
            <audio ref="audio" controls hidden>
            <source :src="`../assets/songs/${currentSong.mp3}`" type="audio/ogg">
            </audio>
            <div class="card h-96 bg-white p-2 lg:p-6 rounded-md">
            <img class="w-full  h-full  lg:w-96 relative" :src="`../assets/covers/${currentSong.img}`" alt="">
              <v-slider
                class="w-full"
                  max="100"
                  min="0"
                  v-model="songPeriod"
                  disabled
                ></v-slider>
            </div>

            <div  class="w-full fixed left-0 bottom-0 z-40 bg-white bg-opacity-80 drop-shadow-md py-2 flex items-center justify-center flex-col">
                <div class="text-black">
                  <h2 class="text-2xl">{{currentSong.title}}</h2>
                  <h2 class="text-xl font-light">{{currentSong.album}}</h2>
                </div>
                <div class="flex">
                    <img @click="prevAudio" src="../assets/previous1.png" class="h-12" alt="">
                    <img v-if="!audioStarted" @click="startAudio" src="../assets/play.png" class="h-12" alt="">
                    <img v-else @click="stopAudio" src="../assets/stop.png" class="h-12" alt="">
                    <img @click="nextAudio" src="../assets/next1.png" class="h-12" alt="">
                </div>
                <v-slider
                class="w-1/3"
                prepend-icon="mdi-volume-high"
                v-model="volume"
                thumb-label
                ></v-slider>
  <p class="flex space-x-2 text-black">Created by Domiś with  <img class="h-8" src="../assets/heart.png" alt=""></p>

            </div>
        </div>
        <div style="height:500px !important;" class="w-full mt-6 lg:mt-0 lg:w-1/2 h-full overflow-y-scroll scrollbar scrollbar-thumb-blue-500 scrollbar-track-blue-300">
        <v-card flat>
          <v-card-text>
            <!-- test -->

    <v-list>

      <v-list-group
        :value="true"
        prepend-icon=" mdi-dialpad"
      >
        <template v-slot:activator>
          <v-list-item-title>Songs List</v-list-item-title>
        </template>



        <v-list-item
        class="w-full"
        >
                    <v-list shaped  class="w-full">
                    <v-list-item-group
                        v-model="selectedItem"
                        color="primary"
                    >
                        <v-list-item
                        v-for="(song, i) in songs"
                        :key="i"
                        class="mt-1"
                        >
                        <img :src="`../assets/covers/${song.img}`" class="w-20 h-20" alt="">
                        <v-list-item-content>
                            <v-list-item-title v-text="song.title"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    </v-list>
        </v-list-item>
      </v-list-group>
    </v-list>
            <!-- end test -->

          </v-card-text>
        </v-card>
        </div>
    </div>
</template>

<script>
import songs from '@/songs.json';
    export default {
        data() {
            return {
                audioStarted:false,
                volume: 45,
                fakeData:["Abc","def","dwa","dwad1","dawdwa","Grsrsg","grsgsr","dawadw","herrhe"],
                time:0,
                songs:songs,
                songPeriod:0,
                selectedItem:0,
                nextSongTransition:true,
            }
        },
        mounted: function () {
            this.$watch('currentSong', () => {
                this.$refs.audio.load()
              this.startAudio();
            })
        },
        methods: {
            startAudio(){
                this.$refs.audio.play();
                this.audioStarted = true;
                let that = this
                this.$refs.audio.addEventListener('timeupdate', function () {
                    let songDuration = that.$refs.audio.duration.toFixed()
                    that.$refs.audio.volume = that.volume/100
                     that.time = that.$refs.audio.currentTime.toFixed() 
                     console.log(songDuration)
                     console.log(that.time)
                     if(songDuration == that.time){
                      that.nextAudio();
                     }
                     that.songPeriod = ((that.time/songDuration)*100).toFixed();
                })
            },
            stopAudio(){
                this.audioStarted = false;
                this.$refs.audio.pause();
            },
            nextAudio(){
              if(this.selectedItem < this.songs.length-1){
                this.selectedItem++;
              }else{
                this.selectedItem = 0;
              }
            },
            prevAudio(){
              if(this.selectedItem >0){
                this.selectedItem--
              }else{
                this.selectedItem = this.songs.length-1;
              }
            }
        },
        computed:{
          currentSong(){
            return this.songs[this.selectedItem];
          }
        }

    }
</script>

<style  scoped>

</style>