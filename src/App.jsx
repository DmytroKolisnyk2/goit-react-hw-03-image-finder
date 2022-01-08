import React, { Component } from "react";
import "./styles/App.scss";
import Searchbar from "./components/Searchbar/Searchbar";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { apiRequest } from "./services/apiService";
import Modal from "./components/Modal/Modal";
import ScrollTopArrow from "./components/ScrollTopArrow/ScrollTopArrow";

import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

class App extends Component {
  state = {
    isLoading: false,
    photoData: [],
    page: 1,
    showLoadMoreButton: false,
    query: "",
    error: "",
    largeImage: "",
    showModal: false,
    description: "",
  };

  componentDidMount() {
    info({ text: "Type your query and find photos" });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.findImages().then(() => window.scrollTo(0, 0));
    }
    if (this.state.page !== prevState.page && this.state !== 1) {
      this.findImages().then(() =>
        window.scrollBy({
          top: 260,
          behavior: "smooth",
        })
      );
    }
  }

  onSubmit = (query) => {
    this.setState({ query: query, error: "", page: 1, photoData: [] });
  };

  onClickLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  findImages = async () => {
    const { page } = this.state;
    this.setState({ isLoading: true, showLoadMoreButton: false });

    apiRequest(this.state.query, page)
      .then(({ data }) => {
        this.setState((prevState) => ({
          photoData: [...prevState.photoData, ...data.hits],
          showLoadMoreButton: data.hits.length === 12 && true,
          error: data.hits.length === 0 && "Opps, nothing found",
        }));
      })
      .catch(() => this.setState({ error: "Oops, something went wrong" }))
      .finally(() => this.setState({ isLoading: false }));
  };

  setLargeImage = (imgUrl, description) => {
    this.toggleModal();
    this.setState({ largeImage: imgUrl, description: description });
  };

  toggleModal = () => this.setState((prevState) => ({ showModal: !prevState.showModal }));

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.error && <h2 className="errorMesage">{this.state.error}</h2>}
        {!this.state.error && (
          <ImageGallery setLargeImage={this.setLargeImage} photoData={this.state.photoData}>
            {this.state.isLoading && <Loader />}
          </ImageGallery>
        )}
        {this.state.showLoadMoreButton && <Button onClick={this.onClickLoadMore} />}
        {this.state.showModal && (
          <Modal onClick={this.toggleModal}>
            <img src={this.state.largeImage} alt={this.state.description} />
          </Modal>
        )}
        <ScrollTopArrow borderRadius={"50%"} color={"white"} bgColor={"#3f51b5"} />
      </>
    );
  }
}

export default App;
