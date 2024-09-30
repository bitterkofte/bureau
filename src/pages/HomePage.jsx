import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import B0 from "../assets/banners/0.png";
import B1 from "../assets/banners/1.png";
import B2 from "../assets/banners/2.png";

import "swiper/css";
import "swiper/css/navigation";

const HomePage = () => {
  return (
    <div className="pt-20 dark:text-white">
      <Swiper
        className="select-none"
        loop={true}
        navigation={true}
        pagination={{
          type: "bullets",
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={B0} className="h-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={B1} className="h-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={B2} className="h-80" />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      <div className="px-20 py-8">
        <h2 id="ekibimiz" className="text-3xl font-extrabold mb-5">
          Ekibimiz
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          ultrices magna sollicitudin hendrerit tincidunt. Integer faucibus,
          neque a ultrices congue, magna purus condimentum risus, ut sagittis
          neque ligula vel justo. Sed fermentum luctus magna, ac vulputate
          libero tempus vel. Sed sodales orci sed orci ultricies fermentum non
          eu lacus. Nunc non semper lectus, a rhoncus metus. Etiam vitae posuere
          nibh. Pellentesque nec aliquam nisl. Nulla dignissim odio eu nisi
          tempor egestas. Donec pharetra faucibus hendrerit. Proin posuere
          faucibus nulla vel varius. Donec accumsan tellus eros, non mattis leo
          aliquam sit amet. Aenean arcu sem, feugiat vitae pellentesque vitae,
          finibus eu sapien. Nam rutrum nibh id tellus imperdiet rhoncus. In
          quis mauris ut purus tristique laoreet. Nulla facilisi. Aliquam
          maximus dui vitae aliquam dignissim. Duis et porttitor diam. Sed et
          iaculis augue. Aliquam commodo tortor ipsum, ac blandit nunc lobortis
          at. Aenean ornare sed magna sit amet viverra. Suspendisse vitae auctor
          leo.
        </p>
        <br />
        <p>
          Phasellus a orci vel lectus venenatis pharetra a eget magna. Sed quam
          metus, facilisis vestibulum ante ut, hendrerit consequat augue.
          Quisque pellentesque sapien et leo consectetur porta. Pellentesque
          lobortis ante vel neque elementum faucibus. Etiam auctor condimentum
          volutpat. Mauris pharetra nibh fringilla ligula semper, eget pretium
          leo dapibus. Suspendisse ultrices placerat sem, vitae vehicula orci
          pharetra a. Praesent congue varius ipsum nec maximus. Integer accumsan
          sagittis tellus sit amet suscipit. Mauris nisi massa, bibendum in
          velit eget, placerat auctor justo. Donec vitae fermentum erat,
          facilisis suscipit magna.
        </p>
        <h2
          id="calisma-alanlarimiz"
          className="text-3xl font-extrabold mt-8 mb-5"
        >
          Çalışma Alanlarımız
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          ultrices magna sollicitudin hendrerit tincidunt. Integer faucibus,
          neque a ultrices congue, magna purus condimentum risus, ut sagittis
          neque ligula vel justo. Sed fermentum luctus magna, ac vulputate
          libero tempus vel. Sed sodales orci sed orci ultricies fermentum non
          eu lacus. Nunc non semper lectus, a rhoncus metus. Etiam vitae posuere
          nibh. Pellentesque nec aliquam nisl. Nulla dignissim odio eu nisi
          tempor egestas. Donec pharetra faucibus hendrerit. Proin posuere
          faucibus nulla vel varius. Donec accumsan tellus eros, non mattis leo
          aliquam sit amet. Aenean arcu sem, feugiat vitae pellentesque vitae,
          finibus eu sapien. Nam rutrum nibh id tellus imperdiet rhoncus. In
          quis mauris ut purus tristique laoreet. Nulla facilisi. Aliquam
          maximus dui vitae aliquam dignissim. Duis et porttitor diam. Sed et
          iaculis augue. Aliquam commodo tortor ipsum, ac blandit nunc lobortis
          at. Aenean ornare sed magna sit amet viverra. Suspendisse vitae auctor
          leo.
        </p>
        <br />
        <p>
          Phasellus a orci vel lectus venenatis pharetra a eget magna. Sed quam
          metus, facilisis vestibulum ante ut, hendrerit consequat augue.
          Quisque pellentesque sapien et leo consectetur porta. Pellentesque
          lobortis ante vel neque elementum faucibus. Etiam auctor condimentum
          volutpat. Mauris pharetra nibh fringilla ligula semper, eget pretium
          leo dapibus. Suspendisse ultrices placerat sem, vitae vehicula orci
          pharetra a. Praesent congue varius ipsum nec maximus. Integer accumsan
          sagittis tellus sit amet suscipit. Mauris nisi massa, bibendum in
          velit eget, placerat auctor justo. Donec vitae fermentum erat,
          facilisis suscipit magna.
        </p>
      </div>
    </div>
  );
};
export default HomePage;