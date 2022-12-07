import PropTypes from "prop-types";

export const FirstApp = ({ title }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>explicacion del nodo padre </p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay Titulo",
};
