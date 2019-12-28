import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "custom/iclick/components/Breadcrumbs";

const TermsOfService = ({ router: { asPath } }) => (
  <Fragment>
    <div className="container">
      <Breadcrumbs isPage={true} pageName={asPath.replace(/-|\//gi, " ")} />

      <div className="container">
        <div className="row">
          <div className="col text-center my-5">
            <h2>Terms of Service</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus suscipit praesentium omnis et iusto
              voluptas natus modi sed, sapiente dolore? Deleniti fugit rerum reiciendis eveniet. Vero fuga unde
              consequuntur veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus suscipit
              praesentium omnis et iusto voluptas natus modi sed, sapiente dolore? Deleniti fugit rerum reiciendis
              eveniet. Vero fuga unde consequuntur veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus suscipit praesentium omnis et iusto voluptas natus modi sed, sapiente dolore? Deleniti fugit
              rerum reiciendis eveniet. Vero fuga unde consequuntur veniam? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Accusamus suscipit praesentium omnis et iusto voluptas natus modi sed, sapiente dolore?
              Deleniti fugit rerum reiciendis eveniet. Vero fuga unde consequuntur veniam? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Accusamus suscipit praesentium omnis et iusto voluptas natus modi sed,
              sapiente dolore? Deleniti fugit rerum reiciendis eveniet. Vero fuga unde consequuntur veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odio placeat, qui consequatur sit
              accusamus esse neque at ad omnis? Aliquid vitae corrupti, dignissimos possimus sequi eveniet. Ipsa,
              tempora nisi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus suscipit praesentium
              omnis et iusto voluptas natus modi sed, sapiente dolore? Deleniti fugit rerum reiciendis eveniet. Vero
              fuga unde consequuntur veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
              suscipit praesentium omnis et iusto voluptas natus modi sed, sapiente dolore? Deleniti fugit rerum
              reiciendis eveniet. Vero fuga unde consequuntur veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam blanditiis autem nihil placeat, rem fugit
              pariatur, cumque voluptatum ad asperiores earum esse eveniet. Molestias doloribus, sequi error quae
              voluptas blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus suscipit
              praesentium omnis et iusto voluptas natus modi sed, sapiente dolore? Deleniti fugit rerum reiciendis
              eveniet. Vero fuga unde consequuntur veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus suscipit praesentium omnis et iusto voluptas natus modi sed, sapiente dolore? Deleniti fugit
              rerum reiciendis eveniet. Vero fuga unde consequuntur veniam?
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

TermsOfService.propTypes = {
  router: PropTypes.object.isRequired
};

export default TermsOfService;
