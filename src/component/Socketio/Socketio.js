import { RepeatRounded } from "@material-ui/icons";
import React from "react";

function Socketio() {
  return(
    <div>
      <button><a href="https://robust-entity-homeway.herokuapp.com/volunteer/1/host/2/chat">socketio</a></button>
    </div>

    // <div class="centered-form">
    //     <div class="centered-form__box">
    //         <h1>
    //             Room <%=data.room  %>
    //         </h1>
    //         <div class="chat">
    //         <form action="/chatRoom" method="get">
    //             <input type="hidden" name="username" value="<%=data.username%> ">
    //             <input type="hidden" name="room" value="<%=data.room  %> ">
    //             <button>start chat</button>
    //         </form>
    //     </div>
    //     </div>
    // </div>

    // </form>
  )
}

export default Socketio;