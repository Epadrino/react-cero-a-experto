import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle} </p>
      <p>{subTitle} </p>
      <p>explicacion del nodo padre </p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "agrega un Titulo",
  subTitle: "Agrega un Subtitulo",
};
