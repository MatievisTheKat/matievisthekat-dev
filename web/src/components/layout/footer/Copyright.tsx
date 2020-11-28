import React from "react";

import Link from "../../Link";

interface State {}
interface Props {}

export default class Copyright extends React.Component<Props, State> {
  public render() {
    return (
      <span className="mt-auto text-xs">
        © Copyright MatievisTheKat 2020
        <br />
        Icons made by{" "}
        <Link to="https://www.flaticon.com/authors/freepik" external={true} title="Freepik">
          Freepik
        </Link>{" "}
        and{" "}
        <Link to="https://www.flaticon.com/authors/nikita-golubev" external={true} title="Nikita Golubev">
          Nikita Golubev
        </Link>{" "}
        from{" "}
        <Link to="https://www.flaticon.com/" external={true} title="Flaticon">
          www.flaticon.com
        </Link>
      </span>
    );
  }
}
