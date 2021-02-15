import React, { Fragment } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Footer(props) {
  return (
    <Fragment>
      <hr />
      <footer className='d-flex justify-content-center position-relative'>
        <p>
          &copy; {props.name} &middot;{" "}
          <a href={props.link} title={props.name} target='_blank'>
            {props.explic}
          </a>{" "}
          &middot;{" "}
        </p>
        <p className='float-right position-absolute l-0'>
          <Link smooth to='#header' className='text-secondary'>
            <strong>Voltar par o topo</strong>
          </Link>
        </p>
      </footer>
    </Fragment>
  );
}

export default Footer;
