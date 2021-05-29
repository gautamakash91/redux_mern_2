import { CircularProgress, Dialog, DialogContent } from "@material-ui/core";
import React from "react";

export default class Counter extends React.Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    console.log(this.props.ct);
    let {
      ct
    } = this.props;
    return (
      <div>
        {ct.users.map((s) => (
          <div>
            {s.first_name} {s.last_name}
          </div>
        ))}

        <Dialog open={false}>
          <DialogContent>
            <CircularProgress />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}