// Landing page for the user

import '../css/home.css';

export function Home() {
  return (

    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-12S align-self-end">
            <h1 className="text-white-75 font-weight-bold">Mt. React</h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-12 align-self-baseline">
            <h3 className="text-white-75 mb-5">A world class ski resort built on React, TypeScript, BootStrap, and Express.</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
