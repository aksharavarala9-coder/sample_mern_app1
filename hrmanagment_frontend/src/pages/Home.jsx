import nature1 from '../assets/nature1.jpg';
import nature2 from '../assets/nature2.jpg';
import nature3 from '../assets/nature3.jpg';

function Home() {
  return (
    <div>
      <div id="carouselStacked" class="carousel slide">
  <div class="d-flex justify-content-between align-items-center">
    <h5 class="mb-0">Top controls</h5>
    <div>
      <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselStacked" data-bs-slide="prev">
        <span class="carousel-icon-prev" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselStacked" data-bs-slide="next">
        <span class="carousel-icon-next" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="carousel-inner rounded-5">
    <div class="carousel-item active">
      <img src={nature1} class="d-block w-100" alt="Nature 1"></img>
    </div>
    <div class="carousel-item">
      <img src={nature2} class="d-block w-100" alt="Nature 2"></img>
    </div>
    <div class="carousel-item">
      <img src={nature3} class="d-block w-100" alt="Nature 3"></img>
    </div>
  </div>
</div>
    </div>
  );
}
export default Home;