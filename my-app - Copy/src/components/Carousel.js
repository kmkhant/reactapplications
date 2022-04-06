import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="flex mx-12 my-8 sm:mx-32">
        <img
          src={images[active]}
          alt="animal"
          className="inline h-32 w-32 object-cover rounded-full mx-4 sm:h-64 sm:w-64 sm:mx-8"
        />
        <div className="flex flex-wrap">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              className={
                index === active
                  ? "inline object-cover rounded-full h-16 w-16 mx-2 my-1 sm:h-32 sm:w-32 border-4 border-red-500"
                  : "inline object-cover rounded-full h-16 w-16 mx-2 my-1 sm:h-32 sm:w-32"
              }
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
