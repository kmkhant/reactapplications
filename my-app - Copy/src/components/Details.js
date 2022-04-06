import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import ThemeContext from "./ThemeContext";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true, showModal: false };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }
    // console.log(this.state);
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    return (
      <div className="h-screen">
        <Carousel images={images} />
        <div className="text-center">
          <h1 className="font-medium">{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                className="inline bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-4 my-4 border border-red-500 hover:border-transparent rounded sm:my-6"
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p className="px-16 sm:px-64">{description}</p>
          {showModal ? (
            <Modal>
              <Transition appear show={showModal} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 z-10 overflow-y-auto"
                  onClose={this.toggleModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>
                    {/* This element is to trick the browser into centering the modal contents */}
                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Are you sure ?
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            You will have to take care of this pet. Click "YES"
                            to proceed to payment methods.
                          </p>
                        </div>
                        <div className="flex mt-4 justify-center">
                          <button
                            type="button"
                            className="inline bg-transparent hover:bg-red-500 mx-4 text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded"
                            onClick={this.adopt}
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            className="inline bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded"
                            onClick={this.toggleModal}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
              {/*<div>
                <h1>Would you like to adopt {name} ?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
              */}
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
