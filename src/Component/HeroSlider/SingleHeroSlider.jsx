import TextModifier from "react-text-modifier";


const SingleHeroSlider = ({ slider  }) => {

  const { bg, title,des } = slider;

  return (
    <>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details">
        <TextModifier
          text={title}
          as="h1"
          renderSeparator={() => <div className="mt-1  md:mt-4" />}
          className="font-bold text-3xl md:text-4xl lg:text-5xl"
          highlight={["Sports", "Training","Camp","Club"]}
          highlightClassName="text-4xl md:text-5xl lg:text-6xl text-orange-500"
        />
        <TextModifier
          text={des}
          as="h3"
          renderSeparator={() => <div className="mt-5 md:mt-4" />}
          className="font-semibold text-xl md:text-1xl lg:text-2xl"
          
          highlightClassName="text-4xl md:text-5xl lg:text-6xl text-orange-500"
        />
      </div>
    </>
  );
};

export default SingleHeroSlider;