<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12"
                 md="4">
            <v-card class="pa-5">
              <v-card-title>
                FFI-AUTOMATE
              </v-card-title>
              <v-form>
                <v-text-field label="Movie title"
                              v-model="video.title"></v-text-field>
                <v-combobox v-model="video.categories"
                            label="Categories"
                            multiple
                            chips>
                </v-combobox>

                <v-text-field label="Watch URL">
                </v-text-field>

                <v-text-field label="Trailer URL">
                </v-text-field>

                <v-textarea v-model="video.description"
                            label="Descrption">

                </v-textarea>

                <v-text-field label="Landing URL"
                              v-model="video.landingImage">

                </v-text-field>

                <v-text-field label="Poster URL"
                              v-model="video.posterImage">
                </v-text-field>

                <div v-for="(item, index ) in video.about"
                     :key="index">
                  <v-subheader class="font-weight-bold ">
                    About #{{index}}
                    <v-spacer></v-spacer>
                    <v-icon color="red"
                            @click="handleRemoveAbout(index)">mdi-delete</v-icon>
                  </v-subheader>
                  <v-text-field class="mt-4"
                                label="Title"
                                v-model="video.about[index].title">

                  </v-text-field>

                  <v-text-field label="Text"
                                v-model="video.about[index].text">

                  </v-text-field>
                </div>
                <v-btn small
                       color="primary"
                       @click="handleAddCast">Add another about</v-btn>
                <div v-for="(item, index ) in video.cast"
                     :key="index">
                  <v-subheader class="font-weight-bold ">
                    Cast #{{index}}
                    <v-spacer></v-spacer>
                    <v-icon color="red"
                            @click="handleRemoveCast(index)">mdi-delete</v-icon>
                  </v-subheader>

                  <v-text-field class="mt-4"
                                label="Image URL"
                                v-model="video.cast[index].imageUrl">
                  </v-text-field>
                  <v-text-field class="mt-4"
                                label="Title"
                                v-model="video.cast[index].title">

                  </v-text-field>

                  <v-text-field label="Text"
                                v-model="video.cast[index].subtitle">

                  </v-text-field>
                </div>
                <v-btn small
                       color="primary"
                       @click="handleAddCast">
                  Add Another Cast
                </v-btn>
                <v-text-field class="mt-4"
                              v-model="video.screenerUrl"
                              label="Screener URL">

                </v-text-field>
              </v-form>
            </v-card>
          </v-col>
          <v-col cols="12"
                 md="8">
            <v-card>
              <v-img class="white--text align-end"
                     :src="video.landingImage">
                <v-card-title>
                  <h1 class="display-1 font-weight-bold">
                    {{video.title}}
                  </h1>
                </v-card-title>
                <v-card-text>
                  <h4>
                    <span v-for="(category, index) in video.categories"
                          :key="index">
                      {{category}} <span v-if="index  != video.categories.length -1">|</span>
                    </span>
                  </h4>
                </v-card-text>
                <v-card-text>
                  <v-btn dark
                         class="mr-3">Watch film</v-btn>
                  <v-btn dark>Watch trailer</v-btn>
                </v-card-text>
                <v-card-text>
                  <p class="title">
                    {{video.description}}
                  </p>
                </v-card-text>
              </v-img>

              <v-card-text>
                <h1 class="mt-5 mb-5 text-uppercase">About the film</h1>
                <v-row>
                  <v-col cols="12"
                         md="4">
                    <v-img :src="video.posterImage"></v-img>
                  </v-col>
                  <v-col cols="12"
                         md="8">
                    <h2 class="red--text mb-4">
                      <span v-for="(category, index) in video.categories"
                            :key="index">
                        {{category}} <span v-if="index  != video.categories.length -1">|</span>
                      </span>
                    </h2>
                    <p v-for="(item, index) in video.about"
                       :key="index">
                      <span class="font-weight-bold">
                        {{item.title}}
                      </span>: {{item.text}}
                    </p>
                    <v-btn dark>Watch film</v-btn>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-text>
                <h1 class="mt-5 mb-5 text-uppercase">Casts</h1>
                <v-row>
                  <v-col cols="12"
                         md="3"
                         v-for="(item, index) in video.cast"
                         :key="index">
                    <v-card flat>
                      <v-img :src="item.imageUrl"></v-img>
                      <v-card-title>
                        {{item.title}}
                      </v-card-title>
                      <v-card-text>
                        <p>
                          {{item.subtitle}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-text>
                <h1 class="mt-5 mb-5 text-uppercase">Private Screener</h1>
                <iframe :src="video.screenerUrl"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowfullscreen=""
                        name="fitvid0"
                        width="100%"
                        height="300px"></iframe>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    video: {
      title: 'NIGHT RAIN',
      categories: [
        'Crime',
        'Mystery',
        'Thriller'
      ],
      description: 'An actress is unwittingly hired by her stalker to make a low budget period movie about a famous unsolved Los Angeles murder, but she and her company of young indie filmmakers soon discover themselves to be the real subjects of the terror.',
      landingImage: 'https://www.firstfocusinternational.com/wp-content/uploads/2020/09/NCGHFXGH.jpg',
      posterImage: 'https://www.firstfocusinternational.com/wp-content/uploads/2020/09/dsfasdfasdf.jpg',
      about: [
        {
          title: 'Directors',
          text: 'Synthian Sharp, Jeanne Marie Spicuzza'
        },
        {
          title: 'Writer',
          text: 'Jeanne Marie Spicuzza'
        },
        {
          title: 'Producer',
          text: ' Jeanne Marie Spicuzza'
        },
        {
          title: 'Language',
          text: 'English'
        },
        {
          title: 'Country',
          text: 'United States'
        }
      ],
      cast: [
        {
          imageUrl: 'https://www.firstfocusinternational.com/wp-content/uploads/2020/09/YGFGHGF.jpg',
          title: 'Jeanne Marie Spicuzza',
          subtitle: 'as Ava'
        },
        {
          imageUrl: 'https://www.firstfocusinternational.com/wp-content/uploads/2020/09/JHUBU.jpg',
          title: 'Adam Lesar',
          subtitle: 'as Ezra'
        },
        {
          imageUrl: 'https://www.firstfocusinternational.com/wp-content/uploads/2020/09/JHIUIJNIJN.jpg',
          title: 'Clarissa Thibeaux',
          subtitle: 'as Nefreri'
        },
        {
          imageUrl: 'https://www.firstfocusinternational.com/wp-content/uploads/2020/09/JKIUBIB.jpg',
          title: 'Thessa Mloe',
          subtitle: 'as Thomasina'
        }
      ],
      screenerUrl: 'https://player.vimeo.com/video/473279380?dnt=1&app_id=122963'
    },
  }),
  methods: {
    handleRemoveAbout (index) {
      this.video.about.splice(index, 1)
    },
    handleAddAbout () {
      this.video.about.push({ title: '', text: '' })
    },
    handleRemoveCast (index) {
      this.video.cast.splice(index, 1)
    },
    handleAddCast () {
      this.video.cast.push({ title: '', text: '' })
    }
  }
};
</script>
