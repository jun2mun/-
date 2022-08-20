import { _comment_content_list, _comment_title_list } from "../constant/image_content.js";
import { randomNumber } from "../constant/random.js";

'use strict';

const m = React.createElement;

class comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { water : "great" };
  }

  render() {
    if (this.state.water === "great") {
        return React.createElement(
            "div",
            {
              className: "text-center"
            },
            React.createElement(
              "div",
              {
                className : "mt-4 text-3xl"
              },
              `${_comment_title_list[randomNumber]}`
            ),
            React.createElement(
              "div",
              {
                className : "mt-8"
              },
              `${_comment_content_list[randomNumber][0]}`,
              React.createElement(
                "br"
              ),
              `${_comment_content_list[randomNumber][1]}`
            ),
        )

    }
  }
}
const _comment_domContainer = document.querySelector('#_water_mobile_comment');
ReactDOM.render(m(comment), _comment_domContainer);

