import React from "react";
import axios from "axios";

class FavoriteMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      comment: "",
      poster: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = " https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Ton film ${res.id} a bien été ajouté`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un employé : ${e.message}`);
      });
  }

  render() {
    return (
      <div className="FavoriteMovie">
        <h1>Saisie de mon film favoris</h1>
        <form onSubmit={this.submitForm}>
          <div clasName="form-data">
            <label htmlFor="title">Movie's name</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>

          <div clasName="form-data">
            <label htmlFor="poster">get Url</label>
            <input
              type="text"
              id="poster"
              name="poster"
              onChange={this.onChange}
              value={this.state.poster}
            />
          </div>

          <div clasName="form-data">
            <label htmlFor="comment">comment your movie </label>
            <textarea
              name="comment"
              id="comment"
              onChange={this.onChange}
              value={this.state.comment}
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="form-data">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    );
  }
}

export default FavoriteMovie;
