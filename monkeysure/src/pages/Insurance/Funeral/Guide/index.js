import React from 'react';
import './guide.scss';

const Guide = () => (
  <section className="funeral-guide mb-12 flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">All you need to know about funeral cover</h4>
        <p className="font-light">Research based answers to those very important questions</p>
      </div>
      <div>
        <div className="guide-row">
          <div className="guide-div">
            <h4 className="text-lg font-normal">Funeral cover FAQs</h4>
            <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate cursus sapien, quis facilisis justo ullamcorper eget. Pellentesque nunc diam, tempor sed pellentesque at, placerat quis dolor. Duis pulvinar sed sapien at semper. Etiam cursus egestas tortor. Cras dignissim, felis eget finibus congue, lectus massa lobortis orci, at rutrum tortor massa nec mauris.k</p>
            <button className="mt-4 btn border-primary">
              View FAQs
            </button>
          </div>
          <div className="guide-div">
            <h4 className="text-lg font-normal">Funeral cover glossary</h4>
            <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate cursus sapien, quis facilisis justo ullamcorper eget. Pellentesque nunc diam, tempor sed pellentesque at, placerat quis dolor. Duis pulvinar sed sapien at semper. Etiam cursus egestas tortor. Cras dignissim, felis eget finibus congue, lectus massa lobortis orci, at rutrum tortor massa nec mauris.k</p>
            <button className="mt-4 btn border-primary">
              View glossary
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Guide;