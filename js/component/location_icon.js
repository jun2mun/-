'use strict';

const f = React.createElement;

class location_icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { water : "great" };
  }

  render() {
    if (this.state.water === "great") {
        return React.createElement(
            "button",
            {
              className : "mt-10",
              onClick: () => {location.href='https://map.naver.com/v5/'}
            },
            React.createElement(
              "img",
              {
                className : "w-20 h-20",
                src : "./asset/icon/location_icon.svg"
              },
            ),
            React.createElement(
                "div",
                {
                    className : "mb-2 text-sm"
                },
                "내 위치 확인"
            )
        )

    }
  }
}
const _location_icon_domContainer = document.querySelector('#_water_mobile_location_icon');
ReactDOM.render(f(location_icon), _location_icon_domContainer);

