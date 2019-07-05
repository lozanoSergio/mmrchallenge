import PropTypes from "prop-types";
import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { Menu } from "semantic-ui-react";

const BsNavLink = ({ router, ...props }) => {
  const { route, title, as } = props;

  let active =
    router.asPath === `/${as}` || (router.asPath === "/" && as === "/");

  return (
    <Link href={route} as={as}>
      <Menu.Item active={active}>{title}</Menu.Item>
    </Link>
  );
};

BsNavLink.propTypes = {
  router: PropTypes.object,
  route: PropTypes.string,
  title: PropTypes.string,
  as: PropTypes.string
};

export default withRouter(BsNavLink);
