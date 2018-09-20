//importanto o react
import React from 'react'

const divUrl1 = 'https://editor-latest.s3.amazonaws.com/design-blocks/block_images/bg_c_1.svg'
const divUrl2 = 'https://editor-latest.s3.amazonaws.com/design-blocks/block_images/bg_c_2.svg'
const divUrl3 = 'https://editor-latest.s3.amazonaws.com/design-blocks/block_images/bg_0.svg'
const divStyle1 = { backgroundImage: 'url(' + divUrl1 + ')' };
const divStyle2 = { backgroundImage: 'url(' + divUrl2 + ')' };
const divStyle3 = { backgroundImage: 'url(' + divUrl3 + ')' };

const Home = () => (

    <div>
       <section class="fdb-block pb-0" data-block-type="contents" data-id="3" draggable="true">
        <div class="container">
            <div class="row align-items-center">
            <div class="col-10 col-sm-6 m-auto col-md-4 pb-4 pb-md-0">
                <img alt="image" class="img-fluid br-0" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_tall.png"/>
            </div>

            <div class="col-12 ml-auto col-md-6 col-lg-5">
                <h1>Design Blocks</h1>
                <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p><a class="btn btn-round mt-4 mb-5 mb-md-0" href="https://www.froala.com">Download</a></p>
            </div>
            </div>
        </div>
      </section>
      <section class="fdb-block" data-block-type="contents" data-id="4" draggable="true">
        <div class="col-fill-left" style={divStyle1}>
        </div>

        <div class="container">
            <div class="row justify-content-end">
            <div class="col-12 col-md-5 text-center">
                <h1>Froala Blocks</h1>
                <p class="text-h3">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>

                <p class="mt-4"><a href="https://www.froala.com">Learn More &gt;</a></p>
            </div>
            </div>
        </div>
      </section>
<section class="fdb-block pt-0 pb-0 fp-active" data-block-type="contents" data-id="5" draggable="true">
  <div class="col-fill-right" style={divStyle2}>

  </div>

  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-12 col-md-5 text-center">
        <h1>Froala Blocks</h1>
        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <p class="mt-4 mb-5"><a class="btn" href="https://www.froala.com">Button</a></p>

        <p>Follow us on</p>
        <p>
          <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp;
          <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp;
          <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;
          <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp;
          <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a>
        </p>
      </div>
    </div>
  </div>
</section>
<section class="fdb-block pb-0" style={divStyle3} data-block-type="contents" data-id="9" draggable="true">
  <div class="container">
    <div class="row text-left">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="fdb-box fdb-touch br-0">
          <h2><strong>Design Blocks</strong></h2>
          <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
          <p class="text-h3 mt-4"><a href="https://www.froala.com">Read More</a></p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="fdb-block" data-block-type="testimonials" data-id="10" draggable="true">
  <div class="container">
    <div class="row pb-xl-5 text-center justify-content-center">
      <div class="col-md-10 col-lg-7">
        <h1>Testimonials</h1>
      </div>
    </div>

    <div class="row mt-5 justify-content-center">
      <div class="col-md-8 col-lg-4 col-xl-3 m-auto text-center">
        <img alt="image" height="50" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/customers/intel.svg"/>
        <p class="text-h3 mt-3">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."</p>

        <p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
        <p>Co-founder at Company</p>
      </div>

      <div class="col-md-8 col-lg-4 col-xl-3 pt-5 pt-lg-0 m-auto text-center">
        <img alt="image" height="50" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/customers/apple.svg"/>
        <p class="text-h3 mt-3">"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>

        <p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
        <p>Co-founder at Company</p>
      </div>

      <div class="col-md-8 col-lg-4 col-xl-3 pt-5 pt-lg-0 m-auto text-center">
        <img alt="image" height="50" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/customers/samsung.svg"/>
        <p class="text-h3 mt-3">"A small river named Duden flows by their place and supplies it with the necessary regelialia."</p>

        <p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
        <p>Co-founder at Company</p>
      </div>
    </div>
  </div>
</section>
<section class="fdb-block" data-block-type="forms" data-id="8" draggable="true">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-8 col-xl-6">
        <div class="row">
          <div class="col text-center">
            <h1>Register</h1>
            <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col mt-4">
            <input type="text" class="form-control" placeholder="Company Name"/>
          </div>
        </div>
        <div class="row align-items-center mt-4">
          <div class="col">
            <input type="email" class="form-control" placeholder="Email"/>
          </div>
        </div>
        <div class="row align-items-center mt-4">
          <div class="col">
            <input type="password" class="form-control" placeholder="Password"/>
          </div>
          <div class="col">
            <input type="password" class="form-control" placeholder="Confirm Password"/>
          </div>
        </div>
        <div class="row justify-content-start mt-4">
          <div class="col">
            <div class="form-check">
              <label class="form-check-label">
                  <input type="checkbox" class="form-check-input"/>
                  I Read and Accept <a href="https://www.froala.com">Terms and Conditions</a>
                </label>
            </div>

            <button class="btn mt-4">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="fdb-block team-5" data-block-type="teams" data-id="11" draggable="true">
  <div class="container">
    <div class="row text-center justify-content-center">
      <div class="col-8">
        <h1>Meet Our Team</h1>
      </div>
    </div>

    <div class="row-70"></div>

    <div class="row text-center justify-content-center">
      <div class="col-sm-2 m-sm-auto">
        <img alt="image" class="img-fluid" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg"/>

        <h3><strong>Sara Doe</strong></h3>
        <p>"Wild Question Marks, but the Little Blind"</p>
      </div>

      <div class="col-sm-2 m-sm-auto">
        <img alt="image" class="img-fluid" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg"/>

        <h3><strong>Sara Doe</strong></h3>
        <p>"Wild Question Marks, but the Little Blind"</p>
      </div>

      <div class="col-sm-2 m-sm-auto">
        <img alt="image" class="img-fluid" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg"/>

        <h3><strong>Sara Doe</strong></h3>
        <p>"Wild Question Marks, but the Little Blind"</p>
      </div>

      <div class="col-sm-2 m-sm-auto">
        <img alt="image" class="img-fluid" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg"/>

        <h3><strong>Sara Doe</strong></h3>
        <p>"Wild Question Marks, but the Little Blind"</p>
      </div>
    </div>

    <div class="row justify-content-center text-center">
      <div class="col-sm-2  m-sm-auto">
        <img alt="image" class="img-fluid" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg"/>

        <h3><strong>Sara Doe</strong></h3>
        <p>"Wild Question Marks, but the Little Blind"</p>
      </div>

      <div class="col-sm-2 m-sm-auto">
        <img alt="image" class="img-fluid" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg"/>

        <h3><strong>Sara Doe</strong></h3>
        <p>"Wild Question Marks, but the Little Blind"</p>
      </div>

      <div class="col-sm-2 m-sm-auto">
        <img alt="image" class="img-fluid" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg"/>

        <h3><strong>Sara Doe</strong></h3>
        <p>"Wild Question Marks, but the Little Blind"</p>
      </div>

      <div class="col-sm-2 m-sm-auto">
        <img alt="image" class="img-fluid" src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg"/>

        <h3><strong>Sara Doe</strong></h3>
        <p>"Wild Question Marks, but the Little Blind"</p>
      </div>
    </div>
  </div>
</section>
    </div>
)

export default Home
