import { _location_comment_list } from "../constant/image_content.js";
import { randomNumber } from "../constant/random.js";

'use strict';

const c = React.createElement;

class location_comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { water : "great" };
  }

  render() {
    if (this.state.water === "great") {
        return React.createElement(
            "div",
            {
              className : " text-center"
            },
            React.createElement(
              "div",
              {
                className : "mt-20"
              },
              `${_location_comment_list[randomNumber]}`
            ),
        )

    }
  }
}
const _location_comment_domContainer = document.querySelector('#_water_mobile_location_comment');
ReactDOM.render(c(location_comment), _location_comment_domContainer);

