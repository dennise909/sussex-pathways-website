import styled from "@emotion/styled";

type ContainerProps = {
  height: string;
  width: string;
  margin?: string;
  variantColor: string;
  borderRadius: string;
  backgroundImage?: any;
  backgroundSize?: any;
  textAlign?: any;
  display?: string;
  padding?: string;
  float?: string;
};

const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  background-color: ${({ variantColor }: { variantColor: string }) =>
    variantColor ? variantColor : "#f9f9f9"};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSize};
  background-position: center;
  border-radius: ${(props) => props.borderRadius};
  max-width: 100%;
  text-align: ${(props) => props.textAlign};
  display: ${(props) => props.display};
  padding: ${(props) => props.padding};
  float: ${(props) => props.float};
`;

const BlockContainer = ({
  children,
  variantColor,
  height,
  width,
  margin,
  borderRadius,
  backgroundImage,
  backgroundSize,
  textAlign,
  display,
  padding,
  float,
}: //
{
  children: React.ReactNode;
  variantColor?: any;
  height: string;
  width: string;
  margin?: any;
  borderRadius?: any;
  backgroundImage?: any;
  backgroundSize?: any;
  textAlign?: any;
  display?: string;
  padding?: string;
  float?: string;
}) => {
  return (
    <Container
      height={height}
      width={width}
      margin={margin}
      variantColor={variantColor}
      borderRadius={borderRadius}
      backgroundImage={backgroundImage}
      backgroundSize={backgroundSize}
      textAlign={textAlign}
      display={display}
      padding={padding}
      float={float}
    >
      {children}
    </Container>
  );
};

export default BlockContainer;
