<template>
  <div>
    <template v-if="productId === 'figma'">
      <div class="project1">
        <h1>Ticket Booking Interface Design</h1>
        <br>
        <img src="@/assets/fp-1.png" alt="">
        <h2>Project Details</h2>
        <p>Pembuatan tampilan antarmuka untuk pemesanan tiket taman bermain Gofun di Bojonegoro dengan menggunakan Figma</p>
        <ul>
          <li>Halaman Login</li>
          <li>Halaman Register</li>
          <li>Halaman Pemesanan Tiket</li>
          <li>Halaman Pembayaran</li>
        </ul>
        <h2>Teams</h2>
        <ul>
          <li>Zilvi Azus Sriyanti</li>
          <li>Syahrani Ratnaswari</li>
          <li>Nilam Kumallah Anggreani</li>
        </ul>
        <h2>Link Project</h2>
        <a href="https://www.figma.com/file/HbNcltt1yc6Y9gF6yljUaa/E-BISNIS?type=design&node-id=16-5&t=gC9hKXOrm6e1nXnj-0">Link Figma</a>
        <p>Dibuat tahun 2022</p>
      </div>
    </template>

    <template v-else-if="productId === 'game'">
      <div class="project2">
        <h1>Game Flappy Fish</h1>
        <br>
        <img src="@/assets/fp-2.png" alt="">
        <h2>Project Details</h2>
        <p>Pembuatan game flappy fish sederhana yang bisa dimainkan di web browser</p>
        <ul>
          <li>Menggunakan HTML, CSS, dan JavaScript</li>
          <li>Menggunakan tools Visual Studio Code dan Web Browser</li>
        </ul>
        <h2>Teams</h2>
        <ul>
          <li>Zilvi Azus Sriyanti</li>
          <li>M. Sahlan Amin</li>
          <li>Hafizh Abiyyu Firdaus</li>
        </ul>
        <h2>Link Project</h2>
        <a href="https://github.com/zilviazz/flappy">Link Github</a>
        <p>Dibuat tahun 2022</p>
      </div>
    </template>

    <template v-else-if="productId === 'credit'">
      <div class="project3">
        <h1>Credit Scoring Analysis</h1>
        <br>
        <img src="@/assets/fp-3.png" alt="">
        <h2>Project Details</h2>
        <p>Analisis data untuk memprediksi Bad Credit dan Good Credit calon nasabah</p>
        <ul>
          <li>Memberikan solusi data science dengan permasalahan credit scoring menggunakan langkah-langkah mengikuti framework CRISP-DM</li>
          <li>Dataset yang dibutuhkan dapat diperoleh dari kaggle yaitu dataset Home Credit Risk Scoring</li>
          <li>Pengerjaan kelompok dilakukan menggunakan Jupyter Notebook, Google Colab, Google Data Studio menggunakan bahasa python library pandas</li>
          <li>Pemrosesan data menggunakan google colab</li>
          <li>Pembuatan dashboard menggunakan google data studio</li>
          <li>Pembuatan presentasi analisis data di google slides</li>
        </ul>
        <h2>Teams</h2>
        <ul>
          <li>Zilvi Azus Sriyanti</li>
          <li>Puput Aryanti</li>
          <li>Amanda Hasna C.</li>
          <li>Said H.A.</li>
          <li>Seraf Adonai</li>
        </ul>
        <h2>Link Project</h2>
        <ul>
          <li><a href="https://colab.research.google.com/drive/1_gp0ay1DxWe05ChrDoiAUkK8e_CofsLV?usp=sharing">Link Google Colab</a></li>
          <li><a href="https://datastudio.google.com/reporting/483a65e4-79cf-4b8a-bb68-c3ea6665b700">Link Dashboard</a></li>
          <li><a href="https://docs.google.com/presentation/d/1_q3hSPPEi3ZO4BcAl-LMTtYxKhfFKBMxg5XVczZeoSw/edit?usp=sharing">Link Presentasi</a></li>
        </ul>
        <p>Dibuat tahun 2022</p>
      </div>
    </template>

    <template v-else-if="productId === 'stock'">
      <div class="project4">
        <h1>Monitoring Stock Opname Website</h1>
        <br>
        <img src="@/assets/fp-4.png" alt="">
        <h2>Project Details</h2>
        <p>Pembuatan aplikasi webiste untuk melakukan monitoring stock barang di gudang</p>
        <ul>
          <li>Project ini merupakan projek MSIB yang dikerjakan secara tim di PT. Stechoq Robotika Indonesia</li>
          <li>Membuat website untuk monitoring stock menggunakan  framework JS yaitu vue.js untuk frontend dan express.js untuk backend</li>
          <li>Website ini dapat melakukan CRUD dan tampilan dasboard</li>
        </ul>
        <h2>Teams</h2>
        <ul>
          <li>Zilvi Azus Sriyanti</li>
          <li>Firdan Mahendra</li>
          <li>Fadhilah Shabuhalaika</li>
          <li>Ais Fitria Nursanti</li>
        </ul>
        <h2>Link Project</h2>
        <a href="https://github.com/firdanmahendraa/monistock_app">Link Github</a>
        <p>Dibuat tahun 2023</p>
      </div>
    </template>

    <template v-else-if="productId === 'learning'">
      <div class="project5">
        <h1>Math Learning Website</h1>
        <br>
        <img src="@/assets/fp-5.png" alt="">
        <h2>Project Details</h2>
        <p>Website ini digunakan untuk pembelajaran matematika anak SD dari kelas 1-6. Pembelajaran bisa diakses melalui website sesuai kelas berdasarkan kelas dan bab yang telah disediakan serta terdapat latihan soal yang dapat dikerjakan</p>
        <ul>
          <li>Projek kelompok membuat website dengan framework CI4 menggunakan bahasa PHP di Visual Studio Code</li>
          <li>Database yang digunakan yaitu database SQL.</li>
        </ul>
        <h2>Teams</h2>
        <ul>
          <li>Zilvi Azus Sriyanti</li>
          <li>Hafizh Abiyyu Firdaus</li>
          <li>Muhammad Izzuddin</li>
          <li>M. Sahlan Amin</li>
        </ul>
        <h2>Link Project</h2>
        <a href="https://github.com/zilviazz/pem.web.sipm">Link Github</a>
        <p>Dibuat tahun 2022</p>
      </div>
    </template>

    <template v-else>
      <div class="project6">
        <h1>Sentiment Analysis of the Boycott of Israeli Products Using BERT</h1>
        <br>
        <img src="@/assets/fp-6.png" alt="">
        <h2>Project Details</h2>
        <p>Melakukan analisis sentimen pada Twitter terkait aksi boikot produk Israel menggunakan model BERT</p>
        <ul>
          <li>Melakukan analisis data sentimen menggunakan google colab dari opini orang-orang terkait aksi boikot pada twitter</li>
          <li>Membuat visualisasi website dengan framework streamlit untuk menampilkan dashboard dan validasi prediksi opini</li>
          <li>Menggunakan pelabelan otomatis dari Vader</li>
        </ul>
        <h2>Created by</h2>
        <ul>
          <li>Zilvi Azus Sriyanti</li>
        </ul>
        <h2>Link Project</h2>
        <a href="https://colab.research.google.com/drive/1Plh8O4xQ4XE7_jyw828IfD6EydLyMRpR?usp=sharing">Link Google Colab</a>
        <p>Dibuat tahun 2024</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productId: ''
    };
  },
  created() {
    this.productId = this.$route.params.id;
  }
};
</script>

<style>
.project1 img, .project2 img, .project3 img, .project4 img, .project5 img, .project6 img {
  width: 50rem;
  border-radius: 1rem;
  border: 1rem solid #312e2e;
}

@media (max-width: 700px) {
  .project1, .project2, .project3, .project4, .project5, .project6 {
    min-height: 50vh;
  }

  .project1 img, .project2 img, .project3 img, .project4 img, .project5 img, .project6 img {
    width: 13rem;
    border: .5rem solid #312e2e;
  }
}
</style>
