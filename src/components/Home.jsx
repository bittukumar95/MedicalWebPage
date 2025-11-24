import React from "react";

function Home() {
  return (
    <>
      <div className="MainHome">
        <div className="secondhome">
          <h1>WELCOME TO MEDILAB </h1>
          <p>
            We are team of talented designers making websites with Bootstrap{" "}
          </p>
        </div>
        <div className="smailDiv">
          <div className="FirstDiv grid-left-item">
            <h1>Why Choose Medilab?</h1>
            <p>
              Medilab is trusted for delivering high-quality and patient-focused
              healthcare. Our team of expert doctors and specialists use
              advanced medical technology to ensure accurate diagnosis and
              effective treatment. We provide 24/7 emergency support, a clean
              and hygienic environment, and affordable treatment plans with no
              hidden charges. With fast appointment services and minimal waiting
              times, we make sure every patient receives timely care and
              personal attention. Medilab is committed to safety, trust, and
              excellence — making it the preferred choice for thousands of
              patients.
            </p>
            <button className="butto">Learn More &gt; </button>
          </div>
          <div className="SecondDiv grid-right-item">
            <i class="fa-solid fa-mobile"></i>
            <h1>Corporis voluptates officia eiusmod</h1>
            <p>
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
              laboris nisi ut aliquip
            </p>
          </div>
          <div className="SecondDiv grid-right-item">
            <i class="fa-solid fa-diamond"></i>
            <h1>Ullamco laboris ladore pan</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt
            </p>
          </div>
          <div className="SecondDiv grid-right-item">
            <i class="fa-solid fa-tty"></i>
            <h1>Labore consequatur incidid dolore</h1>
            <p>
              Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores
              omnis facere
            </p>
          </div>
        </div>

        {/* second page */}

        {/* third page */}
        {/* <div className="MainHome" id="category">
        <div className="secondhome">
          <h1>WELCOME TO MEDILAB </h1>
          <p>
            We are team of talented designers making websites with Bootstrap{" "}
          </p>
        </div>
        <div className="smailDiv">
          <div className="FirstDiv">
            <h1>Why Choose Medilab?</h1>
            <p>
              Medilab is trusted for delivering high-quality and patient-focused
              healthcare. Our team of expert doctors and specialists use
              advanced medical technology to ensure accurate diagnosis and
              effective treatment. We provide 24/7 emergency support, a clean
              and hygienic environment, and affordable treatment plans with no
              hidden charges. With fast appointment services and minimal waiting
              times, we make sure every patient receives timely care and
              personal attention. Medilab is committed to safety, trust, and
              excellence — making it the preferred choice for thousands of
              patients.
            </p>
            <button className="butto">Learn More &gt; </button>
          </div>
          <div className="SecondDiv">Div2</div>
          <div className="SecondDiv">Div3</div>
          <div className="SecondDiv">Div4</div>
        </div>
      </div> */}
      </div>
      <div className="SecondSection" id="about">
        <div className="video">
          <video src="video.mp4" className="playvideo"></video>
        </div>

        <div className="Information">
          <div className="InfoFirst">
            <h1>About Us</h1>
            <p>
              Dolor iure expedita id fuga asperiores qui sunt consequatur
              minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui
              magnam itaque veritatis dolores. Corrupti totam ut eius incidunt
              reiciendis veritatis asperiores placeat.
            </p>
          </div>
          <div className="infoSecond">
            <h2 className="forI">
              <i class="fa-solid fa-book-medical"></i>
            </h2>
            <div className="forPara">
              <h1>Ullamco laboris nisi ut aliquip consequat</h1>
              <p>
                Magni facilis facilis repellendus cum excepturi quaerat
                praesentium libre trade
              </p>
            </div>
          </div>
          {/* second info */}
          <div className="infoSecond">
            <h2 className="forI">
              <i class="fa-solid fa-book-medical"></i>
            </h2>
            <div className="forPara">
              <h1>Magnam soluta odio exercitationem reprehenderi</h1>
              <p>
                Quo totam dolorum at pariatur aut distinctio dolorum laudantium
                illo direna pasata redi
              </p>
            </div>
          </div>
          {/* third info */}
          <div className="infoSecond">
            <h2 className="forI">
              <i class="fa-solid fa-book-medical"></i>
            </h2>
            <div className="forPara">
              <h1>Voluptatem et qui exercitationem</h1>
              <p>
                Et velit et eos maiores est tempora et quos dolorem autem
                tempora incidunt maxime veniam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* information hospital */}
      <div className="Hospital">
        <div className="HospitalInnerDiv">
          <i class="fa-solid fa-user-doctor"></i>
          <h1>85</h1>
          <p>Doctors</p>
        </div>
        {/* seond div */}
        <div className="HospitalInnerDiv">
        <i class="fa-solid fa-house"></i>
            <h1>18</h1>
        <p>Departments</p>
        </div>
      

        {/* third div */}
        <div className="HospitalInnerDiv">
        <i class="fa-solid fa-flask"></i>
        <h1>12</h1>
        <p>Research Labs</p>

        </div>

        {/* forrth div */}
        <div className="HospitalInnerDiv">
      <i class="fa-solid fa-award"></i>
        <h1>150</h1>
        <p>Awards</p>

        </div>
      </div>
    </>
  );
}

export default Home;
