import { _background_list, _character_list } from "../constant/image_content.js";
import { randomNumber } from "../constant/random.js";

'use strict';

const e = React.createElement;

class background extends React.Component {
  constructor(props) {
    super(props);
    this.state = { water : "great" }; // 추후 state 받아서 수정하는 형식으로 가야함 임시로 random으로 설정
  }

  render() {
    if (this.state.water === "great") { // 추후 state 받아서 수정하는 형식으로 가야함 임시로 random으로 설정
        return React.createElement(
            "div",
            {
              className : `flex justify-center bg-center bg-no-repeat bg-[url('${_character_list[randomNumber]}')]`
            },
            React.createElement(
                "img",
                {
                    className : "h-80 animate-pulse",
                    src : `${_background_list[randomNumber]}`
                }
            )
        )

    }
  }
}

const _background_domContainer = document.querySelector('#_water_mobile_image');
ReactDOM.render(e(background), _background_domContainer);