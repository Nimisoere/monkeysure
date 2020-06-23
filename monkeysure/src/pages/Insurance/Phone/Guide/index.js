import React from 'react';
import './guide.scss';

const Guide = () => (
  <section className="phone-guide mb-12 flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Know more about Device Insurace</h4>
        <p className="font-light">Before you proceed, the following info can help make an informed decision</p>
      </div>
      <div>
        <div className="guide-row">
          <div className="guide-div">
            <h4 className="text-lg font-normal">What is Device Insurace</h4>
            <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate cursus sapien, quis facilisis justo ullamcorper eget. Pellentesque nunc diam, tempor sed pellentesque at, placerat quis dolor. Duis pulvinar sed sapien at semper. Etiam cursus egestas tortor. Cras dignissim, felis eget finibus congue, lectus massa lobortis orci, at rutrum tortor massa nec mauris.k</p>
          </div>
          <div className="guide-div">
            <h4 className="text-lg font-normal">How to claim insurace</h4>
            <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate cursus sapien, quis facilisis justo ullamcorper eget. Pellentesque nunc diam, tempor sed pellentesque at, placerat quis dolor. Duis pulvinar sed sapien at semper. Etiam cursus egestas tortor. Cras dignissim, felis eget finibus congue, lectus massa lobortis orci, at rutrum tortor massa nec mauris.k</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn border-primary">
          Get quote
        </button>
      </div>
    </div>
  </section>
);

export default Guide;