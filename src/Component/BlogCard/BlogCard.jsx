import { Link } from "react-router-dom";
import "./BlogCard.css"
import Bloger from "../Bloger/Bloger";
function BlogCard(props) {
  return (
    <>
      <Link to="BlogDetails" className="fsf">
        <div className="m-5">
          <div className="card">
            <img
              src={props.img}
              className="card-img-top img_card"
              alt="..."
            />
            
            <div className="card-body">
            <p class="text-primary Technology">Technology</p>

              <h5 className="card-title">
              The Impact of Technology on the Workplace: How Technology is Changing
              </h5>
              <Bloger blogerimg={props.blogerimg} blogerName={props.blogerName}/>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BlogCard;
