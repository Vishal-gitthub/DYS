import React, { Suspense, lazy, useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
const Navbar = lazy(() => import("./Components/Navbar"));
const Footer = lazy(() => import("./Components/Footer"));
const Home = lazy(() => import("./Components/Home"));
const RequestFormPage = lazy(() => import("./Components/RequestFormPage"));
const About = lazy(() => import("./Components/About"));
const ChooseUs = lazy(() => import("./Components/ChooseUs"));
const Services = lazy(() => import("./Components/Services"));
const Blog = lazy(() => import("./Components/Blog"));
const CRM = lazy(() => import("./Components/CRM"));
// Service Page Child Components Import
const WebDevlopment = lazy(() =>
  import("./ComponentsChildPages/ServicePageChildComponent/WebDevlopment")
);
const SEO = lazy(() =>
  import("./ComponentsChildPages/ServicePageChildComponent/SEO")
);
const VideoEditing = lazy(() =>
  import("./ComponentsChildPages/ServicePageChildComponent/VideoEditing")
);
const WritingContent = lazy(() =>
  import("./ComponentsChildPages/ServicePageChildComponent/ContentWriting")
);
const EmailMS = lazy(() =>
  import("./ComponentsChildPages/ServicePageChildComponent/EmailMS")
);
const SocialMediaMarketing = lazy(() =>
  import("./ComponentsChildPages/ServicePageChildComponent/SocialMediaM")
);

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="ldsRippleCnt">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RequestPage" element={<RequestFormPage />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/chooseus" element={<ChooseUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/crm" element={<CRM />} />
          {/* Service Page Child Components  */}
          <Route path="webDevlopment" element={<WebDevlopment />} />
          <Route path="SEOService" element={<SEO />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/writingContent" element={<WritingContent />} />
          <Route path="/emailServices" element={<EmailMS />} />
          <Route path="/smm" element={<SocialMediaMarketing />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
