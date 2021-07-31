import React from "react";
import Card from "./Card";
import web1 from '../src/images/s1.jpeg';
import web2 from '../src/images/s2.jpeg';
import web3 from '../src/images/s3.jpeg';
import web4 from '../src/images/s4.jpeg';
import web5 from '../src/images/s5.jpeg';
import web6 from '../src/images/s6.jpeg';

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card imgsr={web1} title='Web-Devlopment'/>
              <Card imgsr={web2} title='App-Devlopment'/>
              <Card imgsr={web3} title='Digital Marketing' />
              <Card imgsr={web4} title='Mobile-Devlopment'/>
              <Card imgsr={web5} title='Marketing Strategy' />
              <Card imgsr={web6} title='Android Devlopment' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
